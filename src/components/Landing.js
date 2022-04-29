// import { Button } from 'bootstrap'
import React from 'react'
import { Row, Container, Col, Button } from 'reactstrap'



export default function Landing() {
    return (
<Container fluid className="main-container p-5">
            <Row 
            // className="align-items-top landing position-relative overflow-hidden"
            // className="m-5"
            >
            <Col md="6" className="m-2">
            <h1>Cleaning</h1>

            </Col>
            <Col className="m-2">
            <p>Quickly start development on your next project using this admin dashboard template. It's free, open-source and licensed </p>
            <Button >
        Free Estimate
            </Button>



            </Col>
            </Row>
</Container>
    )
}