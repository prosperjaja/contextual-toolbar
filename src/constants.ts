import guest1 from "@/public/guest-1.jpg";
import guest2 from "@/public/guest-2.png";
import guest3 from "@/public/guest-3.png";
import { CreateWebhook } from "./components/contextual-toolbar/create-webhook";
import { ConnectRepositories } from "./components/contextual-toolbar/connect-repositories";
import { CreateApiKey } from "./components/contextual-toolbar/create-api-key";
import { ShareWorkspace } from "./components/contextual-toolbar/share-workspace";

export const guestListArr = [
  {
    name: "Jerry",
    time: "- 5 hrs",
    time_zone: "/ gmt-8",
    image: guest1?.src,
    isActive: true,
    id: 1,
  },
  {
    name: "Your time",
    time: "- 2 hrs",
    time_zone: "/ gmt-3",
    image: "",
    isActive: false,
    id: 4,
  },
  {
    name: "Your time",
    time: "- 2 hrs",
    time_zone: "/ gmt-3",
    image: "",
    isActive: false,
    id: 5,
  },
  {
    name: "Debbie",
    time: "- 2 hrs",
    time_zone: "/ gmt-5",
    image: guest2?.src,
    isActive: true,
    id: 2,
  },
  {
    name: "Your time",
    time: "- 2 hrs",
    time_zone: "/ gmt-3",
    image: "",
    isActive: false,
    id: 6,
  },
  {
    name: "Your time",
    time: "- 2 hrs",
    time_zone: "/ gmt-3",
    image: "",
    isActive: false,
    id: 7,
  },
  {
    name: "Your time",
    time: "- 2 hrs",
    time_zone: "/ gmt-3",
    image: guest3?.src,
    isActive: true,
    id: 3,
  },
];

export const checkBoxStyle = {
  body: {
    display: "flex",
    alignItems: "center",
    gap: 0,
  },
  input: {
    border: "1px solid #D0D5DD",
    borderRadius: 6,
  },
  label: {
    paddingInline: 8,
    margin: 0,
  },
};

export const radioStyles = {
  body: {
    display: "flex",
    alignItems: "center",
    gap: 0,
  },
  label: {
    paddingInline: 8,
    margin: 0,
  },
};

export const switchStyles = {
  body: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    border: "2px solid #D0D5DD",
  },
  track: {
    cursor: "pointer",
  },
};

export const projectsArr = [
  { label: "All team projects in", tag: "acme" },
  { label: "Tagged projects", tag: "" },
];

export const eventsArr = [
  "Deployment created",
  "Project created",
  "Deployment error",
  "Project deleted",
  "Deployment cancelled",
];

export const tabsArr = [
  { id: 1, label: "Create Webhook", component: CreateWebhook },
  { id: 2, label: "Connect Repositories", component: ConnectRepositories },
  { id: 3, label: "Create API key", component: CreateApiKey },
  { id: 4, label: "Share workspace", component: ShareWorkspace },
];
