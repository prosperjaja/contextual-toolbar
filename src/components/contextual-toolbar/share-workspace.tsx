import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PanelHeading } from "./panel-heading";
import { Switch, Tooltip } from "@mantine/core";
import { TransparentButton } from "../shared/transparent-button";
import { switchStyles } from "@/src/constants";
import { TextInput } from "../shared/text-input";
import { SecondaryButton } from "../shared/secondary-button";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { successNotification } from "@/src/lib/notification-handler";
import { AppButton } from "../shared/app-button";

const link = "/mylink.com";

export const ShareWorkspace = () => {
  const [isSharing, setIsSharing] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <motion.section
      className="rounded-xl border border-[#f3f3f3] bg-[#fcfcfc] p-3 flex flex-col gap-2"
      layout
    >
      <div className="flex items-center gap-4 justify-between">
        <PanelHeading text={isSharing ? "Sharing is on" : "Sharing is off"} />
        {isSharing && (
          <Switch
            styles={switchStyles}
            checked={isSharing}
            onChange={(event) => setIsSharing(event.currentTarget.checked)}
            size="sm"
            color="#7839ee"
          />
        )}
      </div>
      <div className="flex items-center gap-4 w-full">
        <AnimatePresence mode="wait">
          {isSharing ? (
            <motion.div
              key="sharing-on"
              className="flex flex-col gap-1 flex-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <TextInput value={link} />
              <Tooltip
                withArrow
                arrowSize={8}
                label="Copy link"
                color="#292929"
              >
                <SecondaryButton
                  text={isCopied ? "Copied!" : "Copy"}
                  icon={
                    isCopied ? (
                      <FaCheck size={16} color="#292929" />
                    ) : (
                      <IoCopyOutline size={16} color="#292929" />
                    )
                  }
                  className="!py-1 !rounded-lg"
                  onClick={async () => {
                    if (!isSharing) return;
                    await navigator.clipboard.writeText(link ?? "");
                    setIsCopied(true);
                    successNotification("Link to secret key copied");
                    setTimeout(() => {
                      setIsCopied(false);
                    }, 2000);
                  }}
                />
              </Tooltip>
            </motion.div>
          ) : (
            <motion.p
              key="sharing-off"
              className="text-normal-13 text-primary-75 flex-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              To share your workspace with other people you need to publish it
              first.
            </motion.p>
          )}
        </AnimatePresence>
        {!isSharing && (
          <Switch
            styles={switchStyles}
            checked={isSharing}
            onChange={(event) => setIsSharing(event.currentTarget.checked)}
            size="sm"
            color="#7839ee"
          />
        )}
      </div>
      <footer className="flex items-center justify-end gap-2">
        <TransparentButton text="Cancel" />
        <AppButton text="Create secret key" />
      </footer>
    </motion.section>
  );
};
