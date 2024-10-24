import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = props => {
  const { filteredContacts, onDeleteContact } = props;
  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.listItem} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
