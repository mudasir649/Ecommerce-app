import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Ecommerce-app/">
            <Route index element={<Home/>} />
            <Route path="/Ecommerce-app/login" element={<Login/>} />
            <Route path="/Ecommerce-app/users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
            <Route path="/Ecommerce-app/products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
