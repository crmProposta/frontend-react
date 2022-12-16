/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import './Header.css';

type PropsHeader = {
    name: string,
    cpf: string,
    status: string,
    financiedAmount: number,
    unitCommision?: number,
    onClickEdit?: React.MouseEventHandler,
    onClickRemove?: React.MouseEventHandler,

}
export default function Header(
    { name,
        cpf,
        status,
        financiedAmount,
        unitCommision,
        onClickEdit,
        onClickRemove,
    }: PropsHeader) {
    return <div className="pb-0 mb-0">
        <Row className="align-items-center pt-1 pl-3 mx-1">
            <Col className="pt-2">
                <p className="my-auto text-dark " style={{ fontSize: "18px" }}>
                    {name}
                    <span className="text-gray"> | {cpf}</span>
                </p>
            </Col>
            <Col className="m-auto p-2">
                <div className="d-flex align-items-center justify-content-between pt-2" style={{ paddingRight: "2rem" }}>
                    <DivInline margin="r-3" className={["justify-content-between"]}>
                        <a tabIndex={0} className="text-light">
                            <span className="rounded italic"
                                style={{ padding: "0.4rem", fontSize: "13px", background: "red" }}>
                                {status}
                            </span>
                        </a>
                    </DivInline>
                    <DivInline padding="t-2" margin="r-3">
                        <div className="div-inline d-flex">
                            <h4>
                                <span className="d-block text-right"> R$ {financiedAmount} </span>
                            </h4>

                            <p className="pb-4 mr-3" style={{ fontSize: "15px" }}>
                                <span className="d-block text-right text-sucess" > R$ {unitCommision} </span>
                            </p>
                        </div>
                    </DivInline>
                    <DivInline>
                        <div id="header_proposal_buttons">
                            <Button className="text-light" variant={"warning"} onClick={onClickEdit}>Edit</Button>
                            <Button variant="warning" className="text-light">
                                Duplicar
                            </Button>
                        </div>
                    </DivInline>
                    <DivInline>
                        <Button className="py-2 px-3" variant="danger" onClick={onClickRemove}>X</Button>
                    </DivInline>
                </div>
            </Col>
        </Row>
    </div>
}


type PropsDivInline = {
    padding?: string,
    margin?: string,
    style?: React.CSSProperties,
    children: JSX.Element
    className?: string[]
}
function DivInline({ padding, margin, style, children, className }: PropsDivInline) {
    const classNames = className?.reduce((old, current) => `${old} ${current}`)
    return <div className={`d-inline d-flex  p${padding} m${margin} ${classNames}`} style={style}>
        {children}
    </div>
}