import React, { Component } from 'react';
import Axios from 'axios';
import './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import {FormControl, FormGroup, Button, ListGroup, Carousel} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Suggestions from './suggestions';



class Main extends Component{
    
    api_key = "876cadf8";

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            searchValue: '',
            isOpen: false,
            firstMovieTitle: '',
            firstMovieRelease: '',
            firstMovieGenre: '',
            SecondMovieTitle: '',
            SecondMovieRelease: '',
            SecondMovieGenre: '',
            ThirdMovieTitle: '',
            ThirdMovieRelease: '',
            ThirdMovieGenre: '',
            results: [],
        }
    }

    

    getMovie = () => {
        Axios.get('http://www.omdbapi.com/?apikey=876cadf8&s=' + this.searchValue.value)
            .then((Response) => {
                console.log(Response)             
                this.setState({
                    isLoaded: true,
                    title: Response.data.Title,
                    isOpen:true,
                    results: Response.data.Search
                })
            })
    }
    
    getFirstMovie = () => {
        Axios.get('http://www.omdbapi.com/?apikey=876cadf8&t=' + this.searchValue.value)
            .then((Response) => {
                this.setState({
                    items: Response.data
                })
            })
    }

    handleButtonPress = () => {
        this.setState({
            searchValue: this.searchValue.value,
            
        }, () => {
            if(this.state.searchValue !== ''){
                this.getMovie()
                this.getFirstMovie()
            }
        })
    }
    
    onCloseModal = () => {
        this.setState({isOpen: false})
    }

    onOpenModal = () => {
        this.setState({isOpen: true})
    }

    onSaveMovie = () => {
        this.setState({
            firstMovieTitle: this.state.items.Title,
            firstMovieRelease: this.state.items.Released,
            firstMovieGenre: this.state.items.Genre,
            isOpen: false 
        }, () => {
        })
    }
    onSaveSecondM = () => {
        this.setState({
            SecondMovieTitle: this.state.items.Title,
            SecondMovieRelease: this.state.items.Released,
            SecondMovieGenre: this.state.items.Genre,
            isOpen: false
        })
    }
    onSaveThirdM = () => {
        this.setState({
            ThirdMovieTitle: this.state.items.Title,
            ThirdMovieRelease: this.state.items.Released,
            ThirdMovieGenre: this.state.items.Genre,
            isOpen: false
        })
    }



    render(){

        

        const {isOpen} = this.state;
    
        return(
        <div className="Main" style={{background: '#F5F5DC'}} >

            <h1>Movie To Watch</h1>
            <Container style={{paddingTop: '3em'}}>
                <Row>
                    <Col sm={4}>
                        <Card style={{background: '#b41b1b', color: 'white'}}>
                            <Card.Body>
                                <Card.Title>First Movie</Card.Title>
                                <Card.Text>Title: {this.state.firstMovieTitle}</Card.Text>
                                <Card.Text>Release: {this.state.firstMovieRelease}</Card.Text>
                                <Card.Text>Genre: {this.state.firstMovieGenre}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <FormGroup onSubmit={this.handleButtonPress}>
                            <FormControl type="text"  ref={input => this.searchValue = input} placeholder="Ex. Star Wars" id="search" ></FormControl> 
                            <br />     
                                                      
                        </FormGroup>
                        <h1>Related titles to "{this.state.items.Title}"</h1>
                        <Carousel controls={false}>
                            <Suggestions results={this.state.results}></Suggestions>
                        </Carousel>  
                        <br />
                    </Col>
                    <Col sm={2}>
                        <Button type="button" block variant="info" style={{marginTop: '1em'}} onClick={this.handleButtonPress} >Search</Button>
                        <Button type="button" block variant="info" style={{marginTop: '1em', marginBottom: '1em'}} onClick={this.onOpenModal}>
                             Show Movie
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                    <Card style={{background: '#b41b1b', color: 'white'}}>
                            <Card.Body>
                                <Card.Title>Second Movie</Card.Title>
                                <Card.Text>Title: {this.state.SecondMovieTitle}</Card.Text>
                                <Card.Text>Release: {this.state.SecondMovieRelease}</Card.Text>
                                <Card.Text>Genre: {this.state.SecondMovieGenre}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>

                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card style={{background: '#b41b1b', color: 'white'}}>
                            <Card.Body>
                                <Card.Title>Third Movie</Card.Title>
                                <Card.Text>Title: {this.state.ThirdMovieTitle}</Card.Text>
                                <Card.Text>Release: {this.state.ThirdMovieRelease}</Card.Text>
                                <Card.Text>Genre: {this.state.ThirdMovieGenre}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

      <Modal show={isOpen} onHide={this.onCloseModal}>
        <Modal.Header closeButton style={{background: '#b41b1b'}}>
          <Modal.Title>{this.state.items.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: '#F5F5DC'}}>
            <p>Released: {this.state.items.Released}</p>
            <p>Runtime: {this.state.items.Runtime}</p>
            <p>Genre(s): {this.state.items.Genre}</p>
            <p>Metascore: {this.state.items.Metascore}</p>
            <p>Director: {this.state.items.Director}</p>
        </Modal.Body>
        <Modal.Footer style={{background: '#b41b1b'}}>
            <Button variant="info" size="sm" id="btn" onClick={this.onSaveMovie}>Save First Movie</Button>
            <Button variant="info" size="sm" onClick={this.onSaveSecondM}>Save Second Movie</Button>
            <Button variant="info" size="sm" onClick={this.onSaveThirdM}>Save Third Movie</Button>
        </Modal.Footer>
      </Modal>
            
    </div>
        )
    }
}

export default Main;