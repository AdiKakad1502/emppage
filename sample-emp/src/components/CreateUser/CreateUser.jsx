import React from "react";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';

function CreateUser() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        department: '',
        role: '',
        description: '',
        photo: '',
        joiningDate: '',
        mailId: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send the form data to the backend
            const response = await axios.post('http://localhost:8080/api/submitForm', formData);
            console.log(response.data); // Response from the backend

            // Reset the form after successful submission
            setFormData({
                name: '',
                gender: '',
                department: '',
                role: '',
                description: '',
                photo: '',
                joiningDate: '',
                mailId: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        as="select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        type="text"
                        name="role"
                        placeholder="Enter role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formJoiningDate">
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formMailId">
                    <Form.Label>Mail ID</Form.Label>
                    <Form.Control
                        type="email"
                        name="mailId"
                        placeholder="Enter mail ID"
                        value={formData.mailId}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" type="reset">
                    Reset
                </Button>
            </Form>
        </div>


    );
}

export default CreateUser;



