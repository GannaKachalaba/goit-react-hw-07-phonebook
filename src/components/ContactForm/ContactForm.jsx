import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAddContactMutation, useFetchContactsQuery, } from 'redux/contactsApi';
// import { notiflix } from 'notiflix';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';


function ContactForm( {onClose}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

  // const contacts = useSelector(fetchContacts);
  // const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

  //   const newElement = { id: nanoid(), name, number };

  //   contacts.some(contact => contact.name === name)
  //     ? notiflix.warning(
  //         `${name}`,
  //         'This user is already in the contact list.',
  //         'OK'
  //       )
  //     : dispatch(addContact(newElement));

  //   reset();
  //   onClose();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };
  const data = { name, phone: number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name}`, 
      'This user is already in the contact list.', 
      'OK');
      return;
    }     
    
    addContact(data);

    reset();
    onClose();
    };
    
  
    const reset = () => {
      setName('');
      setNumber('');
    };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={css.label}>
        <span className={css.title}>Name</span>
        <input className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
        />
      </label>
      <label className={css.label}>
        <span className={css.title}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeNumber}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button} disabled={isLoading}>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;