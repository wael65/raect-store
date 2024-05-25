import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NavPage from "./Pages/Home/NavPage";
import Footer from "./Components/Uitily/Footer";
import CategoryPage from "./Pages/Category/CategoryPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<NavPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
