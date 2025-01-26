import { Formik, Form, Field} from "formik";
/*import { useId } from "react";*/
import * as Yup from "yup";
import s from "./ContactForm.module.css"

/*const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too Short!").max(89, "Too Long!").required("Required"),
  phone: Yup.number().min(7, "Too Short!").max(89, "Too Long!").required("Required")
});


const initialValues = {
  username: "",
  phone: ""
};

const ContactForm = ({onSubmit}) => {

  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <Formik 
    initialValues = {initialValues}
    validationSchema={FeedbackSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}>
      
      <Form className={s.contactForm}>
        <div className={s.contactItem}>
        <label htmlFor={nameFieldId} className={s.contactLabel}>Name</label>
        <Field type="text" name="username" className={s.contactField}></Field>
        </div>

        <div className={s.contactItem}>
        <label htmlFor={phoneFieldId} className={s.contactLabel}>Number</label>
        <Field type="number" name="phone" className={s.contactField}></Field>
        </div>
    
    <div className={s.contactButton}>
        <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}*/

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required").min(3).max(50),
    number: Yup.string().required("Required").min(3).max(50),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="mb-4">
          <div className="mb-2">
            <label className={s.labelContactForm}>Name</label>
            <Field
              name="name"
              type="text"
              className="border rounded w-full p-2"
            />
            
          </div>
          <div className="mb-2">
            <label className="block font-bold mb-1">Number</label>
            <Field
              name="number"
              type="text"
              className="border rounded w-full p-2"
            />
            
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
