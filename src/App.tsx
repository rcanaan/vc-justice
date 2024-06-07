import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import { VideoProvider } from "./components/VideoContext";

function App() {
  return (
    <Router>
      <VideoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<AboutPage />} />
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </VideoProvider>
    </Router>
  );
}

export default App;
