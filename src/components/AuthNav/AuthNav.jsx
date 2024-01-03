import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <Button sx={{ color: '#fff' }}>
        <NavLink to="/register">Sign Up</NavLink>
      </Button>
      <Button sx={{ color: '#fff' }}>
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </div>
  );
};
