import './App.css';
import {useState, useMemo, useContext, useCallback} from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() =>{
      return calculateObject()
  },[])

  const  increment = useCallback(() => {
      setNumber(prevState => prevState+ 1);
  },[])
  return (
    <div className="App">
      <Header increment={increment}/>
        <br />
        <br />
      <h1>{number}</h1>
    </div>
  );
}
function calculateObject() {
    console.log("Callcutaing");
    for (let i =0; i<10000000; i++){}
    console.log("Callcutaing finish");

    return {name : "Mehmet"};

}

export default App;
