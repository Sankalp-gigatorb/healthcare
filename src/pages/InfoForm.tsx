import React from "react";
import Form from "@rjsf/mui";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import form from "./form.json";

const schema: RJSFSchema = form;
const uiSchema: UiSchema = {
  "ui:classNames": "custom-css-class",
};

const InfoForm = () => {
  const HandleSubmit = ({ formData }) =>
    console.log("Data submitted: ", formData);
  return (
    <div className="w-2/4 mx-auto my-5">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={HandleSubmit}
      />
    </div>
  );
};

export default InfoForm;
