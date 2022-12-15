import React from 'react'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Appbar from "../appbar/index";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme/index";
import Banner from "../banner";
import Products from "../products";
import { UIProvider } from "../../context/ui";
import Footer from "../footer";
import AppDrawer from "../drawer";
import Promotions from "../promotions";
import SearchBox from "../search";

const Home = () => {
  return (
    <Stack>
        <UIProvider>
    <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
            </UIProvider>
            </Stack>
  )
}

export default Home