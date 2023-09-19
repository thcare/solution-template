import { Solution } from "@thcare/thfx";
import patient from "./apps/patient.js";
import onIntakeFormSubmittedHook from "./hooks/onIntakeFormSubmittedHook.js";

const solution: Solution = {
  title: "th.care Solution Template",
  apps: {
    patient,
  },
  hooks: [onIntakeFormSubmittedHook],
};

export default solution;
