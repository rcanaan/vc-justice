import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { VideoProvider } from "./context/VideoContext";

function App() {
  return (
    <Router>
      <VideoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </VideoProvider>
    </Router>
  );
}

export default App;
