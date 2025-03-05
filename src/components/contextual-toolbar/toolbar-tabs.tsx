"use client";

import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { tabsArr } from "@/src/constants";

export const ToolbarTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsArr[0]?.id);
  const ActiveComponent = tabsArr.find(
    (tab) => tab.id === activeTab
  )?.component;

  const contentVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };
  return (
    <section className="border gap-2 border-[#ebebeb] rounded-2xl max-h-[600px] flex overflow-hidden transition-all duration-300 ease-in-out shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] p-4 max-w-[30.125rem] flex-col xl:absolute xl:bottom-28 max-xl:bottom-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {ActiveComponent ? <ActiveComponent /> : null}
        </motion.div>
      </AnimatePresence>
      <footer className="w-full flex items-center p-1 gap-1.5">
        <div className="flex-1 flex items-center overflow-x-scroll gap-2 border-r border-[#e8e8e8] no-scrollbar pr-2">
          {tabsArr.map((item, idx) => (
            <button
              onClick={() => setActiveTab(item?.id)}
              type="button"
              key={idx}
              className={clsx(
                activeTab === item?.id
                  ? "text-primary-100 "
                  : "text-primary-75",
                "py-1.5 px-3 flex items-center justify-center relative rounded-lg flex-1 text-medium-14 text-nowrap"
              )}
            >
              {activeTab === item?.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-lg bg-[#f7f7f7] border border-[#ebebeb]"
                />
              )}
              <span className="relative z-10">{item?.label}</span>
            </button>
          ))}
        </div>
        <span className="px-1.5 py-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-[#f5f5f6] w-fit">
          <RxHamburgerMenu size={20} />
        </span>
      </footer>
    </section>
  );
};
