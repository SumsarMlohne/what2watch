import React, { Component, useState } from 'react';
import Main from './main';
import { Button, Container, Row, Col, Image, Modal } from 'react-bootstrap';
import GenerateGalleryPoster from './generateGalleryPoster';
import './main.css';

class Moviegallery extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            goBack: false,
           
        }
    }
    

    gotoMain = () => {
        this.setState({
            goBack: true,
            
        })
    }
   
   
    
    render(){

        const {goBack, toGallery} = this.state;

        if(!goBack){

            return(
                <div className="moviegallery">
                    <h1>Your Gallery</h1>
                    <Container>
                        <GenerateGalleryPoster galleryPoster={this.props.posterProps} />
                    </Container>
                    <br />
                    <Container>
                        <Row>
                            <Col sm={4}>

                            </Col>
                            <Col sm={4}>
                                <Button type="button" block variant="danger" size="lg" onClick={this.gotoMain}>Back to Search</Button>
                            </Col>
                            <Col sm={4}>
                                
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
            )

        }
   

        else{
            return(
                <div className="main">
                    <Main />
                </div>
            )
        }


    }
}
export default Moviegallery;