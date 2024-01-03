import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer, LoginTitle } from './Login.styled';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginTitle>Log In</LoginTitle>

      <LoginForm />
    </LoginContainer>
  );
}
