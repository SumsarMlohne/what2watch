import React, { Component } from 'react';
import Axios from 'axios';
import './main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import {FormControl, FormGroup, Button, Image, InputGroup} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Posters from './posters';
import Moviegallery from './moviegallery';
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
            firstMoviePoster: '',
            results: [],
            showGallery: false,
            suggestions: []
        }
    }

    getSuggestions = () => {
        Axios.get('http://www.omdbapi.com/?apikey=876cadf8&type=movie&s=' + this.searchValue.value)
            .then((Response) => {
                console.log('suggestions', Response)             
                this.setState({
                    suggestions: Response.data.Search
                })
            })
            .catch((e)=>{
                console.log(e)
            })

            
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
            firstMoviePoster: this.state.items.Poster,
            isOpen: false 
        }, () => {

        })
    }

    onShowGallery = () => {
        this.setState({
            showGallery: true
        })
    }

    handleKeyPress = (target) => {
        if(target.charCode===13){
            this.handleButtonPress()
        }
    }

    render(){

        

        const {isOpen, showGallery} = this.state;

        if(showGallery){
            return(
                <div className="movegallery">
                    <Moviegallery posterProps={this.state.items} />
                </div>
            )
        }
        else{
        return(
        <div className="Main" style={{background: '#F5F5DC'}} >
            <h1>Movie To Watch</h1>
            <Container style={{paddingTop: '3em'}}>
                <Row>
                    <Col sm={2}>
                       
                    </Col>
                    <Col sm={8}>
                        <FormGroup onSubmit={this.handleButtonPress}>
                            <InputGroup className="mb-3">
                            <FormControl type="text"  ref={input => this.searchValue = input} placeholder="Ex. Star Wars" id="search" onChange={this.getSuggestions} onKeyPress={this.handleKeyPress} ></FormControl> 
                            <br />   
                            <InputGroup.Append>
                                <Button type="button" block variant="dark"  onClick={this.handleButtonPress} >Search</Button>
                            </InputGroup.Append>
                            
                        </InputGroup>
                            {/*Gets suggestions from the database and displays in a list under the search bar */}
                            <Suggestions listOfSuggestions={this.state.suggestions} />

                            <Button type="button" block variant="info" style={{marginTop: '1em', marginBottom: '1em'}} onClick={this.onOpenModal}>
                             Show Current Search
                            </Button>
                            <Button type="button" block variant="info" onClick={this.onShowGallery}>Show your gallery</Button>                
                        </FormGroup>
                        <h1>Related titles to "{this.state.items.Title}"</h1>
                       
                            <Posters results={this.state.results}></Posters>
                        
                        <br />
                    </Col>
                    <Col sm={2}>                                           
                                              
                    </Col>
                </Row>
            </Container>

      <Modal show={isOpen} onHide={this.onCloseModal} size="lg">
        <Modal.Header closeButton style={{background: '#b41b1b'}}>
          <Modal.Title>{this.state.items.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: '#F5F5DC'}}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <p>Released: {this.state.items.Released}</p>
                        <p>Runtime: {this.state.items.Runtime}</p>
                        <p>Genre(s): {this.state.items.Genre}</p>
                        <p>Metascore: {this.state.items.Metascore}</p>
                        <p>Director: {this.state.items.Director}</p>
                        <p>Story: <br /> {this.state.items.Plot}</p>
                    </Col>
                    <Col sm={6}>
                        <Image className="d-block w-80 text-center" src={this.state.items.Poster} rounded style={{margin: 'auto'}}></Image>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer style={{background: '#b41b1b'}}>
            
            <Button variant="info" size="lg" id="btn" block onClick={this.onSaveMovie}>Save To Gallery</Button>
           
        </Modal.Footer>
      </Modal>
            
    </div>
        )
        }
    }
}

export default Main;