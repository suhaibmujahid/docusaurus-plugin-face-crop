# docusaurus-plugin-face-crop

Docusaurus v2 plugin to crop faces in images.

## Getting Started

To begin, you'll need to install `docusaurus-plugin-face-crop`:

```console
$ npm install docusaurus-plugin-face-crop --save-dev
```

Then add the plugin to your `docusaurus.config.js` config. For example:

**file.js**

```js
import profile from "./pictures_dir/profile.jpg";
```

**docusaurus.config.js**

```js
module.exports = {
  // ...
  plugins: [
    // ...
    [
      "docusaurus-plugin-face-crop",
      {
        paths: [path.resolve(__dirname, "profile_photos")],
      },
    ],
  ],
};
```

## License

[MIT](./LICENSE)
