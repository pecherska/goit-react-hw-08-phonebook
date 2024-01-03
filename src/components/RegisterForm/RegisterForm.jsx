import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operation';
import {
  RegisterFormButton,
  RegisterFormInput,
  RegisterFormStyled,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const { name, email, password } = value;
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );

    resetForm();
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: yup
      .string()
      .email()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    password: yup
      .string()
      .min(5, 'Too Short!')

      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <RegisterFormStyled>
        <RegisterFormInput
          type="text"
          name="name"
          placeholder="Input your Name"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="name" />

        <RegisterFormInput
          type="email"
          name="email"
          placeholder="Input your Email"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="email" />

        <RegisterFormInput
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Input your Password"
        />
        <ErrorMessage component="div" name="password" />

        <RegisterFormButton type="submit">Sign Up</RegisterFormButton>
      </RegisterFormStyled>
    </Formik>
  );
};
