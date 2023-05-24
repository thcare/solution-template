import { FormComponent, FormComponentType, FormStep } from "@thcare/thcarefx";

export const firstNameInput: FormComponent = {
  name: "first_name",
  label: "First Name",
  type: FormComponentType.Text,
  defaultValue: "",
  validate: {
    string: {
      required: ["First Name is required"],
    },
  },
};

export const emailInput: FormComponent = {
  name: "email",
  label: "Email",
  type: FormComponentType.Email,
  validate: {
    string: {
      required: ["Email is required"],
      email: ["Email must be a valid email"],
    },
  },
};

export const submitComponent: FormComponent = {
  type: FormComponentType.Submit,
  label: "Submit",
  name: "submit",
  defaultValue: "submit",
};

const step: FormStep = {
  type: "step",
  name: "1",
  components: [firstNameInput, emailInput, submitComponent],
};

export default step;
