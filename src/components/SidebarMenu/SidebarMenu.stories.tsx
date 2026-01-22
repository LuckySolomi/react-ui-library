import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "./SidebarMenu";
import styles from "./SidebarMenu.module.css";

import {
  FiMenu,
  FiLayers,
  FiList,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

/* MOCK DATA (Stories only)*/

const menuItems = [
  {
    id: "nested",
    label: "Nested Menu",
    icon: <FiLayers />,
    children: [
      {
        id: "main",
        label: "Main Menu",
        icon: <FiMenu />,
        children: [
          { id: "one", label: "Item One" },
          { id: "two", label: "Item Two" },
        ],
      },
      {
        id: "submenu",
        label: "Submenu",
        icon: <FiList />,
        children: [
          { id: "a", label: "Sub Item A" },
          { id: "b", label: "Sub Item B" },
        ],
      },
    ],
  },
  { id: "help", label: "Help", icon: <FiHelpCircle /> },
  { id: "logout", label: "Logout", icon: <FiLogOut /> },
];

/*META */

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

export default meta;

/*STORIES*/

export const TwoLevels: StoryObj<typeof SidebarMenu> = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [activeId, setActiveId] = useState<string>();

    return (
      <>
        <button className={styles.openSidebarBtn} onClick={() => setOpen(true)}>
          Open Sidebar
        </button>

        <SidebarMenu
          open={open}
          items={menuItems}
          activeId={activeId}
          onSelect={setActiveId}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

export const OneLevel: StoryObj<typeof SidebarMenu> = {
  args: {
    open: true,
    items: [
      { id: "help", label: "Help" },
      { id: "logout", label: "Logout" },
    ],
  },
};

export const Closed: StoryObj<typeof SidebarMenu> = {
  args: {
    open: false,
    items: menuItems,
  },
};
