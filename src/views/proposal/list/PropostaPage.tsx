import React from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import ProposalRow from "./ProposalRow";
import { BsSearch } from "react-icons/bs";
import './test.css'
import AppBar from "../../../components/core/AppBar";
import Search from "../../../components/Proposta/components/search/index";
import AdvancedSearchForms from "../../../components/Proposta/components/search/AdvancedSearchForms";

export default function PropostaPage() {

    return <AppBar>
        <div>
            <Form className="row d-flex justify-content-center me-3">
                <Col md={1} className='mt-5'>
                    <h2 className="mt-3">Search:</h2>
                </Col>
                <Col md={6} className='my-4'>
                    <Search.Form />
                    <Accordion defaultActiveKey="0" flush alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <div className="d-flex mx-auto justify-content-end">
                                <Accordion.Header >Filters</Accordion.Header>
                            </div>
                            <Accordion.Body>
                                <div className="p-2">
                                    <AdvancedSearchForms />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Col>
                <Col md={1} className="mt-5">
                    <div className="d-flex float-end">
                        <Button className="mt-2" variant="primary" size="lg" type="submit">
                            <BsSearch className="m-1" />
                        </Button>
                    </div>
                </Col>
            </Form>

            <div className="d-flex justify-content-center mx-5 mt-3">
                <Button className="m-auto">
                    Create Proposal
                </Button>
            </div>
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