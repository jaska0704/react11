import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginRight: "1rem" }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Web Developer Blog
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                style={{ marginRight: "1rem" }}
              >
                Login
              </Button>
              <Button color="secondary" variant="contained">
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
         <Paper>
          
         </Paper>
      </main>
    </>
  );
}

export default App;
