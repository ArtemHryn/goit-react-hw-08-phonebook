import { Circles } from 'react-loader-spinner';
import GlobalStyle from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';
import { Contacts } from './Contacts/Contacts';
import { Title, ContactTitle, Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));
    return () => controller.abort();
  }, [dispatch]);

  return (
    <Container>
      <GlobalStyle />
      <div>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactTitle>
          Contacts{' '}
          {isLoading && !error && (
            <Circles
              height="20"
              width="20"
              color="red"
              ariaLabel="circles-loading"
              visible={true}
              wrapperStyle={{ display: 'inline' }}
            />
          )}
        </ContactTitle>
        <ContactsFilter />
        <Contacts />
      </div>
    </Container>
  );
};
