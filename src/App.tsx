// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Learning from "./pages/Learning";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* 首頁：Home  */}
        <Route path="/" element={<Home />} />

        {/* 新增的「學習」路由 */}
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </>
  );
};

export default App;
