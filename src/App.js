import './App.css';
import BtnGroup from "./components/BtnGroup";

function App() {

    const buttonsData =[
        {"id" : 1, "buttonText" : 'left'},
        {"id" : 2, "buttonText" : 'right'}
    ];
  return (
          <div className="container pt-3">
              <BtnGroup buttonsData={buttonsData}/>
          </div>
  );
}

export default App;
