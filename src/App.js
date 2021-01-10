import React, { useState, useEffect } from "react";
import shortid from 'shortid'
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";


const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
    
export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  }
  );

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
    if(initialState !==0);
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(useState => [...useState, contact]);

  }

  const handleCheckUnique = (name) => {
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert(`${name} is already in contacts`);
    return !isExistContact;
  };

  const handleRemoveContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };
  const handleFilterChange = event => setFilter (event.currentTarget.value);


  const getVisibleContacts = () => {
      return contacts.filter((setContact) =>
        setContact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  };

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={handleAddContact}
          onCheckUnique={handleCheckUnique}
        />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactsList
          contact={getVisibleContacts()}
          onRemove={handleRemoveContact}
        />
      </>
    );
  }

