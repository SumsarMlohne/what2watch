import React, {  } from 'react';
import './main.css';
import {ListGroup} from 'react-bootstrap';

const Suggestions = (props) => {
    try { 
        console.log('list of suggestions',props.listOfSuggestions)
        const suggestions = props.listOfSuggestions.map(item => (
            <ListGroup.Item action variant="secondary" key={item.imdbID}>
               <p>{item.Title}</p>
            </ListGroup.Item>
        ))
        
        return <ListGroup>{suggestions}</ListGroup>                           
    } catch (error) {
        console.log(error)
        console.log(props.listOfSuggestions)
        return null;
    }
}

export default Suggestions;