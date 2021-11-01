import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";


export default function ButtonAppBar():JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="title"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            App Gallery
          </Typography>
          <Button variant="contained" component={Link} to="/">
            HomePage
          </Button>
          <Button variant="contained" component={Link} to="/about">
            About
          </Button>
          <Button variant="contained" component={Link} to="/gallery">
            Random Pictures
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}