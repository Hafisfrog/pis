import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";

export default function App() {
  const [language, setLanguage] = useState("th");
  const languageProps = { language, setLanguage };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home {...languageProps} />} />
        <Route path="/news" element={<News {...languageProps} />} />
        <Route path="/about" element={<About {...languageProps} />} />
        <Route path="/contact" element={<Contact {...languageProps} />} />
      </Routes>
    </BrowserRouter>
  );
}
