import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterContainer, RegisterTitle } from './Register.styled';

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterTitle>Registration</RegisterTitle>

      <RegisterForm />
    </RegisterContainer>
  );
}
