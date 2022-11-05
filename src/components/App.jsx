// import { Circles } from 'react-loader-spinner';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsFilter } from './ContactsFilter/ContactsFilter';
// import { Contacts } from './Contacts/Contacts';
// import { Title, ContactTitle, Container } from './App.styled';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Registration, LoginForm } from 'pages/';
import { useEffect } from 'react';
import { fetchUser } from 'redux/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   dispatch(fetchContacts(controller.signal));
  //   return () => controller.abort();
  // }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to='login'/>}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
      </Route>
    </Routes>
    // <Container>
    //   <GlobalStyle />
    //   <div>
    //     <Title>Phonebook</Title>
    //     <ContactForm />
    //     <ContactTitle>
    //       Contacts{' '}
    //       {isLoading && !error && (
    //         <Circles
    //           height="20"
    //           width="20"
    //           color="red"
    //           ariaLabel="circles-loading"
    //           visible={true}
    //           wrapperStyle={{ display: 'inline' }}
    //         />
    //       )}
    //     </ContactTitle>
    //     <ContactsFilter />
    //     <Contacts />
    //   </div>
    // </Container>
  );
};
