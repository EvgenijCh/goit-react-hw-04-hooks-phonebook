import React from 'react'
import PropTypes from 'prop-types'

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const ContactsList = ({ contact, onRemove }) => {
  if (contact.length === 0) return null;
  return (
    <ul>
      {contact.map((contacts) => (
        <ContactListItem {...contacts} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  on: PropTypes.func.isRequired,
};

export default ContactsList;
