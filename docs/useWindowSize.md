# `useWindowSize`

Hook that allows a component to keep track of the current size of the browser window

## Usage

[`See Code `](../hooks/useWindowSize.js)

```jsx
import useWindowSize from "./useWindowSize"
const App = () => {
  const { width, height } = useWindowSize()
  return (
    <div>
      {width} x {height}
    </div>
  );
};
```

## Reference

```js
const { width, height } = useWindowSize()
```
- `width` &mdash; current width of the browser window
- `height` &mdash; current height of the browser window
