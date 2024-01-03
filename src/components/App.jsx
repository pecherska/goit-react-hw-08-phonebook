// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ContactFormFormik } from './ContactForm/ContactFormFormik';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { ContainerForm, Title } from './App.styled.js';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/operation';
import Loader from './Loader/Loader';
import { NotFound } from './NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
//  {/* <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           // element={
//           //   // <RestrictedRoute
//           //   //   redirectTo="/tasks"
//           //   //   component={<RegisterPage />}
//           //   // />
//           // }
//         />
//       </Route>
//     </Routes> */}

// {/* <ToastContainer />
//   <ContainerForm>
//     <Title>Phonebook</Title>
//     <ContactFormFormik></ContactFormFormik>
//     <h2>Contacts</h2>
//     <Filter />
//     <ContactList />
//   </ContainerForm> */}
// {/* </Routes> */}
