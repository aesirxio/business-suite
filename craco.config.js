const { DefinePlugin } = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = {
  eslint: {
    enable: false,
  },

  webpack: {
    plugins: {
      add: [
        new DefinePlugin({
          VERSION: JSON.stringify(gitRevisionPlugin.version()),
        }),
        new FileManagerPlugin({
          events: {
            onEnd: {
              copy: [
                {
                  source: path.resolve(
                    __dirname,
                    './node_modules/aesirx-pim-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
              ],
            },
          },
        }),
      ],
    },
  },
};
