import { logIn } from 'components/redux/auth/operation';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  LoginFormButton,
  LoginFormInput,
  LoginFormStyled,
} from './LoginForm.style';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const { email, password } = value;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  const schema = yup.object().shape({
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
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <LoginFormStyled>
        <LoginFormInput
          type="email"
          name="email"
          placeholder="Input your Email"
          autoComplete="username"
        />
        <ErrorMessage component="div" name="email" />

        <LoginFormInput
          type="password"
          name="password"
          placeholder="Input your Password"
          autoComplete="current-password"
        />
        <ErrorMessage component="div" name="password" />

        <LoginFormButton type="submit">Log In</LoginFormButton>
      </LoginFormStyled>
    </Formik>
  );
};
