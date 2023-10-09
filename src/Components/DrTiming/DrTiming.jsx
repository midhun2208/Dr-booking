import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function DrTiming({doctors_available,doctor_timing}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log({doctors_available},{doctor_timing});

  return (
    <div>
          <Button variant="primary" onClick={handleShow} className='btn btn-success' style={{borderRadius:'8px'}}>
              Timing
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Avaliability</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <ListGroup className='cards'>
                    <ListGroup.Item> <b>Day 1: </b> {doctors_available?.[0]}</ListGroup.Item>
                    <ListGroup.Item ><b>Day 2: </b>{doctors_available?.[1]} </ListGroup.Item>
                    <ListGroup.Item><b>Day 3: </b>{doctors_available?.[2]}</ListGroup.Item>
                    <ListGroup.Item> <h4 className='text-success '><b>Timing From : </b>{doctor_timing}</h4> </ListGroup.Item>
                </ListGroup>
              </Modal.Body>
              <Modal.Footer>
                   
                  <Button variant="secondary" onClick={handleClose} className='btn btn-danger'>
                      Close
                  </Button>

              </Modal.Footer>
          </Modal>
    </div>
  )
}

export default DrTiming