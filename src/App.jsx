

import s from "./App.module.css"
import ContactList from "./components/contactList/ContactList.jsx";
import ContactForm from "./components/contactForm/ContactForm.jsx";
import SearchBox from "./components/searchBox/SearchBox.jsx";
import { useState, useEffect } from "react";



const App = () => {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
});


const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

const searchChange = (event) => {
  setSearchItem(event.target.value);
};

const addContact = ({name, number}) => {
  const newContact = { id: crypto.randomUUID(), name, number };
  setContacts((contacts) => [...contacts, newContact]);
};

  const handleDelete = (id) => {
   setContacts(contacts.filter((contact => contact.id !== id)));
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
<div className={s.app}>
  <h1 className={s.title}>Phonebook</h1>
  <ContactForm onSubmit={addContact}/>
  <SearchBox searchChange={searchChange} value={searchItem}/>
  <ContactList contacts={filteredContacts} handleDelete={handleDelete}/>
</div>
    );
  };

  
export default App;