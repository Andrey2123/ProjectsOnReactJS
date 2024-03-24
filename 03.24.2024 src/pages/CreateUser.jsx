import { useState } from "react";
import React from "react";
import Users from "./Users";

export default function CreateUser() {
    let [name, setName] = useState();
    let [username, setUsername] = useState();
    let [email, setEmail] = useState();
    let [street, setStreet] = useState();
    let [city, setCity] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const buffer = [name, username, email, street, city];
        Users(buffer);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleStreetChange = (event) => {
        setStreet(event.target.value);
    }
    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
    return(
        <>
            <h1>CreateUser:</h1><br/>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={handleNameChange} name="Name" /><br/>
                <label>UserName</label>
                <input type="text" value={username} onChange={handleUsernameChange} name="UserName" /><br/>
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmailChange} name="Email" /><br/>
                <label>Street</label>
                <input type="text" value={street} onChange={handleStreetChange} name="Street" /><br/>
                <label>City</label>
                <input type="text" value={city} onChange={handleCityChange} name="City" /><br/>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}