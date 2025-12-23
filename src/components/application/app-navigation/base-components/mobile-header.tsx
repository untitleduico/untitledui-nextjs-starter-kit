"use client";

import { X as CloseIcon, Menu02 } from "@untitledui/icons";
import type { PropsWithChildren } from "react";
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
} from "react-aria-components";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { cx } from "@/utils/cx";

export const MobileNavigationHeader = ({ children }: PropsWithChildren) => {
  return (
    <AriaDialogTrigger>
      <header className="flex h-16 items-center justify-between border-secondary border-b bg-primary py-3 pr-2 pl-4 lg:hidden">
        <UntitledLogo />

        <AriaButton
          aria-label="Expand navigation menu"
          className="group flex items-center justify-center rounded-lg bg-primary p-2 text-fg-secondary outline-focus-ring hover:bg-primary_hover hover:text-fg-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Menu02 className="size-6 transition duration-200 ease-in-out group-aria-expanded:opacity-0" />
          <CloseIcon className="absolute size-6 opacity-0 transition duration-200 ease-in-out group-aria-expanded:opacity-100" />
        </AriaButton>
      </header>

      <AriaModalOverlay
        className={({ isEntering, isExiting }) =>
          cx(
            "fixed inset-0 z-50 cursor-pointer bg-overlay/70 pr-16 backdrop-blur-md lg:hidden",
            isEntering && "fade-in animate-in duration-300 ease-in-out",
            isExiting && "fade-out animate-out duration-200 ease-in-out"
          )
        }
        isDismissable
      >
        {({ state }) => (
          <>
            <AriaButton
              aria-label="Close navigation menu"
              className="fixed top-3 right-2 flex cursor-pointer items-center justify-center rounded-lg p-2 text-fg-white/70 outline-focus-ring hover:bg-white/10 hover:text-fg-white focus-visible:outline-2 focus-visible:outline-offset-2"
              onPress={() => state.close()}
            >
              <CloseIcon className="size-6" />
            </AriaButton>

            <AriaModal className="w-full cursor-auto will-change-transform">
              <AriaDialog className="h-dvh outline-hidden focus:outline-hidden">
                {children}
              </AriaDialog>
            </AriaModal>
          </>
        )}
      </AriaModalOverlay>
    </AriaDialogTrigger>
  );
};
