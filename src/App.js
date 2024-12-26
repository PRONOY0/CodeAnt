import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/authentication/Auth";
import Repo from "./pages/Repository-Screen/Repo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="*" element={<h1>Not Found</h1>} />

        <Route path="/repo" element={<Repo />} />
      </Routes>
    </div>
  );
}

export default App;
