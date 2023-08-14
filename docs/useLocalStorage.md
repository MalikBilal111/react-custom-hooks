# `useLocalStorage`

Hook that allows you to synchronize and manage state between a component and the browser's local storage

## Usage

[`See Code `](../hooks/useLocalStorage.js)

```jsx
import useLocalStorage from "hooks";
const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  return (
    <button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      Toggle theme
    </button>
  );
};
```

## Reference

```js
const [value, setValue] = useLocalStorage(key, defaultValue);
```
- `value` &mdash; The current value stored in the local storage associated with the provided key.
- `setValue` &mdash; A function used to update the value stored in the local storage for the provided key.
- `key` &mdash; A unique identifier used to access and store data in the local storage.
- `defaultValue` &mdash; The initial value set in the local storage if no existing value is found for the provided key.