import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Nav } from './Navigation.styled';
import Typography from '@mui/material/Typography';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <NavLink to="/">Home</NavLink>
      </Typography>
      {isLoggedIn && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/contacts">Contacts</NavLink>
        </Typography>
      )}
    </Nav>
  );
};
