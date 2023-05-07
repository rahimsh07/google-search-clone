import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </Router>
    </AppContext>
  );
}

export default App;
