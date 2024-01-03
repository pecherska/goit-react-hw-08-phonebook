import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';

import { purple } from '@mui/material/colors';

import Toolbar from '@mui/material/Toolbar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  // const backgroundColor = purple[900];

  return (
    <header>
      <Toolbar
        // style={{ backgroundColor }}
        sx={{
          backgroundColor: purple[900],
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </header>
  );
};
