import React from "react";
import { Link } from "react-router-dom";
import Edwin from '../images/me.jpg';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="header-left">
          <div className="profile-wrap">
            <img
              src={Edwin}
              alt="profile"
              className="profile-photo"
              onError={(e) => {
                e.currentTarget.style.opacity = "0.15";
              }}
            />
          </div>
          <h1 className="site-title">Edwin Tu</h1>
        </div>

        <nav className="nav">
          {/* 回首頁 */}
          <Link to="/">首頁</Link>

          {/* 原本的區塊，暫時先保留用 # 捲動 */}
          <a href="#about">關於我</a>
          <a href="#experience">經歷</a>
          <a href="#projects">專案</a>
          <a href="#contact">聯絡</a>

          {/* ✅ 新增「學習」路由 */}
          <Link to="/learning">學習</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
