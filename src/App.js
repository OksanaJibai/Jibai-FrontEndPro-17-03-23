import './App.css';
import Progress from "./components/Progress";

function App() {
  return (
          <div className="container pt-3">
              <Progress percentage={0}/>
              <Progress percentage={18}/>
              <Progress percentage={40}/>
              <Progress percentage={68}/>
              <Progress percentage={99}/>
          </div>
  );
}

export default App;
