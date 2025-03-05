import { ChangeEventHandler } from "react";
import { PanelHeading } from "../contextual-toolbar/panel-heading";

export const TextInput = ({
  placeholder,
  label,
  value,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <PanelHeading text={label ?? ""} />
      <input
        type="text"
        className="w-full px-3 py-2  text-gray-700 bg-white border border-[#efefef] rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 hover:border-gray-400 transition-all duration-300 placeholder:text-gray-400 hover:ring-gray-200 placeholder:text-sm text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
