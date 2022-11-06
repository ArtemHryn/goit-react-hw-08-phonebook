import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsFilter } from "components/ContactsFilter/ContactsFilter";
import { ContactsList } from "components/ContactsList/ContactsList";
import {  useEffect } from "react";
import { Circles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import { ContactTitle, Container, Title } from "./Contacts.styled";

 const Contacts = () => {
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
           <ContactsList />
         </div>
       </Container>
   );
};

export default Contacts