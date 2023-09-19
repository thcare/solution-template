import {
  AzureFunction,
  Context,
  HttpRequest,
  HttpResponse,
} from "@azure/functions";
import request from "graphql-request";
import { CREATE_PATIENT } from "../graphql/queries.js";
import intakeForm from "../forms/intake.js";
import { EventBody } from "@thcare/thfx";

const onIntakeFormSubmitted: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<HttpResponse> {
  context.log("Intake form submitted");
  const graphqlEndpoint = getGraphQlEndpoint();
  context.log("Extracting intake data");
  const intakeData = getPatientInfo(req.body);
  context.log("Creating patient and feed items");
  const result = await createPatientAndFeedItems(intakeData, graphqlEndpoint);
  return {
    status: 200,
    body: {
      patientId: result.createOnePatient.id,
    },
  };
};

export default onIntakeFormSubmitted;

function getGraphQlEndpoint(): string {
  const graphqlEndpoint = process.env["PUBLIC_GRAPHQL_ENDPOINT"];
  if (!graphqlEndpoint) {
    throw new Error("Graphql endpoint unavailable");
  }
  return graphqlEndpoint;
}
function getPatientInfo(event: EventBody<"FormSubmitted">): {
  name: string;
  email: string;
} {
  if (event.submission.form_id !== intakeForm.name) {
    throw new Error(
      `Invalid form submitted, expecting "${intakeForm.name}", got "${event.submission.form_id}"`
    );
  }
  const data = event.submission.data as { name: string; email: string };
  return {
    name: data.name,
    email: data.email,
  };
}
async function createPatientAndFeedItems(
  { name, email }: { name: string; email: string },
  graphqlEndpoint: string
) {
  return await request(graphqlEndpoint, CREATE_PATIENT, {
    data: {
      name,
      email,
      feedItems: {
        create: [
          {
            subject: "Welcome to the your Solution Demo",
            summary: "We're excited to have you as a patient!",
            body: "Feed items can have more detailed content, including further calls to action.\n\nTo see more of what you can accomplish with a th.care solution, [click here](https://go.th.care/docs).",
          },
        ],
      },
    },
  });
}
