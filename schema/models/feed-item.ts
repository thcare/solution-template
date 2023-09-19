import { createModel } from "@thcare/thschemix";
import Patient from "./patient.js";
import { models } from "@thcare/thfx/prisma";

export default createModel("FeedItem", (model) =>
  model
    .mixin(models.FeedItem)
    .string("patientId")
    .relation("patient", Patient, { fields: ["patientId"], references: ["id"] })
);
