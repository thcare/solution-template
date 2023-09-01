import { App, Solution, Locale } from "@thcare/thfx";
import { graphql } from "./generated/graphql/index.js";

// TC-184: The codegen process needs to find at least one graphql query
// in `src`, in order to build the solution. When populating
// your solution, replace this with a meaningful query.
void graphql(`
  query Patients {
    patients {
      id
    }
  }
`);

const templateApp: App = {
  title: "Template App",
  logo: "logo.png",
  template: "web.th.care",
};

const solution: Solution = {
  title: "th.care Solution Template",
  apps: {
    template: templateApp,
  },

  locales: ["en-CA"],
  defaultLocale: "en-CA",
  getMessagesForLocale(_locale: Locale): undefined {
    // No localized messages in this solution
    return undefined;
  },
};

export default solution;
