import { HookRegistration } from "@thcare/thfx";

export default {
  event: { type: "UserCreated" },
  handler: { type: "bundled-azure-function", name: "FnOnUserCreated" },
} satisfies HookRegistration<"UserCreated">;
