import { AzureFunction } from "@azure/functions";
import intakeForm from "../forms/intake.js";
import { FormSubmittedEventSchema, getFormId } from "@thcare/thfx";
import { createFeedItem, dismissFeedItems } from "./api.js";

const onFormSubmitted: AzureFunction = async function (context, req) {
  const event = FormSubmittedEventSchema.validateSync(req.body);
  if (event.submission.form_id !== getFormId(intakeForm)) {
    context.log("Ignoring submission of unknown form");
    return;
  }
  if (event.submission.user_id == null) {
    context.log("Ignoring anonymous form submission");
    return;
  }

  context.log("Intake form submitted; adding response FeedItem");
  const intakeData = event.submission.data as { name: string; email: string };
  await dismissFeedItems(event.submission.user_id);
  await createFeedItem(event.submission.user_id, {
    subject: `Thanks ${intakeData.name}`,
    summary: "We're glad that you filled out the form",
    body: `You've only scratched the surface of what's possible.

To see more of what you can accomplish with a th.care solution, [click here](https://thfx.th.care).`,
  });
};

export default onFormSubmitted;
