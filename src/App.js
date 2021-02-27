import './App.css';
import React, {useState} from "react";

function FuncComp(props){
  // const numberState = useState(props.initNumber);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  const [number,setNumber] = useState(props.initNumber);
  // const dateState = useState((new Date()).toString());
  // const date = dateState[0];
  // const setDate = dateState[1];
  const [date,setDate] = useState((new Date()).toString());
  
  return (
    <div className="container">
      <h2>Function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type="button" value="random" onClick={() => {
          setNumber(Math.random());
          }
      }></input>
      <input type="button" value="date" onClick={() => {
          setDate((new Date()).toString());
          }
      }></input>
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date:(new Date()).toString()
  }
  render(){
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={() => {
          this.setState({number:Math.random()})
          }
        }></input>
        <input type="button" value="date" onClick={() => {
          this.setState({date : (new Date()).toString()})
          }
        }></input>
      </div>
    )
  }
}

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>

    </div>
  );
}

export default App;
