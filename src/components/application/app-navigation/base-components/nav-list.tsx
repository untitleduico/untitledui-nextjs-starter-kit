"use client";

import { useState } from "react";
import { cx } from "@/utils/cx";
import type { NavItemDividerType, NavItemType } from "../config";
import { NavItemBase } from "./nav-item";

interface NavListProps {
  /** URL of the currently active item. */
  activeUrl?: string;
  /** Additional CSS classes to apply to the list. */
  className?: string;
  /** List of items to display. */
  items: (NavItemType | NavItemDividerType)[];
}

export const NavList = ({ activeUrl, items, className }: NavListProps) => {
  const [open, setOpen] = useState(false);
  const activeItem = items.find(
    (item) =>
      item.href === activeUrl ||
      item.items?.some((subItem) => subItem.href === activeUrl)
  );
  const [currentItem, setCurrentItem] = useState(activeItem);

  return (
    <ul className={cx("mt-4 flex flex-col px-2 lg:px-4", className)}>
      {items.map((item, index) => {
        if (item.divider) {
          return (
            <li className="w-full px-0.5 py-2" key={index}>
              <hr className="h-px w-full border-none bg-border-secondary" />
            </li>
          );
        }

        if (item.items?.length) {
          return (
            <details
              className="appearance-none py-0.5"
              key={item.label}
              onToggle={(e) => {
                setOpen(e.currentTarget.open);
                setCurrentItem(item);
              }}
              open={activeItem?.href === item.href}
            >
              <NavItemBase
                badge={item.badge}
                href={item.href}
                icon={item.icon}
                type="collapsible"
              >
                {item.label}
              </NavItemBase>

              <dd>
                <ul className="py-0.5">
                  {item.items.map((childItem) => (
                    <li className="py-0.5" key={childItem.label}>
                      <NavItemBase
                        badge={childItem.badge}
                        current={activeUrl === childItem.href}
                        href={childItem.href}
                        type="collapsible-child"
                      >
                        {childItem.label}
                      </NavItemBase>
                    </li>
                  ))}
                </ul>
              </dd>
            </details>
          );
        }

        return (
          <li className="py-0.5" key={item.label}>
            <NavItemBase
              badge={item.badge}
              current={currentItem?.href === item.href}
              href={item.href}
              icon={item.icon}
              open={open && currentItem?.href === item.href}
              type="link"
            >
              {item.label}
            </NavItemBase>
          </li>
        );
      })}
    </ul>
  );
};
