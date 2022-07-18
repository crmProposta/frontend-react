import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode"; 
import AuthContext from "../../contexts/auth";
import CookieUtils from "../../utils/CookieUtils";

// @ts-ignore
export default function ProtectedRoute({ component: Component, redirect }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const accessToken = CookieUtils.getAccessToken()

    try {
      if (accessToken !== undefined && accessToken !== '') {
        const decoded: any = jwt_decode(accessToken);
        setUser(decoded);
        setAuthenticated(true);
        setChecked(true);
      } else {
        setChecked(true);
        setAuthenticated(false);
      }
    } catch (error) {
      setChecked(true);
      setAuthenticated(false);
      console.log("Token Inválido");
    }
  }, []);

  return (
    <>
      {checked &&
        (authenticated ? (
          <AuthContext.Provider value={user}>
            <Component />
          </AuthContext.Provider>
        ) : (
          <Navigate to={redirect} />
        ))}
    </>
  );
}