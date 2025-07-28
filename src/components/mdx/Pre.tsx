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
    const code = codeElement?.innerText || '';

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className='relative group'>
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className='absolute top-2 right-2 z-10 p-1 rounded-md bg-zinc-800/50 text-zinc-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-100'
      >
        {isCopied ? <Check size={20} className='text-green-500' /> : <Clipboard size={20} />}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
}
