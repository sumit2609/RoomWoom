import React, { useState } from 'react';
import Axios from 'axios';

import {Form, Button, Container} from 'react-bootstrap'

const PostProperty = () => {
    const url = "http://localhost:5000/postproperty";
    const [data,setData] = useState({
        name: "",
        image: "",
        location: "",
        description: ""
    });

    const submit = (e) =>{
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            image: data.image,
            location: data.location,
            description: data.description
        }).then(res => {
            console.log(res.data)
        }).catch(error => console.log(error));
    }

    const handleChange = (e) =>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            <Container>
                <Form onSubmit={(e)=>submit(e)}> 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=>handleChange(e)} value={data.name} id="name" placeholder="Enter Property Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>image</Form.Label>
                        <Form.Control type="text" onChange={(e)=>handleChange(e)} value={data.image} id="image" placeholder="Entry image url" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" onChange={(e)=>handleChange(e)} value={data.location} id="location" placeholder="Entry Property Location" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" onChange={(e)=>handleChange(e)} value={data.description} id="description" placeholder="Entry Property Description" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Post
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default PostProperty;
