import { FormComponent, FormComponentType, FormStep } from "@thcare/thfx";

const nameInput: FormComponent = {
  name: "name",
  label: "Patient Name",
  type: FormComponentType.Text,
  defaultValue: "",
  validate: {
    string: {
      required: ["Patient Name is required"],
    },
  },
};

const emailInput: FormComponent = {
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

const submitComponent: FormComponent = {
  type: FormComponentType.Submit,
  label: "Submit",
  name: "submit",
  defaultValue: "submit",
};

const step: FormStep = {
  type: "step",
  name: "1",
  components: [nameInput, emailInput, submitComponent],
};

export default step;
