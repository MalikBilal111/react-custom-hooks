# `useCheckMobileScreen`

Hook that detects whether the window is in a mobile or desktop screen size

## Usage

[`See Code `](./hooks/useCheckMobileScreen.js)

```jsx
import useCheckMobileScreen from "hooks";
const Demo = () => {
  const { isMobile } = useCheckMobileScreen();
  return (
    <>
      {isMobile ? (
        <div>Render something for Mobile Only</div>
      ) : (
        <div>Render Something on Desktop Only</div>
      )}

      {/* Also In Case if you have different styles for mobile & desktop */}
      <p
        className={`${
          isMobile ? "mobile-screen-paragraph" : "desktop-screen-paragraph"
        }`}
      >
        Text Goes here
      </p>
    </>
  );
};
```

## Reference

```js
const { isMobile } = useCheckMobileScreen();
```

- `isMobile` &mdash; isMobile will detects whether the window is in a mobile or desktop screen size
