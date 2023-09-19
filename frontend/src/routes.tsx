import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ReviewDetail from "./pages/ReviewDetail";
import RequiredAuth from "./auth/required-auth";
import Register from "./auth/Register";
import Login from "./auth/Login";

const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequiredAuth />}>
          <Route index path="/" element={<App />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Index;
