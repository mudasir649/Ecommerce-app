import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
import "./app.css"
import { productInputs, userInputs } from "./formSource";
import "./components/style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {

  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/Ecommerce-app/">
            <Route index element={<Home/>} />
            <Route path="/Ecommerce-app/login" element={<Login/>} />
            <Route path="/Ecommerce-app/users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="/Ecommerce-app/products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Products" />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
