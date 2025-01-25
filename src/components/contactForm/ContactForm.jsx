import { Formik, Form, Field} from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  phone: Yup.number().required("Required")
});


const initialValues = {
  username: "",
  phone: ""
};

const ContactForm = () => {

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik 
    initialValues = {initialValues}
    onSubmit = {handleSubmit}
    validationSchema={FeedbackSchema}>
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
}
    
export default ContactForm;
