import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { Colors } from "../../styles/theme"
const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop:"150px"}}>
      <Container component="main" maxWidth="xs" 
      sx={{backgroundColor:Colors.dove_gray,
      borderRadius:3}}>
        <CssBaseline />
        <Box
          sx={{            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            borderColor: "black"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ContactSupportIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          <hr
            style={{
              background: "black",
              height: "2px",
              border: "none",
            }}
          />
          </Typography>
          <Typography variant="subtitle2" display="inline">
            Please enter your email address to send you a verification code
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
      </Box>
    </ThemeProvider>
  );
}