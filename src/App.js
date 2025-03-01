import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
