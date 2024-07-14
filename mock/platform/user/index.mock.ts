import { MockHandler } from 'vite-plugin-mock-server';
import json from './merchant-setting.json';

const mocks: MockHandler[] = [
  {
    pattern: '/platform/user/merchantSetting',
    handle: (req, res) => {
      res.end(JSON.stringify(json));
    },
  },
];

export default mocks;
