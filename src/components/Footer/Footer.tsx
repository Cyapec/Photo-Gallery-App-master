import { Typography } from '@mui/material';
import React from "react";
import './Footer.css'

export function Copyright():JSX.Element {
  return (
    <Typography variant="body2" color="text.secondary">
      {'© '}
      <a color="inherit" href="https://github.com/Cyapec/Photo-Gallery-App">
        GitHub
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
