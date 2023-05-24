import { HookRegistration } from "@thcare/thcarefx";

export default {
  event: { type: "FormSubmitted" },
  handler: { type: "bundled-azure-function", name: "FnOnIntakeFormSubmitted" },
} satisfies HookRegistration<"FormSubmitted">;
