import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../scss/reachout.scss";
// import { Email } from "../utils/Smtpconfig";
const Reachout = () => {
  const [userInput, setUserInput] = useState({
    useremail: "",
    usersubject: "",
    usertext: "",
  });
  const [checkInvalid, setCheckInvalid] = useState({
    invalidemail: false,
    invalidsubject: false,
    invalidtext: false,
  });
  const handleText = (e) => {
    setUserInput({ ...userInput, usertext: e.target.value });
    if (e.target.value.length > 10) {
      setCheckInvalid({ ...checkInvalid, invalidtext: true });
    } else {
      setCheckInvalid({ ...checkInvalid, invalidtext: false });
    }
  };
  // console.log(userInput, checkInvalid);
  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;
    let invalidObj = {
      invalidemail: false,
      invalidsubject: false,
      invalidtext: false,
    };
    if (userInput.useremail === "") {
      isFormValid = false;
      invalidObj = { ...invalidObj, invalidemail: true };
    } else {
      let r = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      let testEmail = r.test(userInput.useremail);
      if (!testEmail) {
        isFormValid = false;
        invalidObj = { ...invalidObj, invalidemail: true };
      } else {
        invalidObj = { ...invalidObj, invalidemail: false };
      }
    }
    if (userInput.usersubject.length < 5) {
      isFormValid = false;
      invalidObj = { ...invalidObj, invalidsubject: true };
    } else {
      invalidObj = { ...invalidObj, invalidsubject: false };
    }
    if (userInput.usertext.length < 10) {
      isFormValid = false;
      invalidObj = { ...invalidObj, invalidtext: true };
    } else {
      invalidObj = { ...invalidObj, invalidtext: false };
    }
    setCheckInvalid({
      invalidemail: invalidObj.invalidemail,
      invalidsubject: invalidObj.invalidsubject,
      invalidtext: invalidObj.invalidtext,
    });
    if (isFormValid) {
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abhishek14kumar98@gmail.com",
        Password: "4D6FDC1D173273DAAFD7738573E0A8E3361E",
        To: "abhishekdkinghasrisen@gmail.com",
        From: "abhishek14kumar98@gmail.com",
        Subject: userInput.usersubject,
        Body: userInput.usertext,
      })
        .then(function (message) {
          alert("mail sent successfully -", message);
          //   console.log(message);
        })
        .catch((err) => console.log("Failed to send email -", err));
    }
  };
  // console.log(userInput && userInput);
  return (
    <div className="reach-cont">
      <div className="reach-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
            <Form.Label className="reach-form-label">Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email address"
              onChange={(e) =>
                setUserInput({ ...userInput, useremail: e.target.value })
              }
              isInvalid={checkInvalid["invalidemail"]}
            />
            <Form.Control.Feedback type="invalid" tooltip={false}>
              Enter Valid Email Adress
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" size="sm">
            <Form.Label className="reach-form-label">Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject"
              onChange={(e) =>
                setUserInput({ ...userInput, usersubject: e.target.value })
              }
              isInvalid={checkInvalid["invalidsubject"]}
            />
            <Form.Control.Feedback type="invalid" tooltip={false}>
              Email subject is too small
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="reach-form-label">Email Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) =>
                setUserInput({ ...userInput, usertext: e.target.value })
              }
              placeholder="Enter email body"
              isInvalid={checkInvalid["invalidtext"]}
            />
            <Form.Control.Feedback type="invalid" tooltip={false}>
              Email body is too small
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            className="button-form-submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reachout;
