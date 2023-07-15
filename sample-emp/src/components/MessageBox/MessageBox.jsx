import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
const MessageBox = () => {
const [messages, setMessages] = useState([]);
const handleMessageSubmit = (e) =>{
    e.preventDefault();
    setMessages((prevMessages)=>[...prevMessages, e.target.message.value]);
    e.target.message.value = "";
}
const handleChange = (e) => {
    setMessages({ ...messages, [e.target.name]: e.target.value });
}
const messagePost = () => {
    axios.post("http://localhost:8080/api/submitForm");
    
    return(
    <div>
        <h1>Message Box</h1>
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
        <form onSubmit={handleMessageSubmit}>
            <input type="text" name="message" onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    </div>
);
            };
        }
export default MessageBox;