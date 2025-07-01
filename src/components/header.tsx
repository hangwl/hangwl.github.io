import { HyperText } from "@/components/magicui/hyper-text";
import { ModeToggle } from "@/components/mode-toggle";
import { DocSearch } from '@docsearch/react';

export default function Header() {
  return (
    <header className="App-header sticky top-0 z-40 flex items-center justify-between w-full px-4 py-2">
      <div className="flex items-center gap-4">
        <HyperText>hangwl</HyperText>
        <ModeToggle className="rounded-full" />
      </div>
      <div className="flex items-center">
        <DocSearch
          appId="R2IYF7ETH7"
          apiKey="599cec31baffa4868cae4e79f180729b"
          indexName="docsearch"
        />
      </div>
    </header>
  );
}
