const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span className="name">{contact.name}</span>: <span className="number">{contact.number}</span>
      </li>
    ))}
  </ul>
);

export default ContactList;