import { useEffect } from 'react';

export function useKeydownEffect(callback: () => void) {
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent): void => {
      if (!(e.key === ' ' || (e.key.length === 1 && /[a-zA-Z]/.test(e.key))))
        return;
      callback();
    };

    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [callback]);
}
