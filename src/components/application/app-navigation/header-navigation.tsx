"use client";

import { Bell01, LifeBuoy01, SearchLg, Settings01 } from "@untitledui/icons";
import type { FC, ReactNode } from "react";
import {
  Button as AriaButton,
  DialogTrigger,
  Popover,
} from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Input } from "@/components/base/input/input";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { cx } from "@/utils/cx";
import { MobileNavigationHeader } from "./base-components/mobile-header";
import {
  NavAccountCard,
  NavAccountMenu,
} from "./base-components/nav-account-card";
import { NavItemBase } from "./base-components/nav-item";
import { NavItemButton } from "./base-components/nav-item-button";
import { NavList } from "./base-components/nav-list";

interface NavItem {
  /** Label text for the nav item. */
  label: string;
  /** URL to navigate to when the nav item is clicked. */
  href: string;
  /** Whether the nav item is currently active. */
  current?: boolean;
  /** Icon component to display. */
  icon?: FC<{ className?: string }>;
  /** Badge to display. */
  badge?: ReactNode;
  /** List of sub-items to display. */
  items?: NavItem[];
}

interface HeaderNavigationBaseProps {
  /** URL of the currently active item. */
  activeUrl?: string;
  /** List of items to display. */
  items: NavItem[];
  /** List of sub-items to display. */
  subItems?: NavItem[];
  /** Content to display in the trailing position. */
  trailingContent?: ReactNode;
  /** Whether to show the avatar dropdown. */
  showAvatarDropdown?: boolean;
  /** Whether to hide the bottom border. */
  hideBorder?: boolean;
}

export const HeaderNavigationBase = ({
  activeUrl,
  items,
  subItems,
  trailingContent,
  showAvatarDropdown = true,
  hideBorder = false,
}: HeaderNavigationBaseProps) => {
  const activeSubNavItems =
    subItems ||
    items.find((item) => item.current && item.items && item.items.length > 0)
      ?.items;

  const showSecondaryNav = activeSubNavItems && activeSubNavItems.length > 0;

  return (
    <>
      <MobileNavigationHeader>
        <aside className="flex h-full max-w-full flex-col justify-between overflow-auto border-secondary border-r bg-primary pt-4 lg:pt-6">
          <div className="flex flex-col gap-5 px-4 lg:px-5">
            <UntitledLogo className="h-8" />
            <Input
              aria-label="Search"
              icon={SearchLg}
              placeholder="Search"
              shortcut
              size="sm"
            />
          </div>

          <NavList items={items} />

          <div className="mt-auto flex flex-col gap-4 px-2 py-4 lg:px-4 lg:py-6">
            <div className="flex flex-col gap-1">
              <NavItemBase href="#" icon={LifeBuoy01} type="link">
                Support
              </NavItemBase>
              <NavItemBase
                badge={
                  <BadgeWithDot color="success" size="sm" type="modern">
                    Online
                  </BadgeWithDot>
                }
                href="#"
                icon={Settings01}
                type="link"
              >
                Settings
              </NavItemBase>
              <NavItemBase
                href="https://www.untitledui.com/"
                icon={Settings01}
                type="link"
              >
                Open in browser
              </NavItemBase>
            </div>

            <NavAccountCard />
          </div>
        </aside>
      </MobileNavigationHeader>

      <header className="max-lg:hidden">
        <section
          className={cx(
            "flex h-16 w-full items-center justify-center bg-primary md:h-18",
            (!hideBorder || showSecondaryNav) && "border-secondary border-b"
          )}
        >
          <div className="flex w-full max-w-container justify-between pr-3 pl-4 md:px-8">
            <div className="flex flex-1 items-center gap-4">
              <a
                aria-label="Go to homepage"
                className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                href="/"
              >
                <UntitledLogo className="h-8" />
              </a>

              <nav>
                <ul className="flex items-center gap-0.5">
                  {items.map((item) => (
                    <li className="py-0.5" key={item.label}>
                      <NavItemBase
                        badge={item.badge}
                        current={item.current}
                        href={item.href}
                        icon={item.icon}
                        type="link"
                      >
                        {item.label}
                      </NavItemBase>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              {trailingContent}

              <div className="flex gap-0.5">
                <NavItemButton
                  current={activeUrl === "/settings-01"}
                  href="/settings-01"
                  icon={Settings01}
                  label="Settings"
                  size="md"
                  tooltipPlacement="bottom"
                />
                <NavItemButton
                  current={activeUrl === "/notifications-01"}
                  href="/notifications-01"
                  icon={Bell01}
                  label="Notifications"
                  size="md"
                  tooltipPlacement="bottom"
                />
              </div>

              {showAvatarDropdown && (
                <DialogTrigger>
                  <AriaButton
                    className={({ isPressed, isFocused }) =>
                      cx(
                        "group relative inline-flex cursor-pointer",
                        (isPressed || isFocused) &&
                          "rounded-full outline-2 outline-focus-ring outline-offset-2"
                      )
                    }
                  >
                    <Avatar
                      alt="Olivia Rhye"
                      size="md"
                      src="https://www.untitledui.com/images/avatars/olivia-rhye?bg=%23E0E0E0"
                    />
                  </AriaButton>
                  <Popover
                    className={({ isEntering, isExiting }) =>
                      cx(
                        "will-change-transform",
                        isEntering &&
                          "fade-in placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 animate-in duration-300 ease-out",
                        isExiting &&
                          "fade-out placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2 animate-out duration-150 ease-in"
                      )
                    }
                    offset={8}
                    placement="bottom right"
                  >
                    <NavAccountMenu />
                  </Popover>
                </DialogTrigger>
              )}
            </div>
          </div>
        </section>

        {showSecondaryNav && (
          <section
            className={cx(
              "flex h-16 w-full items-center justify-center bg-primary",
              !hideBorder && "border-secondary border-b"
            )}
          >
            <div className="flex w-full max-w-container items-center justify-between gap-8 px-8">
              <nav>
                <ul className="flex items-center gap-0.5">
                  {activeSubNavItems.map((item) => (
                    <li className="py-0.5" key={item.label}>
                      <NavItemBase
                        badge={item.badge}
                        current={item.current}
                        href={item.href}
                        icon={item.icon}
                        type="link"
                      >
                        {item.label}
                      </NavItemBase>
                    </li>
                  ))}
                </ul>
              </nav>

              <Input
                aria-label="Search"
                className="max-w-xs"
                icon={SearchLg}
                placeholder="Search"
                shortcut
                size="sm"
              />
            </div>
          </section>
        )}
      </header>
    </>
  );
};
