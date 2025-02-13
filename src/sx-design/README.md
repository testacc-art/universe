**🚧 WORK in PROGRESS 🚧**

[![Crowdin](https://badges.crowdin.net/sx-design/localized.svg)](https://crowdin.com/project/sx-design)

Inclusive design system written using [`@adeira/sx`](https://github.com/adeira/sx). Core value of this project are (in this order):

- ⚛️ exclusively using atomic CSS via [`@adeira/sx`](https://github.com/adeira/sx)
- 🏳️‍🌈 fully supported localization ([🇺🇸🇲🇽🇨🇿🇳🇴🇺🇦🇷🇺🇦🇪](https://crowdin.com/project/sx-design))
- ☯️ light and dark theme out of the box
- 🆘 accessible components for people with visual impairment
- حلال support for RTL layouts ([🇦🇪](https://crowdin.com/project/sx-design))

# Installation and Usage

Using SX Design is as simple as installing the package via NPM or Yarn and importing the right component from `@adeira/sx-design`.

```bash
yarn add @adeira/sx-design
```

SX Design is fully localized and requires information about the current application locale. This typically changes with every user, so it's necessary to provide it via `SxDesignProvider` React component (before the first SX Design component in the React tree):

```js
import { ErrorBoundary, SxDesignProvider } from '@adeira/sx-design';

export default function MyRootApp() {
  return (
    <SxDesignProvider
      locale="en-US" // affects translations as well as dates, monetary values and similar
      theme="light" // or "dark" or "system"
    >
      <ErrorBoundary>{/* … */}</ErrorBoundary>
    </SxDesignProvider>
  );
}
```

The error boundary is optional but highly recommended.

# Available components

**🚧 WORK in PROGRESS 🚧**

Legend:

```text
✅  yes! (or not relevant)
🧐  needs some more work (or not evaluated yet)
```

| Component             | Localized?¹ | Dark mode?² | Has stories?³ | Tested?⁴ | RTL?⁵ |
| --------------------- | :---------: | :---------: | :-----------: | :------: | :---: |
| [`<Badge />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Button />`]        |     ✅      |     ✅      |      ✅       |    🧐    |  🧐   |
| [`<ButtonLink />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Emoji />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Entity />`]        |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<EntityField />`]   |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<ErrorBoundary />`] |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Heading />`]       |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Image />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<Kbd />`]           |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Link />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Loader />`]        |     ✅      |     ✅      |      ✅       |    🧐    |  🧐   |
| [`<LinkButton />`]    |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<MissingData />`]   |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Modal />`]         |     ✅      |     ✅      |      🧐       |    🧐    |  🧐   |
| [`<Money />`]         |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Note />`]          |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<ProductCard />`]   |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |
| [`<Section />`]       |     ✅      |     ✅      |      ✅       |    🧐    |  🧐   |
| [`<Skeleton />`]      |     ✅      |     ✅      |      ✅       |    ✅    |  ✅   |
| [`<SkipLink />`]      |     ✅      |     🧐      |      🧐       |    🧐    |  🧐   |
| [`<Temperature />`]   |     ✅      |     ✅      |      🧐       |    ✅    |  🧐   |
| [`<Tooltip />`]       |     ✅      |     ✅      |      ✅       |    ✅    |  🧐   |

[`<badge />`]: https://sx-design.vercel.app/?path=/story/example-badge
[`<button />`]: https://sx-design.vercel.app/?path=/story/example-button
[`<buttonlink />`]: https://sx-design.vercel.app/?path=/story/example-buttonlink
[`<emoji />`]: https://sx-design.vercel.app/?path=/story/example-emoji
[`<entity />`]: https://sx-design.vercel.app/?path=/story/example-entity
[`<entityfield />`]: https://sx-design.vercel.app/?path=/story/example-entityfield
[`<errorboundary />`]: https://sx-design.vercel.app/?path=/story/example-errorboundary
[`<heading />`]: https://sx-design.vercel.app/?path=/story/example-heading
[`<image />`]: https://sx-design.vercel.app/?path=/story/example-image
[`<kbd />`]: https://sx-design.vercel.app/?path=/story/example-kbd
[`<link />`]: https://sx-design.vercel.app/?path=/story/example-link
[`<loader />`]: https://sx-design.vercel.app/?path=/story/example-loader
[`<linkbutton />`]: https://sx-design.vercel.app/?path=/story/example-linkbutton
[`<missingdata />`]: https://sx-design.vercel.app/?path=/story/example-missingdata
[`<modal />`]: https://sx-design.vercel.app/?path=/story/example-modal
[`<money />`]: https://sx-design.vercel.app/?path=/story/example-money
[`<note />`]: https://sx-design.vercel.app/?path=/story/example-note
[`<productcard />`]: https://sx-design.vercel.app/?path=/story/example-productcard
[`<section />`]: https://sx-design.vercel.app/?path=/story/example-section
[`<skeleton />`]: https://sx-design.vercel.app/?path=/story/example-skeleton
[`<skiplink />`]: https://sx-design.vercel.app/?path=/story/example-skiplink
[`<temperature />`]: https://sx-design.vercel.app/?path=/story/example-temperature
[`<tooltip />`]: https://sx-design.vercel.app/?path=/story/example-tooltip

_Did you find a mistake in this table? Please, [report is as an issue](https://github.com/adeira/universe/issues/new)._

¹ Localized means that it's either translated by us or the component inputs are (Flow) typed in a way that encourages passing translated strings instead of plain strings.

² Component should look fine in both light and dark mode.

³ There are stories in the [Storybook](https://sx-design.vercel.app/) and these stories are somehow useful and explanatory.

⁴ There are tests available to make sure that the component works as expected and we won't break it by accident.

⁵ Component correctly supports right-to-left (RTL) as well as traditional left-to-right (LTR) layouts

# Styles customization

SX Design leverages full power of [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) as a main way of style customization. You can optionally overwrite the values from your application. Most of the CSS variable values are available in [`src/SxDesignProviderCSSVariables.js`](./src/SxDesignProviderCSSVariables.js) or in a documentation of each component (when they relate only to that component).

There is also an `useSxDesignContext` hook which allows you to access system theme and other global SX Design properties:

```js
export default function MyComponent() {
  // `theme` can be "light", "dark" or "system"
  const { theme } = useSxDesignContext();
}
```

# Development

## Storybook

The easiest way how to develop these components is to run a Storybook:

```bash
yarn workspace @adeira/sx-design storybook
```

Please, make sure that any changes still follow the core values of this project and the matrix of available components was updated accordingly.

## Working with SX Design colors

It's recommended to use [`pastel`](https://github.com/sharkdp/pastel) when working with the SX Design colors:

```bash
brew install pastel
```

SX Design commonly uses colors written as triplets of values from 0 to 255. Here is how you can convert these triplets back and forth:

```bash
pastel color "28, 30, 33"
pastel format hex "28, 30, 33"
```

To generate colors gradient run:

```bash
pastel gradient -n 9 '255, 255, 255' '28, 30, 33'
pastel gradient -s rgb -n 9 '255, 255, 255' '28, 30, 33' | pastel format rgb
```

Another interesting command for checking colors with simulated colorblindness:

```bash
pastel colorblind deuter "247,212,214" "255,26,26" "238,0,0" "197,0,0"
```

For more info run:

```bash
pastel --help
```

# Prior art

_sorted alphabetically_

- https://github.com/vercel/commerce
- https://seek-oss.github.io/braid-design-system/
- https://vercel.com/design
