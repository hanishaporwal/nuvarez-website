import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Mulesoft from "./pages/Mulesoft";
import Salesforce from "./pages/Salesforce";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mulesoft" element={<Mulesoft />} />
      <Route path="/salesforce" element={<Salesforce />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;