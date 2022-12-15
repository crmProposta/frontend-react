import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './views/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './views/Home';
import Register from "./views/Register";
import CreateAccount from "./views/master/users/CreateAccount/CreateAccount";
import RouteGuard from "./components/RouteGuard";
import ListAccount from "./views/master/users/ListAccount/ListAccount";
import EditAccount from './views/master/users/EditAccount/EditAccount';
import PropostaPage from './views/test/PropostaPage';

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>

                    <Route path="/test" element={<PropostaPage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>

                    {/* Protected routes */}
                    <Route path="/" element={<RouteGuard component={Home} />}></Route>
                    <Route path="/home" element={<RouteGuard component={Home} />}></Route>

                    <Route path="/proposals" element={<PropostaPage />}></Route>

                    {/* Masters routes */}
                    <Route path={"/master/create-account"} element={<RouteGuard component={CreateAccount} />}/>
                    <Route path={"/master/list-account"} element={<RouteGuard component={ListAccount}/>}/>
                    <Route path={"/master/edit-account/:id"} element={<RouteGuard component={EditAccount}/>}/>
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
