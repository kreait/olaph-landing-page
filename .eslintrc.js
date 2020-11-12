module.exports = {
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  plugins: ["vue"], // enable vue plugin
  extends: ["plugin:vue/essential", "prettier"] // activate vue related rules
};
