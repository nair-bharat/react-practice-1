import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid e-mail format").required("Required"),
    channel: Yup.string().required("Required"),
    //address: Yup.string().required("Required"),
  });
  //console.log(formik.values);
  //console.log("Formik errors", formik.errors);
  //console.log("Visited fields", formik.touched);
  //console.log(formik.getFieldProps());
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />

          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />

          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments"></Field>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log("Render props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
