"use client";

import { Checkbox, Radio } from "@mantine/core";
import { TextInput } from "../shared/text-input";
import { PanelHeading } from "./panel-heading";
import { TransparentButton } from "../shared/transparent-button";
import {
  checkBoxStyle,
  eventsArr,
  projectsArr,
  radioStyles,
} from "@/src/constants";
import { AppButton } from "../shared/app-button";

export const CreateWebhook = () => {
  return (
    <section className="flex flex-col gap-2">
      <PanelHeading text="Create Webhook" />
      <div className="rounded-xl border border-[#f3f3f3] bg-[#fcfcfc] p-3 flex flex-col gap-4">
        <TextInput placeholder="https://myapp.com/webhooks" label="Endpoint" />
        {/* Projects Section */}
        <div className="flex flex-col gap-1">
          <PanelHeading text="Projects" />
          <figure className="flex items-center gap-4">
            {projectsArr.map((item, idx) => (
              <Radio
                classNames={{
                  radio:
                    "!rounded-full !hover-rounded-lg border border-[#D0D5DD]",
                }}
                value={String(idx + 1)}
                styles={radioStyles}
                size="xs"
                color="#7839ee"
                key={idx}
                label={
                  <p className="text-normal-13 text-primary-75">
                    {item?.label}{" "}
                    {item?.tag && (
                      <span className="p-1 rounded-md text-medium-12 bg-violet-5 w-fit text-violet-10">
                        {item?.tag}
                      </span>
                    )}{" "}
                  </p>
                }
              />
            ))}
          </figure>
        </div>
        {/* Events Section */}
        <figure className="flex flex-col gap-1">
          <PanelHeading text="Events" />
          <div className="rounded-lg p-3 grid grid-cols-2 gap-x-[4vw] gap-y-4 bg-[#f5f5f5] max-md:grid-cols-1">
            {eventsArr.map((item, idx) => (
              <Checkbox
                size="sm"
                styles={checkBoxStyle}
                color="#7839ee"
                key={idx}
                label={
                  <p className="text-normal-13 text-primary-75 whitespace-nowrap">
                    {item}
                  </p>
                }
              />
            ))}
          </div>
        </figure>
        <footer className="flex items-center justify-end gap-2">
          <TransparentButton text="Cancel" />
          <AppButton text="Create Webhook" />
        </footer>
      </div>
    </section>
  );
};
