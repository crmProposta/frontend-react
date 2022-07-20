import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Register from "./views/Register";
import CreateAccount from "./views/master/CreateAccount";

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path={"/master/create-account"} element={<CreateAccount />}/>
                </Routes>

            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    );
}

export default App;
