import { AppButton } from "../shared/app-button";
import { TextInput } from "../shared/text-input";
import { TransparentButton } from "../shared/transparent-button";
import { PanelHeading } from "./panel-heading";

export const CreateApiKey = () => {
  return (
    <section className="rounded-xl border border-[#f3f3f3] bg-[#fcfcfc] p-3 flex flex-col gap-2">
      <PanelHeading text="Create new API key" />
      <p className="text-normal-13 text-primary-75">
        Your secret API Key will be shared with all users belonging to your
        organization.
      </p>
      <TextInput placeholder="API key name" />
      <footer className="flex items-center justify-end gap-2">
        <TransparentButton text="Cancel" />
        <AppButton text="Create secret key" />
      </footer>
    </section>
  );
};
