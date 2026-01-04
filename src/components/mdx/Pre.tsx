'use client';

import { Check, Clipboard } from 'lucide-react';
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from 'react';

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const codeElement = preRef.current?.querySelector('code');
    const code = codeElement?.textContent || '';

    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    }
  };

  return (
    <div className='relative group'>
      <button
        type='button'
        disabled={isCopied}
        onClick={handleClickCopy}
        aria-label={isCopied ? 'Code copied' : 'Copy code to clipboard'}
        title={isCopied ? 'Copied!' : 'Copy code'}
        className='absolute top-3 right-3 z-10 p-2 rounded-md bg-zinc-800/90 hover:bg-zinc-800 dark:bg-background/90 dark:hover:bg-background text-zinc-400 hover:text-zinc-100 dark:text-muted-foreground dark:hover:text-foreground opacity-70 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 disabled:opacity-100 border border-zinc-700/50 hover:border-zinc-600 dark:border-border/50 dark:hover:border-border shadow-sm backdrop-blur-sm'
      >
        {isCopied ? (
          <Check size={18} className='text-green-500 animate-in fade-in zoom-in duration-200' />
        ) : (
          <Clipboard size={18} className='transition-transform group-hover:scale-110' />
        )}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
