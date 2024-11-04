import { Routes, Route } from "react-router-dom";
import Select from "./pages/Select";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>React-Helmet</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </>
  );
}

export default App;
