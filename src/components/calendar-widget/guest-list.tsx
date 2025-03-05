"use client";

import Image from "next/image";
import clsx from "clsx";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { guestListArr } from "@/src/constants";

export const GuestList = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const isAnySelected = guestListArr
    .filter((item) => item.isActive)
    .some((guest) => guest.id === selected);

  const isNameSelected = guestListArr?.find(
    (item) => item?.isActive && item?.id === selected
  );

  const guestListLength = guestListArr?.filter(
    (item) => item?.isActive
  )?.length;

  return (
    <section className="p-4 flex flex-col gap-3 border-t border-[#ebebeb]">
      <div className="flex items-center gap-2 ">
        <h3 className="text-sm font-medium text-[#292929]">Guest</h3>
        <div className="flex items-center gap-4 justify-between w-full">
          <span className="flex items-center gap-1">
            <FaGlobe size={16} className="text-[#A3A3A3]" />
            <p className="text-sm font-medium text-[#A3A3A3]">
              {guestListLength ?? 0}
            </p>
          </span>
          <p className="text-sm max-lg:text-xs font-medium text-[#A3A3A3] transition-all duration-300 ease-in-out">
            {isNameSelected?.name} {isNameSelected?.time}{" "}
            {isNameSelected?.time_zone}
          </p>
        </div>
      </div>
      <figure className="flex w-full items-center justify-between">
        <div className="flex items-center">
          {guestListArr
            .filter((item) => item?.isActive)
            .map((guest, idx) => (
              <Image
                key={idx}
                alt={guest.name}
                width={32}
                height={32}
                src={guest?.image}
                className={clsx(
                  isAnySelected
                    ? "mr-[.1rem]"
                    : idx !== 0
                    ? "-ml-[.75rem]"
                    : null,
                  selected === guest?.id ? "border-[#7839ee]" : null,
                  "border-[2.5px] border-white rounded-full !size-[2rem] transition-all duration-200"
                )}
              />
            ))}
        </div>
        <div className="flex items-center gap-1">
          {guestListArr.map((item, idx) => (
            <div
              onMouseEnter={() => {
                setSelected(item?.id);
              }}
              onMouseLeave={() => setSelected(null)}
              key={idx}
              className={clsx(
                item?.isActive ? "bg-[#E5E5E5]" : "bg-[#F5F5F5]",
                selected === item?.id && item?.isActive
                  ? "hover:bg-violet-10"
                  : null,
                "h-[25px] w-2 cursor-pointer rounded-t-lg rounded-b-lg"
              )}
            />
          ))}
        </div>
      </figure>
    </section>
  );
};
