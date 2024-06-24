import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NavPage from "./Pages/Home/NavPage";
import Footer from "./Components/Uitily/Footer";
import CategoryPage from "./Pages/Category/CategoryPage";
import AuthPage from "./Pages/Auth/AuthPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";
import UserFavoritesPage from "./Pages/User/UserFavoritesPage";
import UserAddresPage from "./Pages/User/UserAddresPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<NavPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/orders" element={<UserOrdersPage />} />
          <Route path="/user/favorites" element={<UserFavoritesPage />} />
          <Route path="/user/addresses" element={<UserAddresPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
