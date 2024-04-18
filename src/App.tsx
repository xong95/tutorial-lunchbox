import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Main from "./routes/Main";
import MyOrder from "./routes/MyOrder";
import Order from "./routes/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Join" Component={Join} />
          <Route path="/main" Component={Main} />
          <Route path="/myorder" Component={MyOrder} />
          <Route path="/order" Component={Order} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
