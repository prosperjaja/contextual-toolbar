"use client";

import { useRouter } from "next/navigation";
import { PageSummary } from "../shared/page-summary";
import { SecondaryButton } from "../shared/secondary-button";
import { ToolbarTabs } from "./toolbar-tabs";

export const ContextualToolbarSetup = () => {
  const { back } = useRouter();

  return (
    <main className="flex flex-col gap-10 h-full flex-1 overflow-auto py-[clamp(2vw,)] justify-between relative">
      <div />
      <section className="grid grid-cols-2 gap-[5vw] items-center  max-xl:grid-cols-1">
        <PageSummary
          paragraph="A toolbar that suggests and enables actions based on users' navigation."
          second_paragraph="Suggestions are related to the current page and users can perform actions inside the component, without changing to another page or context."
          title="Contextual Toolbar"
          max_width="max-w-[17.5rem]"
        />
        <div>
          <ToolbarTabs />
        </div>
      </section>
      <SecondaryButton text="Previous task" onClick={back} />
    </main>
  );
};
