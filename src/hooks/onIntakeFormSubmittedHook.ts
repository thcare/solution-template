import { HookRegistration } from "@thcare/thfx";

export default {
  event: { type: "FormSubmitted" },
  handler: { type: "bundled-azure-function", name: "FnOnIntakeFormSubmitted" },
} satisfies HookRegistration<"FormSubmitted">;
