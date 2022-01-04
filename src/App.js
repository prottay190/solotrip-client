import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Rooms from "./Components/Rooms/Rooms";
import PrivateRoute from "./Components/Login/Login/PrivateRoute/PrivateRoute";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import HotelDetail from "./Components/hotelDetail/HotelDetail";
import MyOrder from "./Components/myOrder/MyOrder";
import AdminRoute from "./Components/Shared/Adminroute/AdminRoute";
import Dashboard from "./Components/dashboard/Dashboard";
import ManageAllOrders from "./Components/dashboard/ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "./Components/dashboard/ManageAllProducts/ManageAllProducts";
import MakeAdmin from "./Components/dashboard/makeAdmin/MakeAdmin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/rooms"
            element={
              <PrivateRoute>
                <Rooms />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/manageallorders"
            element={
              <AdminRoute>
                <ManageAllOrders />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/manageallproducts"
            element={
              <AdminRoute>
                <ManageAllProducts />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/makeadmin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          ></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/myorders" element={<MyOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
