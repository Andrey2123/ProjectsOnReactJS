import React, { Component } from 'react'
import List from './components/List'

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        title: 'Task 1'
      },
      {
        id: 2,
        title: 'Task 2'
      },
      {
        id: 3,
        title: 'Task 3'
      },
      {
        id: 4,
        title: 'Task 4'
      },
      {
        id: 5,
        title: 'Task 5'
      },
    ]
  }
  render() {  
    return(
      <div>
        <List list={this.state.list}/>
      </div>
    )
  }
}