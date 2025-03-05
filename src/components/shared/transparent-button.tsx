"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const TransparentButton = ({
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
      type={type ?? "button"}
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "bg-white px-3 py-2 text-primary-100 text-medium-14 border-[1.5px] border-transparent hover:border-[#ebebeb] rounded-lg hover:bg-[#f5f5f6] active:scale-95 duration-200 flex items-center gap-2 justify-center w-fit",
        {
          "active:scale-95 cursor-pointer": !disabled,
          "cursor-not-allowed bg-primary-25": disabled,
        },
        className
      )}
    >
      {text}
    </button>
  );
};
