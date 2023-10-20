import { AzureFunction } from "@azure/functions";
import intakeForm from "../forms/intake.js";
import { UserCreatedEventSchema } from "@thcare/thfx";
import { createFeedItem } from "./api.js";

const onUserCreated: AzureFunction = async function (context, req) {
  const event = UserCreatedEventSchema.validateSync(req.body);

  context.log("User created; adding welcome FeedItem");
  const link = `/forms/${intakeForm.name}/${intakeForm.steps[0].name}`;
  await createFeedItem(event.user.id, {
    subject: "Welcome to the your Solution Demo",
    summary: "First, complete this form",
    body: `Feed items can have detailed content, including further calls to action.

This one directs the user to complete a form.

[Click here to continue](${link})`,
  });
};

export default onUserCreated;
