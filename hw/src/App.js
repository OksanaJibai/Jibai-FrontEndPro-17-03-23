import './App.css';
import {Card} from "./Card/Card";

function App() {
  return <div className="container p-5">
    <Card title={"Barbie"}/>
    <Card text={"She's everything. He's just Ken."}/>
    <Card
      title={"Game of Thrones"}
      text={"Winter is coming."}
      />
  </div>
}

export default App;
