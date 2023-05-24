import { Solution } from "@thcare/thcarefx";
import patient from "./apps/patient.js";
import onIntakeFormSubmittedHook from "./hooks/onIntakeFormSubmittedHook.js";

const solution: Solution = {
  title: "Solution Template",
  apps: {
    patient,
  },
  hooks: [onIntakeFormSubmittedHook],
};

export default solution;
