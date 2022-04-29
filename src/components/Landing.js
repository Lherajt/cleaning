// import { Button } from 'bootstrap'
import React from 'react'
import { Row, Container, Col, Button, ModalFooter, ModalBody, ModalHeader, Modal, Form, FormGroup, Label, Input } from 'reactstrap'



export default function Landing() {
    const [modal, setModal] = React.useState(false);

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



                    <Button
                        color="info" 
                        type="button"
                        size="lg"
                        className="text-dark shadow p-3 mb-5 rounded"
                        // shadow={true}
                        // bordered={true}
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