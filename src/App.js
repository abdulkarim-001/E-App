import logo from "./logo.svg";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Cart from "./components/cart/index";
import { useEffect } from "react";
import Payment from "./components/payment";
import SignIn from "./pages/signin";
import ForgotPassword from "./components/forgot_password"
import Route from "./route/route"
import { UIProvider } from "./context/ui";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Home from "./components/Home/Home"
import RouterFunction from "./route/route";
function App() {
  useEffect(() => {
    document.title = "APNI DUKAN";
  }, []);
  return (
    <ThemeProvider theme={theme}>
       <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <RouterFunction/>          
          </UIProvider>
        </Stack>
      </Container>
     </ThemeProvider>
  );
}

export default App;
