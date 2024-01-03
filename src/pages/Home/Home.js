import { Title } from './Home.styled';

export default function HomePage() {
  return (
    <div>
      <Title>
        Phonebook welcome page
        <span role="img" aria-label="Greeting icon">
          😎
        </span>
      </Title>
    </div>
  );
}
