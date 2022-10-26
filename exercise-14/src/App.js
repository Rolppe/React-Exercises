import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Main Page</Link>
        <Link to="/second"> Second Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
