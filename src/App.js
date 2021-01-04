import React, { useState, useEffect } from "react";
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
  const localStorageData = JSON.parse(window.localStorage.getItem('contacts'))
  const [filter, setFilter] = useState('')
  const [numbers, setNumber] = useState(() => localStorageData);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(numbers));
    if (!numbers.leingth) {
      setNumber(initialState);
    }
  }, [numbers]);

  const handleAddContact = newContact =>
    setNumber(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  // const handleAddContact = (name, numbers) => {
  //   const contacts = {
  //     id: shortid.generate(),
  //     name,
  //     numbers,
  //   };
  // setNumber (state=> [numbers, ...state])
  // }
  const handleCheckUnique = (name) => {
    const isExistContact = !!numbers.find((contact) => contact.name === name);
    isExistContact && alert(`${name} is already in contacts`);
    return !isExistContact;
  };

  const handleRemoveContact = id => {
    setNumber((prevState) => prevState.filter((contact) => contact.id !== id));
    };
  const handleFilterChange = event => setFilter (event.currentTarget.value);

  const getVisibleContacts = () => {
      return numbers.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={handleAddContact} onCheckUnique={handleCheckUnique}/>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactsList contacts={getVisibleContacts()} onRemove={handleRemoveContact}
        />
      </>
    );
  }

