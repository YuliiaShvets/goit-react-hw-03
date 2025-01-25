

import s from "./App.module.css"
import ContactList from "./components/contactList/ContactList.jsx";
import ContactForm from "./components/contactForm/ContactForm.jsx";
import SearchBox from "./components/searchBox/SearchBox.jsx";
import { useState, useEffect } from "react";
import contacts from "./contacts.json"



const App = () => {

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('saved-contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
});

const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
  localStorage.setItem('saved-contacts', JSON.stringify(contacts));
}, [contacts]);

const searchChange = (event) => {
  setSearchItem(event.target.value);
};

const addContact = (name, number) => {
  const newContact = { id: crypto.randomUUID(), name, number };
  setContacts((prev) => [...prev, newContact]);
};

  const handleDelete = id => {
    const contacts = contacts.filter(contact => contact.id !== id);
    setContacts(contacts);
  }

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
<div className={s.app}>
  <h1 className={s.title}>Phonebook</h1>
  <ContactForm addContact={addContact}/>
  <SearchBox searchChange={searchChange} value={searchItem}/>
  <ContactList contacts={filterContacts} handleDelete={handleDelete}/>
</div>
    );
  };

export default App;