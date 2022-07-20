import React from "react";
import {FaUserCircle} from "react-icons/fa";
import {Dropdown, DropdownButton} from "react-bootstrap";

export default function TopBar() {

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
                <Dropdown.Item eventKey="1">Account name</Dropdown.Item>
                <Dropdown.Item eventKey="2">Type account</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="3">Logout</Dropdown.Item>
            </DropdownButton>
        </nav>
    )
}