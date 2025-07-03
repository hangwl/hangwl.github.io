import { createContext, useContext, useState, ReactNode } from 'react';
import { type TOCItem } from '@/components/table-of-contents';

interface TOCContextType {
  tocItems: TOCItem[];
  setTocItems: (items: TOCItem[]) => void;
}

const TOCContext = createContext<TOCContextType | undefined>(undefined);

export function TOCProvider({ children }: { children: ReactNode }) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  return (
    <TOCContext.Provider value={{ tocItems, setTocItems }}>
      {children}
    </TOCContext.Provider>
  );
}

export function useTOC() {
  const context = useContext(TOCContext);
  if (context === undefined) {
    throw new Error('useTOC must be used within a TOCProvider');
  }
  return context;
}
