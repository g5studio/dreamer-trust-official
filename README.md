## Project Setup Checklist

- [x] Project structure design
- [x] Responsive setup
- [ ] Branding setup
- [x] Theme setup
- [x] Environment setup
- [ ] CI/CD setup
- [x] API client setup
- [X] Mock server setup
- [X] Error handling design
- [X] i18n setup
- [x] WebSocket worker design
- [x] Timezone utility
- [x] Currency utility
- [ ] PWA setup

## Get Started

```bash
pnpm install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run proxy-dev`

Runs the app in the development mode with proxy server which allow you access the app in LAN.
It also start a remote inspector server in port 4321 for easy debugging in mobile device.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run serve-build`

Builds the app for production to the `dist` folder and serve it in local server.

### `npm run serve-build:watch`

Watch mode for serve-build. The preview server is available in port 4173 after build. It will also start a remote inspector server in port 4321 for easy debugging in mobile device.

### `npm run serve`

Run this command after `npm run serve-build` to locally preview the production build.

### `npm test`

Test the app.

### `npm run lint`

Run eslint to detect all file lint issue. It will auto fix any fixable lint error.

### `npm run storybook`

Open Storybook to visit our component library

### `npm run image-preprocess`

Convert all image from source into target, with compression setting and output webp at the same time. Files in vd001 ~ vd999 will be converted to bd{rawNumber}-{originalFileName}, it is because we don't want to expose our brand name while maintains the info in the filename. So that we can remove unrelated image when deploying the target brand. This command only run on modified or untracked file  

### `npm run image-preprocess /path`

Same as image-preprocess, instead of changed files, it runs preprocess at the path. For example:

```sh
npm run image-preprocess about-us/vd003
```

__Due to optimization reason, first level folder within target should be added into utilities/asset-splitting too__

### `npm run image-preprocess-all`

Same as image-preprocess but run on all file. Becareful with command, since it will run on all image file, it will be super slow if too many assets in our project

## Git Hook

We use husky to add git hook, it will do the following check:

### pre-commit

We will run test and eslint. Eslint will only run on staged files.

### commit-msg

We use commitlint to guard our commit message.

## Toolbox

We use toolbox to generate modules for better code consistent. Run follow command to install toolbox

```shell
npm i g5-toolbox-cli -g
```

After install, you can run following command to find toolbox command

```shell
toolbox help
```

For more details, please refer to [this document](https://innotech.atlassian.net/wiki/spaces/Frontend/pages/2625766148/Toolbox+CLI)

## Environment

[Vite](https://pages.github.com/) support `.env` and `.env.local`

If you want to set environment variable of the application, you can add a `.env.local` in your repo, this file is ignored by git

for example, you can add below content to `.env.local`

```text
VITE_ENV_NAME=stg
VITE_BRAND=vd001
```

You may also use environment variable in scripts, such as

```bash
VITE_ENV_NAME=uat pnpm dev
```

If you want to add a new environment variable, don't forget add it to below list. Also, Vite only support environment variable start with VITE

### Supported Environment Variable

- `VITE_ENV_NAME` is our environment name (dev, stg, uat, demo)
- `VITE_BRAND` is our vendor id (vd001, vd002, etc.)

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Error Handling Guide

Error is a critical aspect of an application, we must handle it carefully to make sure user has great experience.  

In UI/UX aspect, we have two type of error  

1. Error that user need to know
1. Error that user don't need to know

### Error that user need to know

Which kind of error user need to know? the answer is error that user can solve or user knowns how to deal with it.  
For example, user register an account name it has been used, then the user need to know this error and rename the account name.  
Another example, the page is in maintenance status, once user know it and user will wait until maintenance end.

When dealing with this kind of error, we need to provide meaningful message to the user so that user knows what to do.  

We have multiple way to do that, but we should priorities in this order, the upper the better:

1. show error message under form field or button text (best options, mostly use for user fixable error)
2. toast/top bar notification
3. dialog (worst options, since it will block user interaction)

### Error that user don't need to know

In most case, this error should be able to recover.  
For example, cannot get third party game list.  

When dealing with this kind of error, we just need to retry until we can get.  
For user, we need to has some kind of indicator that we are not ready yet, skeleton animation is a good choice.

## SolidJS Setup Reference

https://docs.solidjs.com/guides/how-to-guides/get-ready-for-solid

## Step up style

please refer to this MR: https://gitlab.service-hub.tech/frontend/fluid/-/merge_requests/18

### Vendor color setup

Follow steps below

1. add color key into env interface(both env.interface.ts & global.d.ts)
2. register new color key into vendor-colors.ts
3. set default value into env-config.js (just for development , will remove after node entrance provide config api)
4. mapping env variable in env.ts
5. setup tailwind config , the new color css variable will always be `-—color-${new key}`

### General color setup

Follow steps below

1. add color into color.scss
2. setup tailwind config , the new color css variable will always be `-—color-${map-name}-${key-name}`

### Storybook setup

Follow steps below

1. add a index.stories.tsx next to your component index.tsx file
2. follow https://storybook.js.org/docs/solid/writing-stories/introduction to add your story
3. run ```npm run storybook``` to preview your component in storybook

## Brand

### PWA assets

Add the following assets to the `vendor-public/{{brand}}` folder:

- `app-logo.png` (1024x1024)
- `favicon.ico` (48x48)
- `splash-logo.png` (1024x1024)

Then, convert the images to the correct format and size.

```bash
VITE_BRAND=vd004 npm run pwa-assets
```
