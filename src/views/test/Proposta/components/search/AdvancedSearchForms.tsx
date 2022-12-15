import React from 'react';
import { Form } from 'react-bootstrap';
import { AiOutlineBank } from 'react-icons/ai';
import { BsPersonBadge } from 'react-icons/bs';
import { HiIdentification, HiOutlineIdentification } from 'react-icons/hi';
import { MdOutlineCategory, MdOutlineGroups, MdPermIdentity } from 'react-icons/md';
import { RiDoorClosedLine } from 'react-icons/ri';
import { TiSortNumerically } from 'react-icons/ti';
import AdvancedSearch from './AdvancedSearch';


export default function AdvancedSearchForms() {
    return (<>
        <div className="d-inline d-flex justify-content-between">
            <AdvancedSearch iconType={<HiIdentification size={"md"} />}>
                <Form.Label>Proposal ID</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<MdPermIdentity size={"md"} />}>
                <Form.Label>CPF</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<BsPersonBadge size={"md"} />}>
                <Form.Label>Seller</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
        </div>
        <div className="d-inline d-flex justify-content-between">
            <AdvancedSearch iconType={<TiSortNumerically size={"md"} />}>
                <Form.Label>Proposal Number</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<RiDoorClosedLine size={"md"} />}>
                <Form.Label>Promotora</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<HiOutlineIdentification size={"md"} />}>
                <Form.Label>Sale's source</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
        </div>
        <div className="d-inline d-flex justify-content-between">
            <AdvancedSearch iconType={<AiOutlineBank size={"md"} />}>
                <Form.Label>Bank</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<MdOutlineCategory size={"md"} />}>
                <Form.Label>Type</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
            <AdvancedSearch iconType={<MdOutlineGroups size={"md"} />}>
                <Form.Label>Chunk</Form.Label>
                <Form.Control type={"text"} />
            </AdvancedSearch>
        </div>
    </>
    )
}