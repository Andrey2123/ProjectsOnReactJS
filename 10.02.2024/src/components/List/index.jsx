import React, { Component } from 'react'
import ListItem from '../ListItem'

export default class List extends Component {
  state = {
    firstList:this.props.list,
    secondList:[],
    thirdList:[],
  }

  moveFromFirstToSecond() {
    this.setState({
        secondList: [this.state.firstList.shift(), ...this.state.secondList],
    });
  };
  moveFromSecondToFirst() {
    this.setState({
        firstList: [this.state.secondList.shift(), ...this.state.firstList]
    });
  };
  moveFromSecondToThird() {
    this.setState({
        thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
    });
  };
  removeLastItemFromThird() {
    this.setState({
        thirdList:this.state.thirdList.slice(0,-1),
    });
    console.log(this.state.thirdList)
  };

  render() {  
    return(
      <div>
        <ListItem 
        list={this.state.firstList} 
        actions={[
            {
                id: 11,
                btn: 'Move to second',
                actions: this.moveFromFirstToSecond.bind(this)
            }
        ]}/>
        <ListItem 
        list={this.state.secondList} 
        actions={[
            {
                id: 21,
                btn: 'Move to first',
                actions: this.moveFromSecondToFirst.bind(this)
            },
            {
                id: 31,
                btn: 'Move to third',
                actions: this.moveFromSecondToThird.bind(this)
            }
        ]}/>
        <ListItem 
        list={this.state.thirdList}
        actions={[
            {
                id: 41,
                btn: 'Remove last item',
                actions: this.removeLastItemFromThird.bind(this)
            }
        ]}
        />
      </div>
    )
  }
}