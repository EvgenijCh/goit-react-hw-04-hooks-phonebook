import React, { useState } from 'react'
// import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types'
import s from './ContactForm.module.css'

export default function ContactForm({ onSubmit, onCheckUnique }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const isValidatedForm = validatedForm();
    if (!isValidatedForm) return;
    onSubmit(name, number);
  }

  const validatedForm = () => {
    if (!name || !number) {
      alert("Some filed is empty");
      return;
    }
    return onCheckUnique(name);
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={s.inputForm}>
          <h3 className={s.dataInput}>Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChangeForm}
          />
          <h3 className={s.dataInput}>Number</h3>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={handleChangeForm}
          />
          <div>
            <button className={s.addContact} type="submit">
              Add contact
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCheckUnique: PropTypes.func.isRequired,
};