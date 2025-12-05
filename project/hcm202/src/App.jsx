import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Essence from "./pages/Essence";
import Principles from "./pages/Principles";
import Role from "./pages/Role";
import Development from "./pages/Development";
import Legacy from "./pages/Legacy";
import Quiz from "./pages/Quiz";
import CrossWord from "./pages/CrossWord";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<Introduction />} />
          <Route path="/ban-chat" element={<Essence />} />
          <Route path="/nguyen-tac" element={<Principles />} />
          <Route path="/vai-tro" element={<Role />} />
          <Route path="/phat-trien" element={<Development />} />
          <Route path="/di-san" element={<Legacy />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/crossword" element={<CrossWord />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
