import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import './View.css'
import DrTiming from '../DrTiming/DrTiming'



function View() {
    // const pathParameter = useParams()
    // console.log(pathParameter);
    const [docDetails,setDocDetails] = useState({})
const {id} = useParams()
const fetchData = async ()=> {
    const {data} = await axios.get(`https://dr-server.onrender.com/doctors/${id}`)
    
    setDocDetails(data)
   
}
console.log(docDetails);
useEffect( ()=>{
    fetchData();
},[])
console.log(docDetails.available_hours);

  return (
    <div>
        <Container className='constinerr'>
            <Row>
                <Col md={12} lg={4}></Col>
                <Col md={12} lg={4} className='cards' >
                <ListGroup className='cards'>
                    <ListGroup.Item className='bg-primary'><h3>{docDetails.name}</h3></ListGroup.Item>
                    <ListGroup.Item> <b>Hospital: </b>{docDetails.hospital} </ListGroup.Item>
                    <ListGroup.Item ><b>Specialized:  </b>{docDetails.specialty}</ListGroup.Item>
                    <ListGroup.Item><b>Address:  </b>{docDetails.address}</ListGroup.Item>
                    <ListGroup.Item ><b>Contact:  </b>{docDetails.phone}</ListGroup.Item>
                    <ListGroup.Item ><b>Email:  </b>{docDetails.email}</ListGroup.Item>
                    <ListGroup.Item ><DrTiming doctor_timing = {docDetails.available_hours} doctors_available = {docDetails.available_days} /></ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md={12} lg={4}></Col>
            </Row>
        </Container>
    </div>
  )
}

export default View
