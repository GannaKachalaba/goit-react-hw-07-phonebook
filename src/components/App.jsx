import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Header from 'components/Header/Header';
import css from 'components/App.module.css';

export function App() {
  return (
    <>
      <div className={css.container}>
        <Header />
      </div>
      <div className={css.container}>
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App;
