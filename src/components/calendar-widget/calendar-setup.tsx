"use client";

import { useRouter } from "next/navigation";
import { SecondaryButton } from "../shared/secondary-button";
import { CalendarCard } from "./calendar-card";
import { PageSummary } from "../shared/page-summary";

export const CalendarSetup = () => {
  const { push } = useRouter();
  return (
    <main className="flex flex-col gap-10 h-full flex-1 overflow-auto py-[clamp(2vw,)] justify-between">
      <div />
      <section className="grid grid-cols-2 gap-[5vw] max-lg:grid-cols-1">
        <PageSummary
          paragraph="Calendar widget with clear timezone differences information. Click
            on the widget to interact with it."
          title="Calendar Widget"
        />
        <CalendarCard />
      </section>
      <SecondaryButton text="Next task" onClick={() => push(`/toolbar`)} />
    </main>
  );
};
