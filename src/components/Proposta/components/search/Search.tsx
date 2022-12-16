import React from 'react';
import { Form } from 'react-bootstrap';

export default function Search(title: String) {
    return (
        <Form.Group className="">
            <Form.Label>Customer name</Form.Label>
            <Form.Control className="p-3" type={"text"} placeholder={"Customer name"} name="customer_name" />
        </Form.Group>
    )
}