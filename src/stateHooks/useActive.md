# useActive hook

## use cases
To keep state of
 - menus,
 - dropdowns,
 - modal windows,
 - popovers
 - any other component which could be closed or deactivated

## arguments
`useActive` accepts an object with two properties as an argument
* `initialActiveState` is an initial state of `activeState`,
  default is `false`
* `initialAnchorEl` is an initial value of `elementRef`,
  default is `null.
  
## return value
`useActive` returns an object with all state values and function
to make state modifications
* `activeState` - is a boolean value which reflects the state
    * `false` means closed or inactive
    * `true` means open or active
* `elementRef` - keeps the reference to the element on which
  action happened, useful for displaying popover window near
  the place where mouse click happened
* `setActive` - function for changing `activeState` value to `true`
* `setInactive` - function for changing `activeState` value to `false`
* `toggleActiveState` - function for toggling `activeState` value
* `setElementRef` - function for setting the `elementRef` value
* `clearElementRef` - function for clearing the `elementRef` value

## examples

```jsx
import React from "react";
import { useActive } from "@mayacode/react-custom-hooks";

const rectangleStyle = {
  width: "200px",
  height: "200px",
  border: "1px solid red",
  cursor: "pointer"
}

const redRectangleStyle = {
  ...rectangleStyle,
  backgroundColor: "red",
};

const transparentRectangleStyle = {
  ...rectangleStyle,
  backgroundColor: "transparent",
};

export default function App() {
  const { activeState, toggleActiveState } = useActive();
  
  const style = activeState ?
          redRectangleStyle : transparentRectangleStyle;

  return (
    <div>
      <div style={style} onClick={toggleActiveState} />
    </div>
  );
}
```