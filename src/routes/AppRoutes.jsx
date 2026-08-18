import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./Protected";
import AdminRoute from "./AdminRoute";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Favorites from "../pages/Favorites";
import Watchlist from "../pages/Watchlist";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import Dashboard from "../admin/Dashboard";
import AdminMovies from "../admin/Movies";
import AddMovie from "../admin/AddMovie";
import EditMovie from "../admin/EditMovie";
import Genres from "../admin/Genres";
import Users from "../admin/Users";
import AdminReviews from "../admin/Reviews";
import Settings from "../admin/Settings";
=======
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import NotFound from "../pages/NotFound.jsx";
>>>>>>> 00b6243661dd7ef988c1af00562fd400e3df01bc

export default function AppRoutes() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="movies" element={<AdminMovies />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="movies/:movieId/edit" element={<EditMovie />} />
        <Route path="genres" element={<Genres />} />
        <Route path="users" element={<Users />} />
        <Route path="reviews" element={<AdminReviews />} />
        <Route path="settings" element={<Settings />} />
      </Route>
=======
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected and admin routes get added here once those pages exist,
          e.g. <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} /> */}
>>>>>>> 00b6243661dd7ef988c1af00562fd400e3df01bc

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
