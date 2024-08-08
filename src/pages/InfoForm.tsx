import React, { useEffect, useState } from "react";
import Form from "@rjsf/mui";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import form from "./form.json";
import { useParams } from "react-router-dom";
import axios from "axios";

const uiSchema: UiSchema = {
  "ui:classNames": "custom-css-class",
};

const InfoForm = () => {
  const params = useParams();
  const id = params.id;
  const page = params.page;

  const [schema, setschema] = useState();

  const fetchFormData = async () => {
    const res = axios.get(
      `http://localhost:8080/Rest/v1/ieg/form/${id}/${page}`
    );

    setschema(res);
  };

  useEffect(() => {
    fetchFormData();
  }, []);

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
