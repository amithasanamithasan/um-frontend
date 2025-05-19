import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";
import { MenuProps } from "antd";

export const sidebarItemsGenerator = (
  items: TUserPath[],
  role: string
): MenuProps["items"] => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children && item.name) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children
          .map((child) => {
            if (child.name && child.path) {
              return {
                key: child.name,
                label: (
                  <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                ),
              };
            }
            return undefined;
          })
          .filter(
            (item): item is NonNullable<typeof item> => item !== undefined
          ),
      });
    }
    return acc;
  }, []);

  return sidebarItems.filter(
    (item): item is NonNullable<typeof item> => item !== undefined
  );
};
