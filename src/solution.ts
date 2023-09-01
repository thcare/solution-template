import { Locale, Solution } from "@thcare/thfx";
import patient from "./apps/patient.js";
import onIntakeFormSubmittedHook from "./hooks/onIntakeFormSubmittedHook.js";

const solution: Solution = {
  title: "th.care Solution Template",
  apps: {
    patient,
  },
  hooks: [onIntakeFormSubmittedHook],
  locales: ["en-CA"],
  defaultLocale: "en-CA",
  getMessagesForLocale(_locale: Locale): undefined {
    // No localized messages in this solution
    return undefined;
  },
};

export default solution;
