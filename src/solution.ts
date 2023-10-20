import { Solution } from "@thcare/thfx";
import patient from "./apps/patient.js";
import onFormSubmittedHook from "./hooks/onFormSubmittedHook.js";
import onUserCreatedHook from "./hooks/onUserCreatedHook.js";

const solution: Solution = {
  title: "th.care Solution Template",
  apps: {
    patient,
  },
  hooks: [onFormSubmittedHook, onUserCreatedHook],
};

export default solution;
