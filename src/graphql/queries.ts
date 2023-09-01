import { graphql } from "../generated/graphql/index.js";
// Place in this file, any queries or mutations your solution will use to
// interact with the generated api.
// @link https://the-guild.dev/graphql/codegen/docs/getting-started

export const CREATE_PATIENT = graphql(`
  mutation CreateOnePatient($data: PatientCreateInput!) {
    createOnePatient(data: $data) {
      id
    }
  }
`);
