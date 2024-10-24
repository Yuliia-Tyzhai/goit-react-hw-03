import React from 'react';
import styles from './Contact.module.css';

const Contact = props => {
  const { id, name, number, onDeleteContact } = props;

  return (
    <div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.number}>{number}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
