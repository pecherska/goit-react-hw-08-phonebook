import { ContactFormFormik } from 'components/ContactForm/ContactFormFormik';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { fetchContacts } from 'components/redux/contacts/operation';
import {
  selectError,
  selectVisibleContacts,
} from 'components/redux/contacts/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  ContactTitle,
  ContactsContainer,
  SubContactTitle,
} from './ContactsPage.style';

export default function ContactsPage() {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const selectedContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    if (!!error) {
      toast.error(error);
    }
    dispatch(fetchContacts());
  }, [dispatch, error]);

  return (
    <ContactsContainer>
      <ContactTitle>Phone book</ContactTitle>

      <SubContactTitle>Adding new contact</SubContactTitle>
      <ContactFormFormik />
      <SubContactTitle>Contacts</SubContactTitle>
      <Filter />

      {!!selectedContacts.length && <ContactList />}
    </ContactsContainer>
  );
}
