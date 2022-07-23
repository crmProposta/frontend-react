import React from 'react';
// @ts-ignore
import {Route, Navigate, Outlet} from 'react-router-dom';
import CookieUtils from "../utils/CookieUtils";

// @ts-ignore
export default function RouteGuard({ component: Component, ...rest }){

    function hasJWT() {
        let flag = false;
        flag =  CookieUtils.getAccessToken() != null ? flag=true : flag=false

        return flag
    }


         return hasJWT() ? <Component /> : <Navigate to="/login" />;
};