import './App.css';
import Alert from "./components/Alert";
import {alertData} from "./data/data";


function App() {
  return (
      <div className='container pt-5'>
        {alertData.map(({type,text}) => < Alert key={type} type={type} text={text}/> )}
      </div>

  );
}

export default App;
