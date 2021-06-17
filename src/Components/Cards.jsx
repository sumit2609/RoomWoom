import React from 'react';
import './Cards.css';

import {Button, Card} from 'react-bootstrap'

const Cards = () => {
    return (
        <div>
            <Card  className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-living-rooms-bungalow-etna-nook-029-1608661123.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default Cards;
