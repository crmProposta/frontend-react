import React from "react";
import {Row} from "react-bootstrap";
import TopBar from "./TopBar";
import Sidebar from "../SideBar";
import {useRef} from "react";

type Props = {
    children: JSX.Element
}

export default function AppBar({children} : Props) {

    const contentRef = useRef(null)
    let active = false;
    function changeChildrenMargin() {
        let ml = active ? "260px" : "65px"
        active = !active
        //@ts-ignore
        contentRef.current.style.marginLeft = ml
    }
    return (
        <div style={{height: "100%", width:"100%", display: 'flex'}}>
            <Sidebar onToggleEvent={changeChildrenMargin}/>
            <div className={"w-100"}>
                <Row>
                    <TopBar />
                </Row>
                <Row ref={contentRef} style={{overflow: "auto", marginTop:"2%", marginLeft:"260px"}}>
                    {children}
                </Row>
            </div>
        </div>
    )
}