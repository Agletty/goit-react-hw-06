import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const INITIAL_FORM_DATA = { name: "", number: "", id: nanoid() };

const ContactFormSchema = Yup.object({
  name: Yup.string()
    // .matches(/^[A-Za-z]+$/, "Must contain only letters")
    .min(3, "Must be at least 3 characters!")
    .max(50, "Must be 50 characters or less!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Must be at least 3 characters!")
    .max(50, "Must be 50 characters or less!")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.contactCont}>
          <label className={css.contactText} htmlFor="name">
            Name
          </label>
          <Field
            className={css.contactField}
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label className={css.contactText} htmlFor="number">
            Number
          </label>
          <Field
            className={css.contactField}
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
