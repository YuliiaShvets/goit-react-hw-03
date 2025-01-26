import s from "./Contact.module.css"

const Contact = ({ id, name, number, handleDelete }) => (
  <li className={s.contactList}>
    <span>
      {name} {number}
    </span>
    <button
      onClick={() => handleDelete(id)}
      className={s.contactBtn}
    >
      Delete
    </button>
  </li>
);

  
  export default Contact;