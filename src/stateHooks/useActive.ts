import { useState, MouseEvent } from 'react'

export interface HookUseActiveReturn {
  activeState: boolean,
  setActive(): void,
  setInactive(): void,
  toggleActiveState(): void,
  elementRef: HTMLElement|null,
  setElementRef(event: MouseEvent<HTMLElement>): void,
  clearElementRef(event: MouseEvent<HTMLElement>): void,
}

export interface HookUseActiveParams {
  initialActiveState?: any,
  initialElementRef?: HTMLElement
}

/**
 * react custom hook for managing elements which could be active/open or inactive/closed
 *
 * @param {HookUseActiveParams}
 * @returns {HookUseActiveReturn}
 */
export default function ({
  initialActiveState = false,
  initialElementRef = null
}: HookUseActiveParams = {}): HookUseActiveReturn {
  const [activeState, setIsActive] = useState(!!initialActiveState);
  const [elementRef, setRef] = useState(initialElementRef);

  function setElementRef(event: MouseEvent<HTMLElement>): void {
    event.preventDefault();
    event.stopPropagation();
    setRef(event.currentTarget);
  }

  function clearElementRef(event: MouseEvent<HTMLElement>): void {
    event.preventDefault();
    event.stopPropagation();
    setRef(null);
  }

  function setActive(): void {
    setIsActive(true);
  }

  function setInactive(): void {
    setIsActive(false);
  }

  function toggleActiveState(): void {
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
