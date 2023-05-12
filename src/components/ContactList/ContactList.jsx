import {useSelector } from 'react-redux';
import { useFetchContactsQuery} from 'redux/contactsApi';
import { getFilter } from 'redux/contactsSelectors';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';


const ContactList = () => {
  const {data: contacts } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const filterContacts = filter 
  ? contacts.filter(({name}) =>
  name.toLowerCase().includes(filter.toLowerCase())
  ) 
  : contacts;
 

  return (
    filterContacts?.length > 0 && (
<ul>
    {filterContacts.map(({ id, name, phone: number }) => {
      return (
        <li className={css.item} key={id}>
   <Contact name={name} number={number} id={id} />
   </li>
      );
    })}
  </ul>
    )
  );
};
      
   

export default ContactList;

