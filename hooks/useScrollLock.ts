import { useCallback } from 'react';

function UseScrollLock() {
  const lockScroll = useCallback(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    // [data-position="fixed"] attribute is given to images inside scroll parallax containers
    const fixedElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      '[data-position="fixed"]'
    );

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarCompensation}px`;

    if (fixedElements.length) {
      fixedElements.forEach((element: HTMLElement) => {
        element.style.paddingRight = `${scrollBarCompensation}px`;
      });
    }
  }, []);

  const unlockScroll = useCallback(() => {
    const fixedElements: NodeListOf<HTMLElement> = document.querySelectorAll(
      '[data-position="fixed"]'
    );

    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';

    if (fixedElements.length) {
      fixedElements.forEach((element: HTMLElement) => {
        element.style.paddingRight = `0`;
      });
    }
  }, []);
  return { lockScroll, unlockScroll };
}

export default UseScrollLock;
