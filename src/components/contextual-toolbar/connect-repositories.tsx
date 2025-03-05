import { checkBoxStyle, eventsArr } from "@/src/constants";
import { PanelHeading } from "./panel-heading";
import { Checkbox } from "@mantine/core";
import { TransparentButton } from "../shared/transparent-button";
import { AppButton } from "../shared/app-button";

export const ConnectRepositories = () => {
  return (
    <section className="rounded-xl border border-[#f3f3f3] bg-[#fcfcfc] p-3 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <PanelHeading text="Connect repositories to" />
        <span className="p-1 rounded-md text-medium-12 bg-violet-5 w-fit text-violet-10">
          acme
        </span>
      </div>
      <figure className="flex flex-col gap-3">
        {eventsArr
          .filter((item) => item.includes("Deployment"))
          .map((repo, idx) => (
            <Checkbox
              size="sm"
              styles={checkBoxStyle}
              color="#7839ee"
              key={idx}
              label={
                <p className="text-normal-13 text-primary-75 whitespace-nowrap">
                  {repo}
                </p>
              }
            />
          ))}
      </figure>
      <footer className="flex items-center justify-end gap-2">
        <TransparentButton text="Cancel" />
        <AppButton text="Connect Repositories" />
      </footer>
    </section>
  );
};
