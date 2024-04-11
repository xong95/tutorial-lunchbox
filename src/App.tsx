import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./routes/Join"
import Login from "./routes/Login"
import Main from "./routes/Main"
import MyOrder from "./routes/MyOrder"
import Order from "./routes/Order"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/Join" component={Join}/>
        <Route path="/main" component={Main}/>
        <Route path="/myorder" component={MyOrder}/>
        <Route path="/order" component={Order}/>
      </Router>
    </div>
  );
}

export default App;
