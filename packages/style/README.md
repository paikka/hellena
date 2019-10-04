# @hellena/style

> Styles for software products using the Hellena Design System

## Getting started

To install `@hellena/style` in your project, you will need to run the following
command using [npm](https://www.npmjs.com/):


```bash
npm install -S @hellena/style
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @hellena/style
```

# File organization

### The 5-1 pattern

The file are organized using 5-1 pattern, which is abstracted from the [7-1 pattern](https://sass-guidelin.es/#architecture). 5 folders, 1 file to compile them all in a single CSS file.

```
sass/
|
|- utilities/            # Configuration and helpers
|   |- _variables.css    # Global variables
|   |- _functions.css
|   |- _mixins.css
|   …
|
|- vendor/               # Third-party CSS
|   |- _normalize.css
|   …
|
|- base/                 # Boilerplate code
|   |- _reset.css
|   |- _base.css
|   |- _typography.css
|   …
|
|- layout/               # Global wireframe (macro)
|   |- _sidebar.css
|   …
|
|- components/           # Modules (micro)
|   |- _buttons.css
|   |- _cards.css
|   |- _tables.css
|   …
|
`- main.css              # Main file to import everything
```

## API Documentation

If you're looking for `@hellena/style` API documentation, check out:

- [Sass](./docs/sass.md)

## Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)!

## 📝 License

Licensed under the [MIT](/LICENSE).
