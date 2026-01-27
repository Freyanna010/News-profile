import { useEffect } from 'react';

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onClickOutside: () => void,
  enabled: boolean
): void => {
  useEffect(() => {
    const handelClick = (e: MouseEvent) => {
      const target = e.target;
      const isClickOutside =
        target instanceof Node && !ref.current?.contains(target);

      if (isClickOutside && enabled) {
        onClickOutside();
      }
    };

    window.addEventListener('mousedown', handelClick);

    return () => {
      window.removeEventListener('mousedown', handelClick);
    };
  }, [enabled, ref, onClickOutside]);
};
