const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

export default {
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "utils": "./src/utils"
      }
    }]
  ]
}