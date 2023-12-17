
import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlise';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactSection}>
      <p className={css.info}>
        {name}: {phone}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};


export default ContactItem;
