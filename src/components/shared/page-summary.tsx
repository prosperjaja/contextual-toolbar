"use client";

import clsx from "clsx";
import { FadeUp } from "./fade-up";
import { TechStackPill } from "./tech-stack-pills";

const stackArr = ["React", "Tailwind css", "Motion (prev. framer motion)"];

interface IHighlightProps {
  title: string;
  paragraph: string;
  second_paragraph?: string;
  max_width?: string;
}

export const PageSummary = ({
  title,
  second_paragraph,
  paragraph,
  max_width,
}: IHighlightProps) => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      <FadeUp delay={0.2}>
        <h3 className="text-[#292929] text-base font-medium">{title}</h3>
      </FadeUp>
      <FadeUp delay={0.4}>
        <div
          className={clsx(
            max_width ? max_width : "max-w-[21.875rem]",
            "flex flex-col gap-2"
          )}
        >
          <p className="text-normal-14 text-[#737373]">{paragraph}</p>
          {second_paragraph && (
            <p className="text-normal-14 text-[#737373]">{second_paragraph}</p>
          )}
        </div>
      </FadeUp>
      <FadeUp delay={0.6}>
        <figure className="flex items-center gap-3 flex-wrap">
          {stackArr.map((item, idx) => (
            <FadeUp key={idx} delay={0.6 + idx * 0.1}>
              <TechStackPill text={item} />
            </FadeUp>
          ))}
        </figure>
      </FadeUp>
    </div>
  );
};
