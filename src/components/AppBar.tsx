import React from "react";
import {Row} from "react-bootstrap";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";

type Props = {
    children: JSX.Element
}
export default function AppBar({children} : Props) {
    return (
        <div style={{height: "100vh", display: 'flex', overflow: 'scroll initial'}}>
            <Sidebar/>
            <div className={"w-100"}>
                <Row>
                    <TopBar />
                </Row>
                <Row>
                    {children}
                </Row>
            </div>
        </div>
    )
}