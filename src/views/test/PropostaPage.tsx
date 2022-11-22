import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AppBar from "../../components/AppBar";
import ProposalRow from "./ProposalRow";
import { BsSearch } from "react-icons/bs";
import './test.css'

export default function PropostaPage() {

    return <AppBar>
        <div>
            <div className="d-flex float-start ms-5 mt-5">
                <Button className="m-auto">
                    Create Proposal
                </Button>
            </div>

            {
            //SearchBar
            }
            <Row className="d-flex d-inline w-75 m-auto">
                <Col md={10} >
                    <Form className='m-5 my-4 mx-auto'>
                        <Form.Group className="">
                            <Form.Label>Customer name</Form.Label>
                            <Form.Control className="p-3" type={"text"} placeholder={"Customer name"} />
                        </Form.Group>
                        <div className="d-inline d-flex justify-content-between">
                            <Form.Group>
                                <Form.Label>Proposal ID</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Seller</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                        </div>
                        <div className="d-inline d-flex justify-content-between">
                            <Form.Group>
                                <Form.Label>Proposal Number</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Promotora</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sale's source</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                        </div>
                        <div className="d-inline d-flex justify-content-between">
                            <Form.Group>
                                <Form.Label>Bank</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Chunk</Form.Label>
                                <Form.Control type={"text"} />
                            </Form.Group>
                        </div>
                    </Form>
                </Col>
                <Col md={1} className="my-5 mx-auto">
                    <Button variant="primary" size="lg">
                        <BsSearch />
                    </Button>
                </Col>
            </Row>



            <table className="table" style={{ height: "100vh" }}>
                <tbody className="">
                    <tr className="m-5">
                        <ProposalRow />
                    </tr>
                    <tr className="m-5">
                        <ProposalRow />
                    </tr>
                    <tr className="m-5">
                        <ProposalRow />
                    </tr>
                    <tr className="m-5">
                        <ProposalRow />
                    </tr>

                    <tr className="m-5">
                        <ProposalRow />
                    </tr>
                </tbody>
            </table>
        </div >
    </AppBar >
}