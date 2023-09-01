import { models } from "@thcare/thfx/prisma";
import FeedItem from "./feed-item.js";
import { createModel } from "@thcare/thschemix";

export default createModel("Patient", (model) =>
  model
    .mixin(models.Patient)
    .float("latestA1c", {
      optional: true,
    })
    .relation("feedItems", FeedItem, { list: true })
);
