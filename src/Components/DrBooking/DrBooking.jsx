import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doccard from '../Doccard/Doccard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function DrBooking() {
  const [alldoc,setAlldoc] = useState([])
   
  const fetchData = async()=>{

    const response = await axios.get('http://localhost:3001/doctors')
   
    setAlldoc(response.data)
    console.log(alldoc);
  } 
  useEffect(()=>{
    fetchData()
},[])
  return (
    <div>
      <Container>
        <Row>
          <Col md={12} lg={12}>

          </Col>
        </Row>
      <Row>
      {alldoc.map((item)=>(
       <Col  md={12} lg={3} >
       <Doccard doctors = {item}/>
       </Col>
      )
      
      )}
      </Row>
      </Container>
    </div>
  )
}

export default DrBooking