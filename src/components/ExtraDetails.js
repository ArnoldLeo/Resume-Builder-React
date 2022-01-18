import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import DownloadLink from 'react-download-link';
import { withRouter } from 'react-router-dom';
import Resume from './Resume';


function ExtraDetails(props) {
    const { personData, handleChange, } = props
    const { skill1, skill2, skill3, skill4, skill5, skill6, interest1, interest2, interest3, interest4, interest5, interest6 } = personData

    // const [isSubmit, setIsSubmit] = useState(false)
    const [skillError, setskillError] = useState("")
    const validateSkill = () => {
        if (skill1 && (skill2 || skill3 || skill4 || skill5 || skill6)) {
            // setIsSubmit(true)
            setskillError("");
            return true;
        }
        else {
            setskillError("Minimum two skills required");
        }
        return false;
    };
    let finalSubmit = () => {
        if (validateSkill()) {
            
            // console.log(isSubmit);
            props.postData()
            props.history.push('./Resume')
        }
    }

    return (
        <div>
             {/* { isSubmit && <Resume  /> } */}
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Extra Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                    <i class="bi bi-check-circle-fill"></i>Skills/Languages</h5>
                            </div>

                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill1' value={skill1} onChange={(e) => handleChange(e)} placeholder="Skill 1" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill2' value={skill2} onChange={(e) => handleChange(e)} placeholder="Skill 2" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill3' value={skill3} onChange={(e) => handleChange(e)} placeholder="Skill 3" />
                                </span>
                            </Form.Group>
                            <br />
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill4' value={skill4} onChange={(e) => handleChange(e)} placeholder="Skill 4" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill5' value={skill5} onChange={(e) => handleChange(e)} placeholder="Skill 5" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='skill6' value={skill6} onChange={(e) => handleChange(e)} placeholder="Skill 6" />
                                </span>
                            </Form.Group>
                            <br />
                            {skillError && <div className="errormsg">{skillError}</div>}
                        </Row>
                        <hr />
                        <Row className="mb-3">
                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                    <i class="bi bi-check-circle-fill"></i>Interests</h5>
                            </div>

                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='interest1' value={interest1} onChange={(e) => handleChange(e)} placeholder="Interest 1" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='interest2' value={interest2} onChange={(e) => handleChange(e)} placeholder="Interest 2" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='interest3' value={interest3} onChange={(e) => handleChange(e)} placeholder="Interest 3" />
                                </span>
                            </Form.Group>
                            <br />

                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control name='interest4' value={interest4} onChange={(e) => handleChange(e)} type="text" placeholder="Interest 4" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='interest5' value={interest5} onChange={(e) => handleChange(e)} placeholder="Interest 5" />
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="text" name='interest6' value={interest6} onChange={(e) => handleChange(e)} placeholder="Interest 6" />
                                </span>
                            </Form.Group>
                            <br />
                            <div className='mt-3 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                    Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => { finalSubmit() }}>
                                    Submit
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <Card.Footer >
                    {/* <DownloadLink
                            
                            label="Download"
                            filename="my.pdf"
                            exportFile={() => <Resume />} /> */}
                        <Button className="buttons mt-4" onClick={() => { finalSubmit() }} >Download Resume<i class="bi bi-download" style={{ right: "-5px" }}></i></Button>
                        </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ExtraDetails)
