# Next-Storybook

This is a mini-experiment to embed Storybook in NextJS.

## How it works

It takes the NextJS starter template, adds a standard Storybook install, and then adds a "preview" page `pages/preview.js`, which embeds the Storybook runtime and is used to replace Storybook's "preview" iframe.

From there, you can run the dev server and then run Storybook's manager UI against it.

```
yarn dev
yarn storybook --no-manager-cache --preview-url=http://localhost:7000/preview
```

## Benefits

- ✅ It's fast, thanks to Next's on-demand building
- ✅ It uses the same settings as your app because it's running in your app

## Limitations

- ❌ It doesn't support `.storybook/main.js` globs, e.g. `'../**/*.stories.@(js|jsx|ts|tsx)'`
- ❌ It doesn't yet support `@storybook/docs` webpack magic
