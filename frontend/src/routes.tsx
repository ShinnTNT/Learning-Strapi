import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import ReviewDetail from "./pages/ReviewDetail";

const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route index path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
