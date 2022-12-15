import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AppBar from "../../components/AppBar";
import ProposalRow from "./ProposalRow";
import { BsSearch } from "react-icons/bs";
import { HiIdentification, HiOutlineIdentification } from "react-icons/hi";
import { MdPermIdentity, MdOutlineCategory, MdOutlineGroups } from "react-icons/md";
import { BsPersonBadge, BsDoorOpenFill } from "react-icons/bs";
import { TiSortNumerically } from "react-icons/ti";
import { RiDoorClosedLine } from "react-icons/ri";
import { AiOutlineBank } from "react-icons/ai";

import './test.css'
import AdvancedSearch from './Proposta/components/search/AdvancedSearch';
import AdvancedSearchForms from "./Proposta/components/search/AdvancedSearchForms";

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
                <Col md={10}>
                    <Form className='m-5 my-4 mx-auto'>
                        <Form.Group className="">
                            <Form.Label>Customer name</Form.Label>
                            <Form.Control className="p-3" type={"text"} placeholder={"Customer name"} />
                        </Form.Group>
                        <div className="p-2">
                            <AdvancedSearchForms/>
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