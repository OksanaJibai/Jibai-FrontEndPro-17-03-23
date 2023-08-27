import './App.css';
import Collapse from "./components/Collapse";

function App() {
    const text = 'Collapse me';
  return (
          <div className="container pt-3">
              <Collapse text={text} opened={false}/>
          </div>
  );
}

export default App;
