import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineBank } from 'react-icons/ai';
import { BsPersonBadge } from 'react-icons/bs';
import { HiIdentification, HiOutlineIdentification } from 'react-icons/hi';
import { MdOutlineCategory, MdOutlineGroups, MdPermIdentity } from 'react-icons/md';
import { RiDoorClosedLine } from 'react-icons/ri';
import { TiSortNumerically } from 'react-icons/ti';
import Search from './index';


export default function AdvancedSearchForms() {
    return (<div className='ms-2'>
        <div className="d-flex justify-content-between">
            <Search.Filter iconType={<HiIdentification size={"md"} />}>
                <Form.Label>Proposal ID</Form.Label>
                <Form.Control type={"number"} min="0" name="proposal_id"/>
            </Search.Filter>
            <Search.Filter iconType={<MdPermIdentity size={"md"} />}>
                <Form.Label>CPF</Form.Label>
                <Form.Control type={"text"} name="customer_cpf"/>
            </Search.Filter>
            <Search.Filter iconType={<BsPersonBadge size={"md"} />}>
                <Form.Label>Seller</Form.Label>
                <Form.Control type={"text"} name="seller"/>
            </Search.Filter>
        </div>
        <div className="d-inline d-flex justify-content-between">
            <Search.Filter iconType={<TiSortNumerically size={"md"} />}>
                <Form.Label>Proposal Number</Form.Label>
                <Form.Control type={"number"} min="0" name="proposal_number"/>
            </Search.Filter>
            <Search.Filter iconType={<RiDoorClosedLine size={"md"} />}>
                <Form.Label>Promotora</Form.Label>
                <Form.Control type={"text"} name="promotora"/>
            </Search.Filter>
            <Search.Filter iconType={<HiOutlineIdentification size={"md"} />}>
                <Form.Label>Sale's source</Form.Label>
                <Form.Control type={"text"} name="sale_source"/>
            </Search.Filter>
        </div>
        <div className="d-inline d-flex justify-content-between">
            <Search.Filter iconType={<AiOutlineBank size={"md"} />}>
                <Form.Label>Bank</Form.Label>
                <Form.Control type={"text"} name="bank"/>
            </Search.Filter>
            <Search.Filter iconType={<MdOutlineCategory size={"md"} />}>
                <Form.Label>Type</Form.Label>
                <Form.Control type={"text"} name="type"/>
            </Search.Filter>
            <Search.Filter iconType={<MdOutlineGroups size={"md"} />}>
                <Form.Label>Chunk</Form.Label>
                <Form.Control type={"text"} name="chunk"/>
            </Search.Filter>
        </div>
    </div>
    )
}