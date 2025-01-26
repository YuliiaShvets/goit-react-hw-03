import s from "./ContactList.module.css"
import Contact from "../contact/Contact"

const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} id={id} name={name} number={number} onDelete={handleDelete} />
    ))}
  </ul>
);


export default ContactList;

