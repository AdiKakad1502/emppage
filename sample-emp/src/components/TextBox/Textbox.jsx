import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FormGroup, FormControl, FormLabel,  Button } from 'react-bootstrap';
import './Textbox.css';

const TextBox = ({ onSubmit }) => {
    const [reviewData, setreviewData] = useState({
        name: '',
        review: ''
    });

    const handleChange = (e) => {
        setreviewData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Send the form data to the backend
            const response =  axios.post('http://localhost:8080/api/submitReview', reviewData);
            console.log(response.data); // Response from the backend

            // Reset the form after successful submission
            setreviewData({
                name: '',
                review: ''
            });
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-center">Submit an Essay</h2>
            <FormGroup controlId="essay">
                <FormLabel>Name</FormLabel>
                <FormControl type='text' value={reviewData.name} placeholder='Enter your name' onChange={handleChange} required />
                <FormLabel>Essay</FormLabel>
                <FormControl
                    type="text"
                    value={reviewData.review}
                    placeholder="Enter your essay here"
                    onChange={handleChange}
                    rows="10"
                    required
                />
            </FormGroup>
            <Button variant="primary" type="submit">Submit</Button>
        </form>
    );
};

export default TextBox;
