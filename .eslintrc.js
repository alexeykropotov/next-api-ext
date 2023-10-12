/* eslint-env node */
module.exports = {
  extends: ["./packages/eslint-config"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
  },
  root: true,
};
