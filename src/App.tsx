
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
