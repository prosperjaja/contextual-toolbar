"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const AppButton = ({
  onClick,
  className,
  children,
  disabled,
  type,
  text,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { text: string }) => {
  return (
    <button
      className={clsx(
        "group text-medium-14 flex px-3 py-2 items-center justify-center rounded-lg border border-violet-600  text-neutral-50 shadow-[inset_0_1px_0px_0px_#a78bfa] bg-gradient-to-b from-violet-600 via-violet-600 to-violet-600 active:scale-95 duration-200",
        {
          "active:scale-95 cursor-pointer": !disabled,
          "cursor-not-allowed bg-primary-25": disabled,
        },
        className
      )}
      type={type ?? "button"}
      {...props}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="block ">{text}</span>
    </button>
  );
};
