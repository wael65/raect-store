import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NavPage from "./Pages/Home/NavPage";
import Footer from "./Components/Uitily/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<NavPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
