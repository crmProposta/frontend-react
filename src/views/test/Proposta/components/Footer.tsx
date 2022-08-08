import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFillCalendarFill, BsFillPersonFill, BsShop, BsHourglassSplit } from "react-icons/bs";

type Props = {
    registration:string,
    seller:string,
    chunk:string,
    lastModification:string,

}
export default function Footer({
    registration,
    seller,
    chunk,
    lastModification,
}: Props) {
    return <>
        <Row className="card-footer row mx-1">
            <Col>
                <BsFillCalendarFill className="m-2"/>
                Registration: {registration}
            </Col>
            <Col>
                <BsFillPersonFill className="m-2"/>
                Seller: {seller}
            </Col>
            <Col>
                <BsShop className="m-2" />
                Chunk: <p className="d-inline" >{chunk} </p>
            </Col>
            <Col>
                <div className="col-auto ">
                    <BsHourglassSplit className="m-2"/>
                    Alterado há XX dias, XX mins, XX segs
                </div>
            </Col>
        </Row>
    </>
}