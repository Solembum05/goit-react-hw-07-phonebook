
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import {  useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {


  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilter);
  
  function getFilterContacts() {
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filteredContacts = getFilterContacts();


  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(({ name, phone, id }) => (
          <li key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </li>
        ))}
    </ul>
  );
};


export default ContactList;
