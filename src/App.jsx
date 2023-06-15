import "./App.css";
import Book from "./pages/Book";
// import Card from "./components/Card";
// import Search from "./components/Search";
// import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
// import LoginBtn from "./components/LoginBtn";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<Book />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
