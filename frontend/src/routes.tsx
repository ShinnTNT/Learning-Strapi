import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./pages/App";

const Index = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index path="/" element={<App />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
