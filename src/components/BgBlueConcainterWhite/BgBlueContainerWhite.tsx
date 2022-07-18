import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./auth.css";
import Divider from "../Divider.jsx";

type Props = {
    children: JSX.Element| JSX.Element[],
}
class BgBlueContainerWhite extends React.Component<Props> {

    render() {
        return (
            <div className='bgBlueFullHeight pt-5'>
                <Divider />
                <Container id="bg-light-container" fluid="md" className='bg-light mx-auto border rounded-3'>
                    <Row className='w-100 mx-0'>
                        <Col lg={4} className='mx-auto'>
                            {this.props.children}
                        </Col>
                    </Row>
                    <Divider />
                </Container>
            </div>
        );
    }
}

export default BgBlueContainerWhite;
