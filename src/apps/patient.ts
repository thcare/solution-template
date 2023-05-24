import { App } from "@thcare/thcarefx";
import intakeForm from "../forms/intake.js";

const app: App = {
  title: "Patient Application",
  template: "web.th.care",
  forms: [intakeForm],
};

export default app;
