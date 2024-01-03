import { useDispatch, useSelector } from 'react-redux';
import { ContactListElements, DeleteContactBtn } from './ContactList.styled';

import { useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import {
  deleteContact,
  fetchContacts,
} from 'components/redux/contacts/operation';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'components/redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  useEffect(() => {
    if (!!error) {
      toast.error(error);
    }
    dispatch(fetchContacts());
  }, [dispatch, error]);

  const filteredContacts = useSelector(selectVisibleContacts);

  const isLoading = useSelector(selectIsLoading);

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {isLoading && <Loader />}
        {!!filteredContacts.length &&
          filteredContacts.map(({ name, number, id }) => (
            <ContactListElements key={id}>
              <p>
                {name}:{number}
              </p>
              <DeleteContactBtn type="button" onClick={() => deleteItem(id)}>
                Delete
              </DeleteContactBtn>
            </ContactListElements>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
