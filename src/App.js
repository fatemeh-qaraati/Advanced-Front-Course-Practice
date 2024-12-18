import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ROUTES } from "./constant/routes.js";
import { ThemeProvider } from "./context/theme.jsx";
import Header from "./components/header/index.jsx";
import Home from "./pages/home.jsx";
import CountryInfo from "./pages/country-info.jsx";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.COUNTRY} element={<CountryInfo />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;