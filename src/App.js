import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Register from "./views/Register";
import CreateAccount from "./views/master/CreateAccount";
import RouteGuard from "./components/RouteGuard";

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                    {/* Protected routes */}
                    <Route path="/" element={<RouteGuard component={Home} />}></Route>
                    <Route path="/home" element={<RouteGuard component={Home} />}></Route>
                    <Route path={"/master/create-account"} element={<RouteGuard component={CreateAccount} />}/>
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
