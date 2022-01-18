import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './form.css'
import { Button, Card, Form, Row } from 'react-bootstrap';
import { ArrowRight, } from 'react-bootstrap-icons';
import { ArrowLeft, } from 'react-bootstrap-icons';

function ProjectsDeveloped(props) {
    const {personData,handleChange}=props
    const{ title1,link1,projectDescription1,title2, link2,projectDescription2}=personData

    const [titleError, settitleError] = useState("")
    const validateTitle = () => {
        if (title1) {
            settitleError("");
            return true;
        }
        else {
            settitleError("Title required");
        }
        return false;
    };

    const [linkError, setlinkError] = useState("")
    const validateLink = () => {
        if (title1) {
            setlinkError("");
            return true;
        }
        else {
            setlinkError("Link required");
        }
        return false;
    };

    const [descError, setdescError] = useState("")
    const validationDescription = () => {
        if (projectDescription2 || projectDescription1) {
            let regex = /^[a-zA-Z ]{2,30}$/;
            if (regex.test(projectDescription1)) {
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

    let goToExp=()=>{
        validateTitle()
        validationDescription()
        validateLink()
        if(validateTitle()&&validateLink()&&validationDescription()){
            props.history.push('/ExperienceDetails')
        }
       
    }


    return (
        <div>
            <Card className='container mt-3' style={{ padding: " 10px 80px" }}>
                <Card.Body>
                    <Card.Title>Projects Developed</Card.Title>
                    <hr></hr>
                    <Form>
                        <Row className="mb-3">
                            <h3>Project 1</h3>
                            <Form.Group className="mb-3" >
                                <span className="input-group ">
                                    <Form.Control type="text"  name='title1' value={title1} onChange={(e)=>handleChange(e)} placeholder="Title * " />
                                    <i className="bi bi-align-top input-group-addon mt-2"></i>
                                </span>
                                {titleError && <div className="errormsg">{titleError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" >
                            <span className="input-group ">
                            <Form.Control type="text"  name='link1' value={link1} onChange={(e)=>handleChange(e)} placeholder="Link* " />
                                    <i className="bi bi-link input-group-addon mt-2"></i>
                                </span>
                                {linkError && <div className="errormsg">{linkError}</div>}
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                            <span className="input-group ">
                            <Form.Control type="text"  name='projectDescription1' value={projectDescription1} onChange={(e)=>handleChange(e)} placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                                {descError && <div className="errormsg">{descError}</div>}
                            </Form.Group>
                            <br />
                            <hr />
                            <h3>Project 2</h3>
                            <Form.Group className="mb-3" >
                                <span className="input-group ">
                                    <Form.Control type="text"  name='title2' value={title2} onChange={(e)=>handleChange(e)} placeholder="Title * " />
                                    <i className="bi bi-align-top input-group-addon mt-2"></i>
                                </span>

                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" >
                            <span className="input-group ">
                            <Form.Control type="text"  name='link2' value={link2} onChange={(e)=>handleChange(e)} placeholder="Link* " />
                                    <i className="bi bi-link input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-4" >
                            <span className="input-group ">
                            <Form.Control type="text"  name='projectDescription2' value={projectDescription2} onChange={(e)=>handleChange(e)} placeholder="Description* " />
                                    <i className="bi bi-file-earmark-text-fill input-group-addon mt-2"></i>
                                </span>
                            </Form.Group>
                            <br />
                            <div className='mt-1 buttons' >
                                <Button md={12} className='me-3 mt-1 btn-danger ' onClick={() => props.history.goBack()}>
                                <ArrowLeft/>  Back
                                </Button>
                                <Button md={12} className='ms-3 mt-1 btn-danger ' onClick={() => goToExp()}>
                                    Next<ArrowRight/>
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <Card.Footer className="text-center mt-4">Page 3</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

export default withRouter(ProjectsDeveloped)
