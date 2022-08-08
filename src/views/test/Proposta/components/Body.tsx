import React from "react";
import { Col, Row } from "react-bootstrap";

type Props = {
    id: string,
    bank: string,
    promoter: string,
    saleSource: string,
    proposalNumber: string,
    proposalType: string,

}
export default function Body({
    id,
    bank,
    promoter,
    saleSource,
    proposalNumber,
    proposalType,
}: Props) {
    return <>
        <Row className="px-3 mt-3 pt-3 pb-0 w-100  fundoCinza">
                <Col className="col-auto p-0">
                    <a href="#collapsefundoCinza<?php echo $k; ?>" data-toggle="collapse">
                        <div className="animation-icon animation-down">
                            <i className="bi bi-caret-down" id="seta">
                            </i>
                        </div>
                    </a>
                </Col>

                <Col>
                    <p className="mb-0 text-dark"><b>ID</b></p>
                    <p className="ms-1">{id}</p>
                </Col>
                <Col>
                    <p className="mb-0 text-dark"><b>BANK</b></p>
                    <p className="ms-1">
                        {bank}
                    </p>
                </Col>
                <Col>
                    <p className="mb-0 text-dark"><b>PROMOTORA</b></p>
                    <p className="ms-1">
                        {promoter}
                    </p>
                </Col>
                <Col>
                    <p className="mb-0 text-dark"><b>Sale's source</b></p>
                    <p className="ms-1">
                        {saleSource}
                    </p>
                </Col>
                <Col>
                    <p className="mb-0 text-dark"><b>Proposal number</b></p>
                    <p className="ms-1">{proposalNumber}</p>
                </Col>
                <Col>
                    <p className="mb-0 text-dark"><b>Type</b></p>
                    <p className="ms-1">{proposalType}</p>
                </Col>
        </Row>
    </>
}