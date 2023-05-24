import { Form, ThriveResourceType } from "@thcare/thcarefx";
import stepOne from "./intake/step-1.js";

const intakeForm: Form = {
  type: ThriveResourceType.Form,
  name: "intake",
  steps: [stepOne],
};

export default intakeForm;
