import {
  NotFoundContainer,
  NotFoundTitle,
  SubNotFoundTitle,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <SubNotFoundTitle>Page not found!</SubNotFoundTitle>
    </NotFoundContainer>
  );
};
