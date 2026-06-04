// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import AIAExperience from "./pages/AIAExperience";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* 首頁：Home  */}
        <Route path="/" element={<Home />} />

        {/* 新增的「學習」路由 */}
        <Route path="/learning" element={<Learning />} />

        {/* AIA 實戰發表會詳細頁面 */}
        <Route path="/#/experience/aia-2026" element={<AIAExperience />} />
      </Routes>
    </>
  );
};

export default App;
