import React from 'react';
import './main.css';
import { ListGroup, Image, Carousel } from 'react-bootstrap';


const Suggestions = (props) => {
    const options = props.results.map(r => (
        <Carousel.Item style={{ color: 'black'}} variant="dark"  key={r.imdbID} >
            <Image className="d-block w-80 text-center" src={r.Poster} rounded style={{margin: 'auto'}}></Image>
        </Carousel.Item>   
    ))
    return <Carousel controls={false}>{options}</Carousel>
}




export default Suggestions;