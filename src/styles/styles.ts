import { css } from '@emotion/react';
// import { styled } from '@mui/material';
import { IconButton, styled } from '@mui/material';

export const root = {
  self: css({
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
  }),

  title: css({
    fontSize: '1.25rem',
  }),
};

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  color: '#fff',
  backgroundColor: theme.palette.action.active,
}));
