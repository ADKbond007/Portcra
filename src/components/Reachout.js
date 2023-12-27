import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../scss/reachout.scss";
const Reachout = () => {
    const [userInput, setUserInput] = useState({
        useremail: "",
        usersubject: "",
        usertext: ""
    });
    const [checkInvalid, setCheckInvalid] = useState({
        invalidemail: false,
        invalidsubject: false,
        invalidtext: false
    });
    const handleText = (e) => {
        setUserInput({ ...userInput, usertext: e.target.value });
        if (e.target.value.length > 10) {
            setCheckInvalid({ ...checkInvalid, invalidtext: true });
        }
        else {
            setCheckInvalid({ ...checkInvalid, invalidtext: false });
        }
    };
    console.log(userInput, checkInvalid);
    const handleSubmit = (e) => {
        let isFormValid = true;
        if (userInput.useremail === "") {
            isFormValid = false;
            setCheckInvalid({ ...checkInvalid, invalidemail: true });
        }
        else {
            let r = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            let testEmail = r.test(userInput.useremail);
            if (!testEmail) {
                isFormValid = false;
                setCheckInvalid({ ...checkInvalid, invalidemail: true });
            }
            else {
                setCheckInvalid({ ...checkInvalid, invalidemail: false });
            }
        }
        if (userInput.usersubject.length < 5) {
            isFormValid = false;
            setCheckInvalid({ ...checkInvalid, invalidsubject: true });
        }
        else {
            setCheckInvalid({ ...checkInvalid, invalidsubject: false });
        }
        if (userInput.usertext.length < 10) {
            isFormValid = false;
            setCheckInvalid({ ...checkInvalid, invalidtext: true });
        }
        else {
            setCheckInvalid({ ...checkInvalid, invalidtext: false });
        }
        isFormValid && console.log("YESSIRRRR");
    };
    // console.log(userInput && userInput);
    return (
        <div className='reach-cont'>
            <div className='reach-form'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
                        <Form.Label className="reach-form-label">Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email address" onChange={(e) => setUserInput({ ...userInput, useremail: e.target.value })} isInvalid={checkInvalid["invalidemail"]} />
                        <Form.Control.Feedback type="invalid" tooltip={false}>Enter Valid Email Adress</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
                        <Form.Label className="reach-form-label">Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" onChange={(e) => setUserInput({ ...userInput, usersubject: e.target.value })} isInvalid={checkInvalid["invalidsubject"]} />
                        <Form.Control.Feedback type="invalid" tooltip={false}>Email subject is too small</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="reach-form-label">Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setUserInput({ ...userInput, usertext: e.target.value })} placeholder='Enter email body' isInvalid={checkInvalid["invalidtext"]} />
                        <Form.Control.Feedback type="invalid" tooltip={false}>Email body is too small</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit} className='button-form-submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Reachout;