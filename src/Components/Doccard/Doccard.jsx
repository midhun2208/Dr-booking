import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './Doccard.css'
import { Link } from 'react-router-dom';


function Doccard({doctors}) {
    console.log(doctors);
  return (
    <div>
    <Card  style={{ width: '100%' }} className='cards'>
      <Card.Body>
        <Card.Title>{doctors.name}</Card.Title>

      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <b>Specialty</b>: {doctors.specialty} </ListGroup.Item>
        <ListGroup.Item><b>Hospital</b>: {doctors.hospital}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/view/${doctors.id}`}>
        <button className='btn btn-primary'>More</button>
       </Link>
       
      </Card.Body>
    </Card>

    </div>
  )
}

export default Doccard