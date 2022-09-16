import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Navbar = () => {
  const theme = useTheme();
  const isAuthenticated = true;
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          width: '100%',
          height: '80px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {isMobile && (
          <IconButton
            color="inherit"
            edge="start"
            sx={() => ({
              outline: 'none',
              color: theme.palette.background.default,
            })}
          >
            <Menu />
          </IconButton>
        )}
        <IconButton color="inherit" sx={{ ml: 1 }}>
          {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        {!isMobile && 'Search...'}
        <div>
          {!isAuthenticated ? (
            <Button>
              Login &nbsp; <AccountCircle />
            </Button>
          ) : (
            <Button color="inherit">
              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar sx={{ width: 30, height: 30 }} alt="Profile" src="#" />
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
