const animals = [
    {type: `turtle`, icon: `🐢`, id:1},
    {type: `octopus`, icon: `🐙`, id:2},
    {type: `fish`, icon: `🐠`, id:3},
    {type: `flamingo`, icon: `🦩`, id:4},
    {type: `penguin`, icon: `🐧`, id:5}
];

const domContaier = document.querySelector('#root');
const root = ReactDOM.createRoot(domContaier);

function randomizerWithException(min, max, exceptionArray) {  // including the last number
    let randomNum = Math.floor(Math.random()*(max-min)+min);
    if(exceptionArray.includes(randomNum)==false && !isNaN(randomNum)){
        console.log('randomnum',randomNum)
        return randomNum;
    }
    else {
        randomizerWithException(min,max,exceptionArray);
    }
}

class AnimalsTable extends React.Component {
    constructor(props) {
        super(props)
        const tableFilling = setInterval(()=>{
            let randomNum// = Math.floor(Math.random()*(this.state.listItems.length-0)+0) 
            do {
                randomNum = randomizerWithException(0,this.state.listItems.length, this.state.exceptionIndex);
                console.log('randomnum',randomNum);
                this.state.listItems[randomNum].active=true;
                this.state.exceptionIndex.push(randomNum);
                console.log(this.state.exceptionIndex);
                
                this.state.exceptionIndex.length==3 && (this.state.styleTable={border: '10px solid darkgreen'});
                
                this.state.exceptionIndex.length==this.state.listItems.length && (this.state.styleTable={border: '20px solid darkgreen'});

                this.setState({});
                this.state.exceptionIndex.length==this.state.listItems.length && clearInterval(tableFilling);
            } while(this.state.exceptionIndex.includes(randomNum)==false && !isNaN(randomNum) && randomNum!=undefined)
                /*let randomNum = Math.floor(Math.random()*(this.state.listItems.length-0)+0);
                if(this.state.exceptionIndex.includes(randomNum)==false && !isNaN(randomNum) && randomNum!=undefined){
                    console.log('randomnum',randomNum);
                    this.state.listItems[randomNum].active=true;
                    this.state.exceptionIndex.push(randomNum);
                    console.log(this.state.exceptionIndex);
                    
                    this.setState({});
                    this.state.exceptionIndex.length==this.state.listItems.length && clearInterval(tableFilling);
                };*/ //-----
            
            /*let randomCount = randomizerWithException(0,this.state.listItems.length,this.state.exceptionIndex);
            
            console.log(this.state.listItems[randomCount]);
            this.state.listItems[randomCount].active=true;

            this.state.exceptionIndex.push(randomNum);
            console.log(this.state.exceptionIndex);
            
            this.setState({});
            this.state.exceptionIndex.length==this.state.listItems.length && clearInterval(tableFilling);*/
        },2000);
    }

    state={
        exceptionIndex: [],
        styleTable: {},
        listItems: this.props.list
    }

    render() {
        return(
            <table style={this.state.styleTable}>
                <tbody>
                    {this.state.listItems.map((item)=>{
                        return(
                            <tr style={item.active && {color:'green',fontWeight:'bold'}}>
                                <td>{item.icon}</td>
                                <td>{item.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
            
}

root.render(<AnimalsTable list={animals}/>)