import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const AddContactSchema = Yup.object({
  name: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50).required('Required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={AddContactSchema}
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage
            className={styles.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={styles.label}>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
