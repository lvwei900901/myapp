const packageJson = require('./package.json');
const outputPath = "dist/" + packageJson.name + "/" + packageJson.version + "/";

export default {
  "entry": "src/index.js",
  outputPath,
  "env": {
    "development": {
      "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  }
}