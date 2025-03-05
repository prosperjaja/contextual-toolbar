"use client";
import { PiMonitorPlayFill } from "react-icons/pi";
import { FadeUp } from "../shared/fade-up";
import { GuestList } from "./guest-list";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export const CalendarCard = () => {
  const [viewWholeCard, setViewWholeCard] = useState(true);

  const cardVariants = {
    collapsed: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <FadeUp delay={0.3}>
      <motion.article
        className={clsx(
          viewWholeCard ? "w-[200px]" : null,
          "border-[1px] rounded-2xl max-w-[30.125rem] border-[#ebebeb] flex flex-col cursor-pointer transition-all duration-300 ease-in-out shadow-[0_2px_4px_-1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
        )}
        onClick={() => setViewWholeCard(!viewWholeCard)}
        variants={cardVariants}
        initial="collapsed"
        animate={viewWholeCard ? "collapsed" : "expanded"}
      >
        <div className="p-4 flex flex-col gap-3 ">
          <div className="flex items-center gap-4 justify-between">
            <span className="py-1 px-2 w-fit bg-[#ECE9FE] rounded-md text-medium-12 text-[#7839EE]">
              In 15 mins
            </span>
            {!viewWholeCard && (
              <span className="p-1 rounded-md bg-[#ECE9FE] w-fit flex items-center justify-center">
                <PiMonitorPlayFill size={18} color="#7839EE" />
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-medium text-[#292929]">
              Engineering sync
            </h3>
            <p className="text-normal-13 text-[#737373]">1:30 PM → 2:30 PM</p>
          </div>
        </div>
        <AnimatePresence>
          {!viewWholeCard && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <GuestList />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </FadeUp>
  );
};
