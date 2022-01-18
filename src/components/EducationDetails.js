import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import './form.css'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { ArrowRight, } from 'react-bootstrap-icons';
import { ArrowLeft, } from 'react-bootstrap-icons';

function EducationDetails(props) {
    const { personData, handleChange } = props
    // console.log(props);
    const { college, fromyear1, toyear1, qualification1, description1, school, fromyear2, toyear2, qualification2, description2 } = personData

    const [collegeError, setcollegeError] = useState("")
    const validateCollege = () => {
        if (college) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(college)) {
                setcollegeError("");
                return true;
            }
            else {
                setcollegeError("Enter valid college name");
            }
        }
        else {
            setcollegeError("College Name Required");
        }
        return false;
    };
    const [fromyearError, setfromyearError] = useState("")
    const validateFromYear = () => {
        if (fromyear1) {
            setfromyearError("");
            return true;
        }
        else {
            setfromyearError("Year of Joining required");
        }
        return false;
    };
    const [toyearError, settoyearError] = useState("")
    const validatetoYear = () => {
        if (toyear1) {
            settoyearError("");
            return true;
        }
        else {
            settoyearError("Year of Completion required");
        }
        return false;
    };
    const [fromyearError2, setfromyearError2] = useState("")
    const validateFromYear2 = () => {
        if (fromyear2) {
            setfromyearError2("");
            return true;
        }
        else {
            setfromyearError2("Year of Joining required");
        }
        return false;
    };
    const [toyearError2, settoyearError2] = useState("")
    const validatetoYear2 = () => {
        if (toyear2) {
            settoyearError2("");
            return true;
        }
        else {
            settoyearError2("Year of Completion required");
        }
        return false;
    };

    const [schoolError, setschoolError] = useState("")
    const validateSchool = () => {
        if (school) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(school)) {
                setschoolError("");
                return true;
            }
            else {
                setschoolError("Enter valid School name");
            }
        }
        else {
            setschoolError("School Name Required");
        }
        return false;
    };

    const [qualificationError, setqualificationError] = useState("")
    const validateQualification = () => {
        if (qualification2 || qualification1) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(qualification1)) {
                setqualificationError("");
                return true;
            }
            else {
                setqualificationError("Enter valid Qualification");
            }
        }
        else {
            setqualificationError("Qualification required");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (description2 || description1) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(description1)) {
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

    let goToProj = () => {
        validateCollege()
        validateQualification()
        validationDescription()
        validateSchool()
        validateFromYear()
        validatetoYear()
        validateFromYear2()
        validatetoYear2()
        if (validateCollege() && validateFromYear() && validatetoYear() && validateQualification() && validationDescription() && validateSchool() && validateFromYear2() && validatetoYear2())
            props.history.push('/ProjectsDeveloped')
    }
    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Education Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' type="text" name='college' value={college} onChange={(e) => handleChange(e)} placeholder="College/University*" />
                                    <i className="bi bi-bank2 input-group-addon mt-2"></i>
                                </span>
                                {collegeError && <div className="errormsg">{collegeError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="date" name='fromyear1' value={fromyear1} onChange={(e) => handleChange(e)} placeholder="Year of Joining" />
                                </span>
                                {fromyearError && <div className="errormsg">{fromyearError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="date" name='toyear1' value={toyear1} onChange={(e) => handleChange(e)} placeholder="Year of Completion" />
                                </span>
                                {toyearError && <div className="errormsg">{toyearError}</div>}
                            </Form.Group>
                            <br />
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className='col-md-4' style={{ width: "32.3%" }} >
                                <Form.Control type="text" name='qualification1' value={qualification1} onChange={(e) => handleChange(e)} placeholder="Qualification *" />
                                {qualificationError && <div className="errormsg">{qualificationError}</div>}
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8 s-8'>
                                <Form.Control type="text" name='description1' value={description1} onChange={(e) => handleChange(e)} placeholder="Description *" />
                                {descError && <div className="errormsg">{descError}</div>}
                            </Form.Group>
                        </Row>
                        <hr />
                        <Row className='mb-3 mt-4'>
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control className='' name='school' value={school} onChange={(e) => handleChange(e)} type="text" placeholder="School*" />
                                    <i className="bi bi-bank2 input-group-addon mt-2"></i>
                                </span>
                                {schoolError && <div className="errormsg">{schoolError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="date" name='fromyear2' value={fromyear2} onChange={(e) => handleChange(e)} placeholder="Year of Joining" />
                                </span>
                                {fromyearError2 && <div className="errormsg">{fromyearError2}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group as={Col} className="mb-3">
                                <span className="input-group ">
                                    <Form.Control type="date" name='toyear2' value={toyear2} onChange={(e) => handleChange(e)} placeholder="Year of Completion" />
                                </span>
                                {toyearError2 && <div className="errormsg">{toyearError2}</div>}
                            </Form.Group>
                            <br />
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} className='col-md-4' style={{ width: "32.3%" }}>
                                <Form.Control type="text" name='qualification2' value={qualification2} onChange={(e) => handleChange(e)} placeholder="Qualification *" />
                                {qualificationError && <div className="errormsg">{qualificationError}</div>}
                            </Form.Group>
                            <Form.Group as={Col} className='col-md-8 s-8' >
                                <Form.Control type="text" name='description2' value={description2} onChange={(e) => handleChange(e)} placeholder="Description *" />
                                {descError && <div className="errormsg">{descError}</div>}
                            </Form.Group>
                            <div className='mt-3 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                    <ArrowLeft /> Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => goToProj()}>
                                    Next<ArrowRight />
                                </Button>
                            </div>
                        </Row>

                    </Form>
                    <Card.Footer className="text-center mt-4">Page 2</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(EducationDetails)
