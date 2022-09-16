import { styled, AppBar } from '@mui/material';

export const NavbarStyles = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'green',
  color: theme.palette.newUkesh?.dark,
}));

export const NavStyled = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
}));
