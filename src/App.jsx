import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  Navigate,
} from "react-router-dom";
import DashBoard from "./pages/admin/dashboard/DashBoard";
import CartPage from "./pages/cart/CartPage";
import OrderPage from "./pages/order/OrderPage";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import LoginPage from "./pages/registration/LoginPage";
import SigninPage from "./pages/registration/SigninPage";
import ProductInfo from "./pages/productinfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/Updateproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProduct from "./pages/allproducts/AllProucts";


const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route
            path="/order"
            element={
              <userAuth>
                <OrderPage />
              </userAuth>
            }
          />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/dashboard"
            element={
              <adminAuth>
                <DashBoard />
              </adminAuth>
            }
          />
          <Route
            path="/addproduct"
            element={
              <adminAuth>
                <AddProduct />
              </adminAuth>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <adminAuth>
                <UpdateProduct />
              </adminAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/noPage" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

//user routes

const userAuth = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin route

const adminAuth = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "rawatrishi390@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
