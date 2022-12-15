import React, { Component } from 'react';
import { Col, Form } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { HiOutlineIdentification } from 'react-icons/hi';

type Props = {
    iconType: JSX.Element,
    children: JSX.Element[]
}

export default function AdvancedSearch({ iconType, children }: Props) {

    return (
        <Form.Group className="row p-2">
            <Col lg={2} className="d-flex align-items-center" style={{background:"#AADAAA"}}>
                <>{iconType}</>
            </Col>
            <Col>
                {children}
            </Col>

        </Form.Group>
    )
}