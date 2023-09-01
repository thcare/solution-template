import { createModel } from "schemix";
import Patient from "./patient.js";

export default createModel("FeedItem", (model) =>
  model
    .string("id", {
      id: true,
      default: { uuid: true },
    })
    .string("subject")
    .string("body", { optional: true })
    .dateTime("createdAt", { default: { now: true } })
    .dateTime("dismissedAt", { optional: true })
    .string("patientId")
    .relation("patient", Patient, { fields: ["patientId"], references: ["id"] })
);
