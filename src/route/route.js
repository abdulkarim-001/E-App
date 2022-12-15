import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from "../components/Home/Home"
import Cart from "../components/cart"
import SignIn from "../pages/signin";
import ForgotPassword from "../components/forgot_password"
import ErrorPage from '../pages/ErrorPage/ErrorPage';
const RouterFunction = () =>{
    return(
    <BrowserRouter>
    <Routes>
        <Route path='/E-App' element={<Home/>}/>        
        <Route path='/E-App/signin' element={<SignIn/>}/>        
        <Route path='/E-App/forgotpassword' element={<ForgotPassword/>}/>        
        <Route path='*' element={<ErrorPage/>}/>        
    </Routes>
    </BrowserRouter>
    );
};

export default RouterFunction;