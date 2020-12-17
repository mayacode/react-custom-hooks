const { useState } = require('react');

/**
 * @typedef {Object} useActiveReturnType object returned by useActive hook
 * @property {boolean} activeState - state value
 * @property {function} setActive - function for setting activeState to true
 * @property {function} setInactive - function for setting activeState to false
 * @property {function} toggleActiveState - function for toggling activeState value
 * @property {(HTMLElement|null)} elementRef - element with active action
 * @property {function} setElementRef - function for setting ref
 * @property {function} clearElementRef - function for clearing ref
 */

/**
 * @typedef {Object} useActiveParam
 * @property {any} initialActiveState - initial value of activeState
 * @property {(HTMLElement|null)} initialElementRef - initial value of elementRef
 * @default [{ initialActiveState: false, initialElementRef: null }]
 */

/**
 * react custom hook for managing elements which could be active/open or inactive/closed
 *
 * @param {useActiveParam}
 * @returns {useActiveReturnType}
 */
function useActive({
  initialActiveState = false,
  initialElementRef = null
} = {}) {
  const [activeState, setIsActive] = useState(!!initialActiveState);
  const [elementRef, setRef] = useState(initialElementRef);

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
