import React from "react";
import { Modal } from 'react-bootstrap';

const SuccessMessage = (props) => {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Modal.Title>Thank You for Registering!</Modal.Title>
        <p>
          Look for an email within the next 48 hours with account verification information. If you need to speak with an account manager in the meantime, call 800-xxx-xxx.
        </p>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default SuccessMessage;