const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li>
      {name}: {number} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;
