import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ReviewDetail from "./pages/ReviewDetail";
import Login from "./pages/Login";

const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<App />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
