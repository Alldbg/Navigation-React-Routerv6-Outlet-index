import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Page3 from "./routes/Page3";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Route>
    </Routes>
  );
}
