import React, { useState } from 'react';
import './main.css';
import { Image, Row, Col, Button } from 'react-bootstrap';
import GModal from './galleryModal';

const GGPoster = (props) => {
    const [hideInfo, setInfo] = useState(true);
    console.log("Galleryposter", props.galleryPoster);
    const galleryItem = 
            <Col sm={4}>
                <Image className="d-block w-80 text-center" id="galleryposter" src={props.galleryPoster.Poster} rounded style={{margin: 'auto'}} onClick={() => setInfo(false)}></Image>
            </Col>

    if(!hideInfo){
        return <div className="modalinfo">
                    <GModal modalInfo={props.galleryPoster} />
                    <Button type="button" block variant="primary" size="lg" onClick={() => setInfo(true)}>Back to Gallery</Button>
                </div>
    }
    else{
        return <Row>{galleryItem}</Row>
    }
}




export default GGPoster;