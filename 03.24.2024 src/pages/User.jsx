import React, {Component} from "react";
import { useParams } from "react-router-dom";


const names = {
    s01: {
        name: 'Anton',
        username: 'Anton21',
        email: 'aontonio@com',
        city: 'Minsk',
        street: 'Moniuszki'
    },
    s02: {
        name: 'Dima',
        username: 'Anton21',
        email: 'aontonio@com',
        city: 'Minsk',
        street: 'Moniuszki'
    },
    s03: {
        name: 'Michal',
        username: 'Anton21',
        email: 'aontonio@com',
        city: 'Minsk',
        street: 'Moniuszki'
    }
}

export default function User() {
    
    const {id} = useParams();
    if(names.hasOwnProperty(id)) {
        return(
            <>
                <h1>{names[id].name}</h1>
                <h1>{names[id].username}</h1>
                <h1>{names[id].email}</h1>
                <h1>{names[id].city}</h1>
                <h1>{names[id].street}</h1>
            </>
        )
    }
}