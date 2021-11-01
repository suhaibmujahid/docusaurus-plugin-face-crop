import { LoadContext, Plugin } from "@docusaurus/types";
import { UserPluginOptions } from "./types";
import { Configuration } from "webpack";

export default function (
  _context: LoadContext,
  options: UserPluginOptions
): Plugin<unknown> {
  const { id, paths, ...loaderOptions } = options;

  return {
    name: "docusaurus-plugin-face-crop",
    configureWebpack(_config: Configuration, _isServer: boolean) {
      return {
        module: {
          rules: [
            {
              test: /\.(png|jpe?g|gif)$/i,
              include: options.paths,
              use: [
                {
                  loader: require.resolve("webpack-face-crop-loader"),
                  options: loaderOptions,
                },
              ],
            },
          ],
        },
      };
    },
  };
}
