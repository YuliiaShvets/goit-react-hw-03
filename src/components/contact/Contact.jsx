import s from "./Contact.module.css"


const Contact = ({ handleDelete, id, contact }) => {
  return (
    <li className={s.contactItem}>
      <span className={s.contactSpan}>{contact}</span>
  <button onClick={() => {handleDelete(id)}} className={s.contactBtn}>Delete</button>
  </li>
  );
};

  
  export default Contact;