import React from 'react'
import './PropertyCard.css';
import {Container, Row, Col} from 'react-bootstrap';
import Cards from './Cards';

const PropertyCard = () => {
    return (
        <div>
            <Container className="propertyCard">
                <Row>
                    <Col>
                        <Cards />
                    </Col>
                    <Col>
                        <Cards />
                    </Col>
                    <Col>
                        <Cards />
                    </Col>
                </Row>
                

            </Container>
        </div>
    )
}

export default PropertyCard;
