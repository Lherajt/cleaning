
import React from 'react'
import { Row, Container, Col, Button} from 'reactstrap'
import Bubbles from './Bubbles'



export default function About() {

    return (
        <Container fluid className="main-container p-5">
            <Row
            // className="align-items-top landing position-relative overflow-hidden"
            // className="m-5"
            >

        <Bubbles />

                <Col md="6" className="m-2">
                    <h1 className="main-header">About Us</h1>

                </Col>
                <Col className="m-2">
                    <p>Quickly start development on your next project using this admin dashboard template. Quickly start development on your next project using this admin dashboard template.Quickly start development on your next project using this admin dashboard template.Quickly start development on your next project using this admin dashboard template.It's free, open-source and licensed </p>



                    <Button
                        color="info" 
                        type="button"
                        size="lg"
                        className="text-dark shadow-lg p-3 my-3 rounded main-btn"
                    >
                        Contact Us
                    </Button>
                   

                </Col>
            </Row>
        </Container>
    )
}