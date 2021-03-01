import './App.css';
import React, {useState, useEffect} from "react";

const funcStyle = "color:blue";
let funcId = 0;

function FuncComp(props){
  // const numberState = useState(props.initNumber);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  const [number,setNumber] = useState(props.initNumber);
  // const dateState = useState((new Date()).toString());
  // const date = dateState[0];
  // const setDate = dateState[1];
  const [date,setDate] = useState((new Date()).toString());

  useEffect(()=> {
    console.log ('%cfunc => useEffect (componentDidMount)'+(++funcId), funcStyle);
    return function(){
      console.log ('%cfunc => useEffect return (componentDidMount)'+(++funcId), funcStyle);
    }
  }, [] );

  //sideEffect
  useEffect(()=> {
    console.log ('%cfunc => useEffect number (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    return function(){
      console.log ('%cfunc => useEffect number return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    }
  }, [number]);

  useEffect(()=> {
    console.log ('%cfunc => useEffect date (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    return function(){
      console.log ('%cfunc => useEffect date return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
    }
  }, [date]);
  
  console.log ('%cfunc => render '+(++funcId), funcStyle);
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
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={()=>{
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove func" onClick={()=>{
        setClassShow(false);
      }}></input>
      <input type="button" value="remove class"></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}

    </div>
  );
}

export default App;
