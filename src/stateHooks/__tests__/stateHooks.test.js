const { renderHook, act } = require('@testing-library/react-hooks');

const { useActive } = require('../useActive');

const cases = [
  [true, 'ala'],
  [false, ''],
  [true, 1],
  [false, NaN],
  [false, null],
];

const event = {
  currentTarget: { a: 1 },
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
};

describe('state hooks', () => {
  describe('useOpen function', () => {
    describe('state initial value', () => {
      it.each(cases)(
        'should be %p if hook was called with %p as argument',
        (expectedResult, initialActiveState) => {
          const { result } = renderHook(() => useActive({ initialActiveState }));

          expect(result.current.activeState).toEqual(expectedResult);
        },
      );
    });

    describe('setInactive function', () => {
      it('should set state to false', () => {
        const { result } = renderHook(() => useActive({ initialActiveState: true }));

        expect(result.current.activeState).toEqual(true);
        expect(typeof result.current.setInactive).toEqual('function');

        act(() => {
          result.current.setInactive();
        });

        expect(result.current.activeState).toEqual(false);
      });
    });

    describe('setActive function', () => {
      it('should set state to true', () => {
        const { result } = renderHook(() => useActive());

        expect(result.current.activeState).toEqual(false);
        expect(typeof result.current.setActive).toEqual('function');

        act(() => {
          result.current.setActive();
        });

        expect(result.current.activeState).toEqual(true);
      });
    });

    describe('toggleActiveState function', () => {
      it('should toggle state value', () => {
        const { result } = renderHook(() => useActive());

        expect(typeof result.current.toggleActiveState).toEqual('function');
        expect(result.current.activeState).toEqual(false);

        act(() => {
          result.current.toggleActiveState();
        });

        expect(result.current.activeState).toEqual(true);

        act(() => {
          result.current.toggleActiveState();
        });

        expect(result.current.activeState).toEqual(false);
      });
    });

    describe('ref initial value', () => {
      it('should return proper value', () => {
        const { result } = renderHook(() => useActive());

        expect(result.current.elementRef).toEqual(null);

        const initialAnchorEl = { a: 1 };
        const { result: result2 } = renderHook(() => useActive({ initialAnchorEl }));

        expect(result2.current.elementRef).toEqual(initialAnchorEl);
      });
    });

    describe('setElementRef function', () => {
      it('should set the ref from event', () => {
        const { result } = renderHook(() => useActive());

        expect(typeof result.current.setElementRef).toEqual('function');
        expect(result.current.elementRef).toEqual(null);

        act(() => {
          result.current.setElementRef(event)
        });

        expect(result.current.elementRef).toEqual(event.currentTarget);
      });
    });

    describe('', () => {
      it('', () => {
        const initialAnchorEl = { a: 1 };
        const { result } = renderHook(() => useActive({ initialAnchorEl }));

        expect(typeof result.current.clearElementRef).toEqual('function');
        expect(result.current.elementRef).toEqual(initialAnchorEl);

        act(() => {
          result.current.clearElementRef(event);
        });

        expect(result.current.elementRef).toEqual(null);
      });
    });
  });
});
