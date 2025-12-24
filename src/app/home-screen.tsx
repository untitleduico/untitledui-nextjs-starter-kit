"use client";

import {
  BookOpen01,
  Check,
  Copy01,
  Cube01,
  HelpCircle,
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { Header } from "@/components/marketing/header-navigation/header";
import { useClipboard } from "@/hooks/use-clipboard";

export const HomeScreen = () => {
  const clipboard = useClipboard();

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 md:px-8">
        <div className="relative flex size-28 items-center justify-center">
          <UntitledLogoMinimal className="size-10" />
        </div>

        <h1 className="max-w-3xl text-center font-semibold text-display-sm text-primary">
          Untitled UI Next.js starter kit
        </h1>

        <p className="mt-2 max-w-xl text-center text-lg text-tertiary">
          Get started by using existing components that came with this starter
          kit or add new ones:
        </p>

        <div className="relative mt-6 flex h-10 items-center rounded-lg border border-secondary bg-secondary">
          <code className="px-3 font-mono text-secondary">
            npx untitledui@latest add
          </code>

          <hr className="h-10 w-px bg-border-secondary" />

          <ButtonUtility
            className="mx-1"
            color="tertiary"
            icon={clipboard.copied ? Check : Copy01}
            onClick={() => clipboard.copy("npx untitledui@latest add")}
            size="sm"
            tooltip="Copy"
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button
            color="link-color"
            href="https://www.untitledui.com/react/docs/introduction"
            iconLeading={BookOpen01}
            rel="noopener noreferrer"
            size="lg"
            target="_blank"
          >
            Docs
          </Button>
          <div className="h-px w-4 bg-brand-solid" />
          <Button
            color="link-color"
            href="https://www.untitledui.com/react/resources/icons"
            iconLeading={Cube01}
            rel="noopener noreferrer"
            size="lg"
            target="_blank"
          >
            Icons
          </Button>
          <div className="h-px w-4 bg-brand-solid" />
          <Button
            color="link-color"
            href="https://github.com/untitleduico/react/issues"
            iconLeading={HelpCircle}
            rel="noopener noreferrer"
            size="lg"
            target="_blank"
          >
            Help
          </Button>
        </div>
      </div>
    </div>
  );
};
