import { useState } from 'react';

import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactSlise';
import { getContacts } from 'redux/selectors';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  function isFound({name}) {
    const findName = name.trim().toLowerCase();
    return contacts.some(item => item.name.toLowerCase() === findName);
  }



  function formSubmitHandler(data) {
    const dupplicate = isFound({ name })
    if (dupplicate) {
      window.alert('this name isalready in contacts')
      return
    }
    const newContact = {
    
      ...data,
      id: nanoid(),
    };
    
    dispatch(addContact(newContact));
  }

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    formSubmitHandler({ name, number });

    reset();
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          Name
          <input
            className={css.input}
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            className={css.input}
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
