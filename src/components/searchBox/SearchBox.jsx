import { Formik, Form, Field} from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./SearchBox.module.css"

const FeedbackSchema = Yup.object().shape({
  key: Yup.string().min(3, "Too Short!").max(89, "Too Long!").required("Required"),
});


const initialValues = {
  key: ""
};

const SearchBox = () => {

  const keyFieldId = useId();
  

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik 
    initialValues = {initialValues}
    onSubmit = {handleSubmit}
    validationSchema={FeedbackSchema}>
      <Form className={s.searchForm}>
        <label htmlFor={keyFieldId} className={s.searchLabel}>Find contacts by name</label>
        <Field type="text" name="key"
            placeholder="Search..." className={s.serachField}></Field>
      </Form>
    </Formik>
  );
}

export default SearchBox;


