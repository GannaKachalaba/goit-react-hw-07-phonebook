import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/Contacts/contactsApi';
import { getFilter } from 'redux/Selectors/selectors';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const { filter } = useSelector(getFilter);
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const filterList = filterContacts();

  return (
    <ul>
      {contacts &&
        filterList.map(({ id, name, phone: number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact name={name} number={number} id={id} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
