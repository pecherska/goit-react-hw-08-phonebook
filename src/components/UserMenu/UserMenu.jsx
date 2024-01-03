import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operation';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, color: '#fff' }}
      >
        <p>Welcom, {user.name}</p>
      </Typography>
      <Button
        sx={{ color: '#fff' }}
        email={user.email}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};
