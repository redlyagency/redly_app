import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class List extends React.Component {
    render() {
        return (
            <div className="page-test-item-test container">
                <Container>
                    <Row>
                        <Col>Test</Col>
                    </Row>
                    <Row>
                        <Col>Test</Col>
                        <Col>Test</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default List;