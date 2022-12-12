import './App.css';
import {useState , useMemo} from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() =>{
      return calculateObject()
  },[])
  return (
    <div className="App">
      <Header number={number<5 ? 0: number} data ={data}/>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number+1)}> Click</button>
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
