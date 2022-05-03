
import React from 'react'
import { Row, Container, Col, Button, ModalBody, ModalHeader, Modal, Form, FormGroup, Label, Input } from 'reactstrap'
import Bubbles from './Bubbles'


export default function Landing() {
    const [modal, setModal] = React.useState(false);

    return (
        <Container fluid className="main-container p-5">
            <Row
            // className="align-items-top landing position-relative overflow-hidden"
            // className="m-5"
            >
        <Bubbles />

                <Col md="6" className="m-2">
                    <h1 className="main-header">Cleaning</h1>

                </Col>
                <Col className="m-2">
                    <h3 className="secondary-header">Quickly start development on your next project using this admin dashboard template. It's free, open-source and licensed </h3>



                    <Button
                        color="info" 
                        type="button"
                        size="lg"
                        className="text-dark shadow-lg p-3 my-3 rounded main-btn"
                        onClick={() => setModal(!modal)}
                    >
                        Free Estimate
                    </Button>
                    <Modal
                        centered
                        fullscreen="md"
                        size="xl"
                        isOpen={modal}
                        toggle={() => setModal(!modal)}
                        
                    >
                        <ModalHeader toggle={() => setModal(!modal)}
                        >
                            Cleaning worries we can solve for you!
                        </ModalHeader>
                        <ModalBody>
                            <p>

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </p>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Rooms:
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                        <option>
                                            3
                                        </option>
                                        <option>
                                            4
                                        </option>
                                        <option>
                                            5
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">
                                        Unusual needs:
                                    </Label>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                    />
                                </FormGroup>
                                <FormGroup check>
                                    <Input type="checkbox" />
                                    {' '}
                                    <Label check>
                                        Check me out
                                    </Label>
                                </FormGroup>
                                <Button>
                                    Submit
                                </Button>
                            </Form>
                        </ModalBody>

                    </Modal>



                </Col>
            </Row>
        </Container>
    )
}