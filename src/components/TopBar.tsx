import React from "react";
import {FaUserCircle} from "react-icons/fa";
import {Dropdown, DropdownButton} from "react-bootstrap";
import CookieUtils from "../utils/CookieUtils";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {TokenStructure} from "../models/Backend-default/TokenStructure";
import {Roles} from "../models/Backend-default/Roles";

export default function TopBar() {

    const token = CookieUtils.getAccessToken();
    const navigate = useNavigate();

    if (token == null || token.isEmpty) {
        navigate("/")
        return <></>
    }

    const tokenDecoded = jwtDecode(token) as TokenStructure

    const roles: number[] = tokenDecoded.roles.map(role => {
        // @ts-ignore
        return Roles[role];
    })
    const higherRole = Roles[Math.min(...roles)];

    function handleLogoutClick() {
        CookieUtils.deleteAuthTokens()
        navigate("/")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5 justify-content-between">
            <a className="navbar-brand " href="/home">TopBar</a>
            <DropdownButton
                align={{lg: 'end'}}
                variant={"dark"}
                title={(<FaUserCircle color="white" size={"2em"} className="dropdown-toggle"
                                      data-toggle="accountInfo-dropdown"
                                      ria-haspopup="true" aria-expanded="false"/>)}
            >
                <Dropdown.Item eventKey="1">name: {tokenDecoded.sub}</Dropdown.Item>
                <Dropdown.Item eventKey="2">role: {higherRole.toLowerCase()}</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3" onClick={handleLogoutClick}>Logout</Dropdown.Item>
            </DropdownButton>
        </nav>
    )
}