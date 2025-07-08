import * as React from 'react';

/**
 * Attaches copy-to-clipboard logic for rehype-pretty-code copy buttons.
 * Hides/shows the button based on hover and copy state.
 * Should be called inside a component (e.g. in __root.tsx) with pathname as a dependency.
 */
export function useCodeCopyEffect(pathname: string) {
  React.useEffect(() => {
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('button.rehype-pretty-copy'));
    const pres = Array.from(document.querySelectorAll<HTMLPreElement>('pre'));

    // Helper to show/hide button
    function setButtonHidden(btn: HTMLButtonElement, hidden: boolean) {
      if (hidden) {
        btn.classList.add('rehype-pretty-copy-hidden');
      } else {
        btn.classList.remove('rehype-pretty-copy-hidden');
      }
    }

    // Mouse enter/leave handlers for <pre>
    const preListeners: Array<() => void> = [];
    pres.forEach((pre) => {
      const btn = pre.querySelector<HTMLButtonElement>('button.rehype-pretty-copy');
      if (!btn) return;
      // Show on mouse enter
      const onEnter = () => setButtonHidden(btn, false);
      // Hide on mouse leave (unless recently copied)
      const onLeave = () => {
        if (!btn.classList.contains('rehype-pretty-copied')) {
          setButtonHidden(btn, true);
        }
      };
      pre.addEventListener('mouseenter', onEnter);
      pre.addEventListener('mouseleave', onLeave);
      // Hide by default
      setButtonHidden(btn, true);
      preListeners.push(() => {
        pre.removeEventListener('mouseenter', onEnter);
        pre.removeEventListener('mouseleave', onLeave);
      });
    });

    const listener = async (event: MouseEvent) => {
      const btn = event.currentTarget as HTMLButtonElement;
      const pre = btn.closest('pre');
      if (!pre) return;

      // Collect visible code lines
      const lineElements = Array.from(pre.querySelectorAll<HTMLElement>('.line'))
        .filter((el) => el.offsetParent !== null && el.offsetHeight > 0 && el.offsetWidth > 0);

      let textToCopy: string;
      if (lineElements.length > 0) {
        textToCopy = lineElements.map((l) => l.innerText.replace(/\u00A0/g, ' ')).join('\n');
      } else {
        const code = pre.querySelector('code');
        if (code) {
          const codeClone = code.cloneNode(true) as HTMLElement;
          codeClone.querySelectorAll('style').forEach((style) => style.remove());
          textToCopy = codeClone.textContent || '';
        } else {
          textToCopy = '';
        }
      }

      if (!textToCopy.trim()) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add('rehype-pretty-copied');
        setTimeout(() => {
          btn.classList.remove('rehype-pretty-copied');
          btn.blur();
          // Hide button if not hovered
          if (pre && !pre.matches(':hover')) {
            setButtonHidden(btn, true);
          }
        }, 1000);
      } catch (err) {
        console.error('Failed to copy code', err);
      }
    };

    buttons.forEach((btn) => btn.addEventListener('click', listener));

    return () => {
      buttons.forEach((btn) => btn.removeEventListener('click', listener));
      preListeners.forEach((off) => off());
    };
  }, [pathname]);
}
