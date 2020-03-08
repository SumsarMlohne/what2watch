import React, {useState} from 'react';
import './main.css';
import { ListGroup, Image, Carousel, Modal, Container, Row, Col } from 'react-bootstrap';


const GModal = (props) => {
    
    const posterModal = 
            
                    <Row>
                        <Col sm={2}>
                            <h2>Title: </h2>
                            <h2>Genre: </h2>
                            <h2>Runtime: </h2>
                            <h2>Metascore: </h2>
                            <h2>Story: </h2>
                        </Col>
                        <Col sm={10}>
                            <h3>{props.modalInfo.Title}</h3>
                            <h3>{props.modalInfo.Genre}</h3>
                            <h3>{props.modalInfo.Runtime}</h3>
                            <h3>{props.modalInfo.Metascore}</h3>
                            <h3>{props.modalInfo.Plot}</h3>
                        </Col>
                    </Row>
                
    
    return <Container>{posterModal}</Container>
}


export default GModal;