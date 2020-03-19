import React, { Component } from 'react';
import Main from './main';
import { Button, Container, Row, Col } from 'react-bootstrap';
import GenerateGalleryPoster from './generateGalleryPoster';
import './main.css';

const movieObjectArray = [];

class Moviegallery extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            goBack: false,
            objArrEmpty: true
        }
    }
    
    
    gotoMain = () => {
        this.setState({
            goBack: true,
            
        })
    }

    onSaveGallery = () => {
        this.setState({
            objArrEmpty: false
        })
            movieObjectArray.push(<GenerateGalleryPoster galleryPoster={this.props.posterProps} />);
        
    }
   
    
    render(){

        
        const {goBack, objArrEmpty} = this.state;

        if(!goBack && objArrEmpty){

            return(
                <div className="moviegallery" style={{background: '#F5F5DC'}}>
                    <h1>Your Gallery</h1>
                    
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <Button type="button" block variant="danger" size="lg" onClick={this.gotoMain}>Back to Search</Button>                               
                            </Col>
                            <Col sm={4}>
                                <Button type="button" block variant="primary" size="lg" onClick={this.onSaveGallery}>Load Gallery</Button>   
                            </Col>
                            <Col sm={4}>
                                <Button type="button" block variant="success" size="lg" onClick={this.onSaveGallery}>Save Gallery</Button>
                            </Col>
                        </Row>
                    </Container>
                    
                    <br />
                    <Container>
                        <Row>
                            <GenerateGalleryPoster galleryPoster={this.props.posterProps} />
                        </Row>
                    </Container>
                    
                </div>
            )

        }
        
        else if(!goBack && !objArrEmpty){
            return(
                <div className="savedMovieGallery" style={{background: '#F5F5DC'}}>
                    <h1>Your Gallery</h1>
                   
                   
                    <Container>
                        <Row>
                            <Col sm={4}>
                                <Button type="button" block variant="danger" size="lg" onClick={this.gotoMain}>Back to Search</Button>                               
                            </Col>
                            <Col sm={4}>
                                <Button type="button" block variant="primary" size="lg" onClick={this.onSaveGallery}>Load Gallery</Button>   
                            </Col>
                            <Col sm={4}>
                                <Button type="button" block variant="success" size="lg" onClick={this.onSaveGallery}>Save Gallery</Button>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container>
                        <Row>
                            {movieObjectArray}
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