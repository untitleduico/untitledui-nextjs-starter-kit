"use client";

import { LifeBuoy01, LogOut01, Settings01 } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import type { FC } from "react";
import { useState } from "react";
import {
  Button as AriaButton,
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
} from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { ButtonUtility } from "@/components/base/buttons/button-utility";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { cx } from "@/utils/cx";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountMenu } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
import { NavItemButton } from "../base-components/nav-item-button";
import { NavList } from "../base-components/nav-list";
import type { NavItemType } from "../config";

interface SidebarNavigationSlimProps {
  /** URL of the currently active item. */
  activeUrl?: string;
  /** List of items to display. */
  items: (NavItemType & { icon: FC<{ className?: string }> })[];
  /** List of footer items to display. */
  footerItems?: (NavItemType & { icon: FC<{ className?: string }> })[];
  /** Whether to hide the border. */
  hideBorder?: boolean;
  /** Whether to hide the right side border. */
  hideRightBorder?: boolean;
}

export const SidebarNavigationSlim = ({
  activeUrl,
  items,
  footerItems = [],
  hideBorder,
  hideRightBorder,
}: SidebarNavigationSlimProps) => {
  const activeItem = [...items, ...footerItems].find(
    (item) =>
      item.href === activeUrl ||
      item.items?.some((subItem) => subItem.href === activeUrl)
  );
  const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
  const [isHovering, setIsHovering] = useState(false);

  const isSecondarySidebarVisible =
    isHovering && Boolean(currentItem.items?.length);

  const MAIN_SIDEBAR_WIDTH = 68;
  const SECONDARY_SIDEBAR_WIDTH = 268;

  const mainSidebar = (
    <aside
      className={cx(
        "group flex h-full max-h-full max-w-full overflow-y-auto py-1 pl-1 transition duration-100 ease-linear",
        isSecondarySidebarVisible && "bg-primary"
      )}
      style={{
        width: MAIN_SIDEBAR_WIDTH,
      }}
    >
      <div
        className={cx(
          "flex w-auto flex-col justify-between rounded-xl bg-primary pt-5 ring-1 ring-secondary ring-inset transition duration-300",
          hideBorder && !isSecondarySidebarVisible && "ring-transparent"
        )}
      >
        <div className="flex justify-center px-3">
          <UntitledLogoMinimal className="size-8" />
        </div>

        <ul className="mt-4 flex flex-col gap-0.5 px-3">
          {items.map((item) => (
            <li key={item.label}>
              <NavItemButton
                current={currentItem.href === item.href}
                href={item.href}
                icon={item.icon}
                label={item.label || ""}
                onClick={() => setCurrentItem(item)}
                size="md"
              />
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-4 px-3 py-5">
          {footerItems.length > 0 && (
            <ul className="flex flex-col gap-0.5">
              {footerItems.map((item) => (
                <li key={item.label}>
                  <NavItemButton
                    current={currentItem.href === item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label || ""}
                    onClick={() => setCurrentItem(item)}
                    size="md"
                  />
                </li>
              ))}
            </ul>
          )}

          <AriaDialogTrigger>
            <AriaButton
              className={({ isPressed, isFocused }) =>
                cx(
                  "group relative inline-flex rounded-full",
                  (isPressed || isFocused) &&
                    "outline-2 outline-focus-ring outline-offset-2"
                )
              }
            >
              <Avatar
                alt="Olivia Rhye"
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                status="online"
              />
            </AriaButton>
            <AriaPopover
              className={({ isEntering, isExiting }) =>
                cx(
                  "will-change-transform",
                  isEntering &&
                    "fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 animate-in duration-300 ease-out",
                  isExiting &&
                    "fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2 animate-out duration-150 ease-in"
                )
              }
              crossOffset={6}
              offset={8}
              placement="right bottom"
            >
              <NavAccountMenu />
            </AriaPopover>
          </AriaDialogTrigger>
        </div>
      </div>
    </aside>
  );

  const secondarySidebar = (
    <AnimatePresence initial={false}>
      {isSecondarySidebarVisible && (
        <motion.div
          animate={{
            width: SECONDARY_SIDEBAR_WIDTH,
            borderColor: "var(--color-border-secondary)",
          }}
          className={cx(
            "relative h-full overflow-y-auto overflow-x-hidden bg-primary",
            !(hideBorder || hideRightBorder) && "box-content border-r-[1.5px]"
          )}
          exit={{
            width: 0,
            borderColor: "rgba(0,0,0,0)",
            transition: { borderColor: { type: "tween", delay: 0.05 } },
          }}
          initial={{ width: 0, borderColor: "var(--color-border-secondary)" }}
          transition={{
            type: "spring",
            damping: 26,
            stiffness: 220,
            bounce: 0,
          }}
        >
          <div
            className="flex h-full flex-col px-4 pt-6"
            style={{ width: SECONDARY_SIDEBAR_WIDTH }}
          >
            <h3 className="font-semibold text-brand-secondary text-sm">
              {currentItem.label}
            </h3>
            <ul className="py-2">
              {currentItem.items?.map((item) => (
                <li className="py-0.5" key={item.label}>
                  <NavItemBase
                    badge={item.badge}
                    current={activeUrl === item.href}
                    href={item.href}
                    icon={item.icon}
                    type="link"
                  >
                    {item.label}
                  </NavItemBase>
                </li>
              ))}
            </ul>
            <div className="sticky bottom-0 mt-auto flex justify-between border-secondary border-t bg-primary px-2 py-5">
              <div>
                <p className="font-semibold text-primary text-sm">
                  Olivia Rhye
                </p>
                <p className="text-sm text-tertiary">olivia@untitledui.com</p>
              </div>
              <div className="absolute top-2.5 right-0">
                <ButtonUtility
                  color="tertiary"
                  icon={LogOut01}
                  size="sm"
                  tooltip="Log out"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Desktop sidebar navigation */}
      <div
        className="z-50 hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex"
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => setIsHovering(false)}
      >
        {mainSidebar}
        {secondarySidebar}
      </div>

      {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
      <div
        className="invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block"
        style={{
          paddingLeft: MAIN_SIDEBAR_WIDTH,
        }}
      />

      {/* Mobile header navigation */}
      <MobileNavigationHeader>
        <aside className="group flex h-full max-h-full w-full max-w-full flex-col justify-between overflow-y-auto bg-primary pt-4">
          <div className="px-4">
            <UntitledLogo className="h-8" />
          </div>

          <NavList items={items} />

          <div className="mt-auto flex flex-col gap-5 px-2 py-4">
            <div className="flex flex-col gap-2">
              <NavItemBase
                current={activeUrl === "/support"}
                href="/support"
                icon={LifeBuoy01}
                type="link"
              >
                Support
              </NavItemBase>
              <NavItemBase
                current={activeUrl === "/settings"}
                href="/settings"
                icon={Settings01}
                type="link"
              >
                Settings
              </NavItemBase>
            </div>

            <div className="relative flex items-center gap-3 border-secondary border-t pt-6 pr-8 pl-2">
              <AvatarLabelGroup
                size="md"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                status="online"
                subtitle="olivia@untitledui.com"
                title="Olivia Rhye"
              />

              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <Button
                  className="p-1.5!"
                  color="tertiary"
                  iconLeading={
                    <LogOut01 className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover" />
                  }
                  size="sm"
                />
              </div>
            </div>
          </div>
        </aside>
      </MobileNavigationHeader>
    </>
  );
};
