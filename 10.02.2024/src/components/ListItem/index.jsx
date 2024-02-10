import React, { Component } from 'react'

export default class ListItem extends Component {

  render() {  
    let {list, actions} = this.props;
    return Array.isArray(list) && list.length && Array.isArray(actions) && actions.length ? (
      <>
        <ul>
        {list.map((item) => (
            <li key={item.id}>{item.title}</li>
        ))}
        </ul>
        {actions.map((item)=>(
            <button key={item.id} onClick={item.actions}>
                {item.btn}
            </button>
        ))}
      </>
    ) : null;
  }
}