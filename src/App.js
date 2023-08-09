import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
