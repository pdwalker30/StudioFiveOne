import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

export const useClickOutsideAlerter = (
  ref: MutableRefObject<any>,
  dispatch: Function
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(ref);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export const TestValue = {
  test: true,
};