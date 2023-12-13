import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact, removeContact } from 'redux/contactSlise';




export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
   const filter = useSelector(getFilter);


  function onRemoveContact(contactId) {
        dispatch(removeContact(contactId));
  }

  
  function getFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filteredContacts = getFilterContacts();

  
  function isFound(name) {
    const findName = name.trim().toLowerCase();
    return contacts.some(item => item.name.toLowerCase() === findName);
  }

  function formSubmitHandler(data) {
    if (isFound(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
  }

  return (
    <div>
      <Phonebook addContact={formSubmitHandler} />
      <h2 className={css.title}>Contacts</h2>

      <Filter />

      {contacts.length > 0 && (
        <ContactList
          removeContact={onRemoveContact}
          contacts={filteredContacts}
        />
      )}
    </div>
  );
}