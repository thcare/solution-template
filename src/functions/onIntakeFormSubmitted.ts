import {
  AzureFunction,
  Context,
  HttpRequest,
  HttpResponse,
} from "@azure/functions";
import request from "graphql-request";
import { CREATE_PATIENT } from "../graphql/queries.js";
import intakeForm from "../forms/intake.js";

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
function getPatientInfo(event: any): { name: string; email: string } {
  if (event.submission.form_id !== intakeForm.name) {
    throw new Error(
      `Invalid form submitted, expecting "${intakeForm.name}", got "${event.submission.form_id}"`
    );
  }
  return {
    name: event.submission.data.name,
    email: event.submission.data.email,
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
            body: "We're excited to have you as a patient!",
          },
        ],
      },
    },
  });
}
