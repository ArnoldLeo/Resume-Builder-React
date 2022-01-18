import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { ArrowRight, } from 'react-bootstrap-icons';
import { ArrowLeft, } from 'react-bootstrap-icons';


function ExperienceDetails(props) {
    const {personData,handleChange}=props
    const{ institute1,position1,duration1,experienceDescription1,institute2, position2,duration2,experienceDescription2}=personData

     const [instituteError, setinstituteError] = useState("")
    const validateInstitute = () => {
        if (institute1) {
            setinstituteError("");
            return true;
        }
        else {
            setinstituteError("Institute/organisation name required");
        }
        return false;
    };

    const [positionError, setpositionError] = useState("")
    const validatePosition = () => {
        if (position1) {
            setpositionError("");
            return true;
        }
        else {
            setpositionError("Position required");
        }
        return false;
    };

    const [duartionError, setduartionError] = useState("")
    const validateDuration = () => {
        if (duration1) {
            setduartionError("");
            return true;
        }
        else {
            setduartionError("Duartion in months required");
        }
        return false;
    };
    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (experienceDescription1 ) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(experienceDescription1)) {
                setdescError("");
                return true;
            }
            else {
                setdescError("Enter valid Description");
            }
        }
        else {
            setdescError("Description required");
        }
        return false;
    };

    let goToExtra=()=>{
        validateInstitute()
        validatePosition()
        validateDuration()
        validationDescription()
        if(validateInstitute()&& validatePosition() && validateDuration()&& validationDescription()){
            props.history.push('/ExtraDetails')
        }
        
    }

    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Experience Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-4">
                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Experience 1</h5>
                            </div>

                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" name='institute1' value={institute1} onChange={(e)=>handleChange(e)} placeholder="Institute/Organisation*" />
                                    <i className="bi bi-building input-group-addon mt-2"></i>
                                </span>
                                {instituteError && <div className="errormsg">{instituteError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="text" name='position1' value={position1} onChange={(e)=>handleChange(e)} placeholder="Position*" />
                                    <i class="bi bi-briefcase-fill input-group-addon mt-2"></i>
                                </span>
                                {positionError && <div className="errormsg">{positionError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="number" name='duration1' value={duration1} onChange={(e)=>handleChange(e)} placeholder="Duration in months*" />
                                    <i class="bi bi-clock-fill input-group-addon mt-2"></i>
                                </span>
                                {duartionError && <div className="errormsg">{duartionError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                                <span className="input-group ">
                                    <Form.Control type="text" name='experienceDescription1' value={experienceDescription1} onChange={(e)=>handleChange(e)} placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                                {descError && <div className="errormsg">{descError}</div>}
                            </Form.Group>
                            <br /><hr />

                            <div>
                                <h5 className="ms-4" style={{ float: "left" }}>
                                <i class="bi bi-check-circle-fill"></i>Experience 2</h5>
                            </div>
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="text" name='institute2' value={institute2} onChange={(e)=>handleChange(e)} placeholder="Institute/Organisation*" />
                                    <i className="bi bi-building input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="text"  name='position2' value={position2} onChange={(e)=>handleChange(e)} placeholder="Position*" />
                                    <i class="bi bi-briefcase-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-4">
                                <span className="input-group ">
                                    <Form.Control type="number" name='duration2' value={duration2} onChange={(e)=>handleChange(e)} placeholder="Duration in months*" />
                                    <i class="bi bi-clock-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                                <span className="input-group ">
                                    <Form.Control type="text" name='experienceDescription2' value={experienceDescription2} onChange={(e)=>handleChange(e)} placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <div className='mt-3 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                  <ArrowLeft/>  Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => goToExtra()}>
                                    Next<ArrowRight/>
                                </Button>
                            </div>
                        </Row>

                    </Form>
                    <Card.Footer className="text-center mt-4">Page 4</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ExperienceDetails)
