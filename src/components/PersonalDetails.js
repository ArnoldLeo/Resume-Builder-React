import React, { useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './form.css'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { ArrowRight,ArrowLeft } from 'react-bootstrap-icons';

function PersonalDetails(props) {
    const {personData,handleChange}=props
    const{ firstName,lastName,email,phone, website,github,linkedin,facebook,instagram,twitter}=personData

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState("");

    let validateFirstName = () => {
        if (firstName) {
            let regex = /^[a-zA-Z]{2,30}$/;
            if (regex.test(firstName)) {
                setFirstNameError("")
                return true;
            } else {
                setFirstNameError("*Enter valid first name, only characters allowed")
            }
    
        } else {
            setFirstNameError('*First Name Required')
        }
        return false;
    }

    let validateLastName = () => {
        if (lastName) {
            let regex = /^[a-zA-Z]{2,30}$/;
            if (regex.test(lastName)) {
                setLastNameError("")
                return true;
            } else {
                setLastNameError("*Enter valid last name, only characters allowed")
            }
    
        } else {
            setLastNameError('*Last Name Required')
        }
        return false;
    }

    const [phoneError, setphoneError] = useState("")
    const validatePhone = () => {
        if (phone) {
            setphoneError("");
            return true;
        }
        else {
            setphoneError("Phone number required");
        }
        return false;
    };
       //email validate
    const validateEmail = () => {
      if (email) {
        let regex = /^\S+@\S+$/;
        if (regex.test(email)) {
          setEmailError("");
          return true;
        } else {
          setEmailError("*Enter valid Email-id");
        }
      } else {
        setEmailError("*Email-id is Required");
      }
      return false;
    };

    let goToEdu = () => {
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePhone()
        if (validateFirstName() && validateLastName() && validateEmail()&&validatePhone()){
            props.history.push('/EducationDetails')
        }
        
    }

    return (
        <div style={{ padding: "20px" }}>
            <Card className='container mt-3'  style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Personal Details</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row>
                            <Col md={6} s={6}>
                                <Form.Group className="mb-3" style={{width:"97.5%"}}>
                                    <Form.Control type="text" name='firstName' onChange={(e)=>handleChange(e)} value={firstName} placeholder="First name* " />
                                    {firstNameError && <div className="errormsg">{firstNameError}</div>}
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                    <span className="input-group ">
                                        <Form.Control  name='email' onChange={(e)=>handleChange(e)} value={email} type="text" placeholder="Email*" />
                                        <i className="bi bi-envelope-fill input-group-addon mt-2"></i>
                                    </span>
                                    {emailError && <div className="errormsg">{emailError}</div>}
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='website' onChange={(e)=>handleChange(e)} value={website} placeholder="Your Website " />
                                        <i className="bi bi-globe input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='linkedin'  onChange={(e)=>handleChange(e)} value={linkedin} placeholder="LinkedIn" />
                                        <i className="bi bi-linkedin input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='facebook' onChange={(e)=>handleChange(e)} value={facebook} placeholder="Facebook" />
                                        <i className="bi bi-facebook input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                
                            </Col>

                            <Col md={6} s={6}>
                                <Form.Group className="mb-3"  style={{width:"97.5%"}}>
                                    <Form.Control type="text" name='lastName' onChange={(e)=>handleChange(e)} value={lastName} placeholder="Last name* " />
                                    {lastNameError && <div className="errormsg">{lastNameError}</div>}
                                </Form.Group>                               
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='phone' onChange={(e)=>handleChange(e)} value={phone} placeholder="Phone" />
                                        <i className="bi bi-telephone input-group-addon mt-2"></i>
                                    </span>
                                    {phoneError && <div className="errormsg">{phoneError}</div>}
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='github'onChange={(e)=>handleChange(e)} value={github} placeholder="GitHub " />
                                        <i className="bi bi-github input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='twitter'onChange={(e)=>handleChange(e)} value={twitter} placeholder="Twitter" />
                                        <i className="bi bi-twitter input-group-addon mt-2"></i>
                                    </span>
                                </Form.Group>
                                <br />
                                <Form.Group className="mb-3">
                                <span className="input-group ">
                                <Form.Control type="text" name='instagram' onChange={(e)=>handleChange(e)} value={instagram} placeholder="Instagram" />
                                        <i className="bi bi-instagram input-group-addon mt-2"></i>
                                    </span>
                                    
                                </Form.Group>
                                <br />
                                
                            </Col>
                            <div className='mt-3 buttons' style={{left:'40%'}}>
                            <Button className='me-4 btn-danger disabled' onClick={() => props.history.goBack()}>
                                   <ArrowLeft/> Back
                                </Button>
                                <Button className='ms-3 btn-danger' onClick={() => goToEdu()}>
                                    Next<ArrowRight/>
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 1</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(PersonalDetails)

