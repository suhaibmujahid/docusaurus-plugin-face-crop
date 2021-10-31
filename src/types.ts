import type { LoaderOptions } from "webpack-face-crop-loader/dist/types";

export type PluginOptions = {
  id?: string;
  paths: string[];
};

export type UserPluginOptions = PluginOptions & LoaderOptions;
