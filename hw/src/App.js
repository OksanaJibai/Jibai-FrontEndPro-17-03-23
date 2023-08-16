import './App.css';
import Definitions from "./Definitions/Definitions";
import {definitions} from "./data/data";

function App() {
  return <div className= "container p-5">
    <Definitions data={definitions}/>
  </div>
}

export default App;
