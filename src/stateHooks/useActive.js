const { useState } = require('react');

/**
 * @typedef {Object} useOpenReturnObject object returned by useOpen hook
 * @property {boolean} activeState - state value
 * @property {function} setActive - function for setting activeState to true
 * @property {function} setInactive - function for setting activeState to false
 * @property {function} toggleActiveState - function for toggling activeState value
 * @property {object || null} elementRef - element with active action
 * @property {function} setElementRef - function for setting ref
 * @property {function} clearElementRef - function for clearing ref
 */

/**
 * react custom hook for managing elements which could be active/open or inactive/closed
 *
 * @param {boolean} initialState initial value of opened variable
 * @param initialAnchorEl
 * @default [false]
 * @returns {useOpenReturnObject}
 */
function useActive({
  initialActiveState = false,
  initialAnchorEl = null
} = {}) {
  const [activeState, setIsActive] = useState(!!initialActiveState);
  const [elementRef, setRef] = useState(initialAnchorEl);

  function setElementRef(event) {
    event.preventDefault();
    event.stopPropagation();
    setRef(event.currentTarget);
  }

  function clearElementRef(event) {
    event.preventDefault();
    event.stopPropagation();
    setRef(null);
  }

  function setActive() {
    setIsActive(true);
  }

  function setInactive() {
    setIsActive(false);
  }

  function toggleActiveState() {
    setIsActive(!activeState);
  }

  return {
    activeState,
    setActive,
    setInactive,
    toggleActiveState,
    elementRef,
    setElementRef,
    clearElementRef,
  };
}

module.exports = {
  useActive,
};
