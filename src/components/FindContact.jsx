import { useState, useMemo } from 'react';
import ContactList from './ContactList';
import FilterInput from './FilterInput';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const FindContact = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contactsData.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter]);

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <FilterInput filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default FindContact;