"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) => {
  let ref = useRef(null);
  let isInview = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInview && !isVisible) {
      setIsVisible(true);
    }
  }, [isInview, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
};
