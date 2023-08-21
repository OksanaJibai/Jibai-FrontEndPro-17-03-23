import './App.css';
import ListGroup from "./components/ListGroup";

function App() {

    const items = [
        {id : 1, name: <p>one</p>},
        {id : 2, name: <p>two</p>},
        {id : 3, name: <p>tree</p>},
        {id : 4, name: <p>four</p>},
    ]
    return (
        <div className="App">
            <ListGroup data={items}/>
        </div>
    );
}

export default App;
