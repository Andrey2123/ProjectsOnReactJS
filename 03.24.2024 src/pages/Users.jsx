import React, {Component, useEffect} from "react";

/*export default class Users extends Component {

    render(){
        let {list} = this.props;
        useEffect(()=>{
            console.log(list);
        }, list)
        return(
            <div className="users-list">
                
            </div>
        )
    }
}*/
export default function Users(buffer) {
    const list = [
        {
            name: 'Anton',
            username: 'Anton21',
            email: 'aontonio@com',
            city: 'Minsk',
            street: 'Moniuszki'
        }
    ];
    useEffect(()=>{
        list.push(buffer);
    }, buffer)

    return (
        <div className="container">
            {list.map(item=>{
                return (
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.username}</li>
                        <li>{item.email}</li>
                        <li>{item.street}</li>
                        <li>{item.city}</li>
                    </ul>
                )
            }) }
        </div>
    )
}
