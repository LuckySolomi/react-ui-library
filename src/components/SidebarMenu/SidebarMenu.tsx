import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import styles from "./SidebarMenu.module.css";

export type Item = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: Item[];
};

export type Props = {
  items: Item[];
  activeId?: string;
  collapsed?: boolean;
  open: boolean;
  onClose?: () => void;
  onSelect?: (id: string) => void;
};

export const SidebarMenu = ({
  items,
  activeId,
  collapsed = false,
  open,
  onClose,
  onSelect,
}: Props) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const renderItems = (items: Item[]) => (
    <ul className={styles.list}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <li key={item.id}>
            <div
              className={`${styles.item} ${
                item.id === activeId ? styles.active : ""
              }`}
              onClick={() =>
                item.children ? toggleItem(item.id) : onSelect?.(item.id)
              }
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>

              {item.children && (
                <FiChevronDown
                  className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
                />
              )}
            </div>

            <AnimatePresence>
              {item.children && isOpen && !collapsed && (
                <motion.div
                  className={styles.nested}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  {renderItems(item.children)}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            className={styles.sidebar}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              ✕
            </button>

            {renderItems(items)}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
