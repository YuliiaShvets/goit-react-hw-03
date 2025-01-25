import s from "./ContactList.module.css"
import Contact from "../contact/Contact"


const ContactList = ({ contacts, handleDelete }) => {

  return (
        <ul className={s.list}>
            {contacts.map(contact=> (
                <Contact
                    key={contact.id}
                    contact={contact}
                    handleDelete={handleDelete} />
            ))}
        </ul>
      );
    };

export default ContactList;

