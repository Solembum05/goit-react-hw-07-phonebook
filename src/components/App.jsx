import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

import {  useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactSlise';

export default function App() {

  const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

 

  return (
    <div>
      <Phonebook  />
      <h2 className={css.title}>Contacts</h2>

      <Filter />

      {contacts.length > 0 && (
        <ContactList
        />
      )}
    </div>
  );
}