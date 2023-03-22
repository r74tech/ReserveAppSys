import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataDisplayWrapper from "./components/DataDisplayWrapper";
import NotFound from "./components/NotFound";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/:slug" element={<DataDisplayWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;