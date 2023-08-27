import './App.css';
import Carousel from "./components/Carousel";
import {pictures} from "./data/data";


function App() {
  return (
          <div className="container">
              <Carousel data={pictures}/>
          </div>
  );
}

export default App;
