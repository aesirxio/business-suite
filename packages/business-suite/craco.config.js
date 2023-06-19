const { DefinePlugin } = require('webpack');
const { GitRevisionPlugin } = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();
const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new DefinePlugin({
          VERSION: JSON.stringify(gitRevisionPlugin.version()),
        }),
        new FileManagerPlugin({
          events: {
            onStart: {
              copy: [
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-pim-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-crm-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-dma-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-content-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-bi-app/public/assets/images/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/images/`),
                },
                {
                  source: path.resolve(
                    __dirname,
                    '../../node_modules/aesirx-bi-app/public/assets/data/'
                  ),
                  destination: path.resolve(__dirname, `public/assets/data/`),
                },
              ],
            },
          },
        }),
      ],
    },
  },
};
