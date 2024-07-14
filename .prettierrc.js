module.exports = {
  tabWidth: 2,
  arrowParens: 'always',
  singleQuote: true,
  printWidth: 120,
  semi: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  bracketSameLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['class', 'classes'],
  tailwindFunctions: ['formatClasses', 'customTwMerge'],
};
