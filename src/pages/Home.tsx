import React from "react";
import TechBackground from "../components/TechBackground";
import Edwin from '../images/me.jpg';
import AIApdf from '../images/Can AI Keep a Script.pdf';
import AIAvideo from '../images/LLM真的能保守秘密嗎.mp4';

const Home: React.FC = () => {
    return (
        <div data-visuals="on">
            <TechBackground />
            {/* 背景 Canvas */}
            <canvas id="tech-bg" aria-hidden="true"></canvas>

            <main>
                <div className="container">
                    {/* 上方個人簡介區塊 */}
                    <div className="template-note">
                        <div className="template-note-inner">
                            <div className="template-note-left">
                                <div className="hero-avatar-wrap">
                                    <img
                                        src={Edwin}
                                        alt="profile large"
                                        className="hero-avatar"
                                    />
                                </div>
                            </div>
                            <div className="template-note-right">
                                <div className="intro-placeholder">
                                    <h3>凃彥任 (Edwin-Tu)</h3>
                                    <p>國立澎湖科技大學資訊工程系學生</p>
                                    <p>
                                        熱衷於程式設計，專注於網站開發與資訊安全領域。
                                        擅長運用創意思維解決問題，持續在技術領域中探索與成長。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 關於我 */}
                    <section id="about" className="section">
                        <h2>關於我</h2>
                        <p>
                            身為澎湖科技大學資訊工程系的學生，我對程式設計擁有濃厚的興趣與熱情。
                            目前專注於網站設計與資訊安全等領域的研究與實作，
                            致力於將理論知識轉化為實際應用。
                        </p>
                        <p>
                            在學習過程中，我特別著重於網頁開發技術的掌握，
                            同時也積極探索資訊安全的相關知識。
                            我相信，透過不斷學習和實踐，能夠在這個快速發展的科技領域中找到自己的定位。
                        </p>
                    </section>

                    {/* 經歷 */}
                    <section id="experience" className="section alt">
                        <h2>經歷</h2>
                        <article className="exp-item">
                            <h3>崇正基金會-音控人員</h3>
                            <p className="muted">2023 春季~至今 · 台北</p>
                            <p>在團隊中負責各個班期及活動音控</p>
                        </article>
                        <article className="exp-item">
                            <h3>AIA 人工智慧學校 實戰發表會</h3>
                            <p className="muted">2026.05.18</p>
                            <p>Can AI Keep a Secret?</p>
                            <p>
                                <a href={AIApdf} target="_blank" rel="noreferrer">PDF</a>
                                {" | "}
                                <a href={AIAvideo} target="_blank" rel="noreferrer">MP4</a>
                            </p>
                        </article>
                    </section>

                    {/* 技能 */}
                    <section id="skills" className="section alt">
                        <h2>技能</h2>
                        <ul>
                            <li>程式語言：Python、JavaScript、C/C++</li>
                            <li>工具 / 框架：React</li>
                            <li>其他：Git、Linux、SQL</li>
                        </ul>
                    </section>

                    {/* 專案 */}
                    <section id="projects" className="section">
                        <h2>專案</h2>
                        <div className="projects-grid">
                            <div className="project">
                                <h4>網頁設計 / 架設</h4>
                                <p>說明：建立盧華書苑官方網站</p>
                                <p className="muted">技術：HTML、CSS、JavaScript</p>
                            </div>
                            {/* 之後可以在這裡多加幾個專案卡片 */}
                        </div>
                    </section>

                    {/* 聯絡方式 */}
                    <section id="contact" className="section">
                        <h2>聯絡方式</h2>
                        <ul>
                            <li>
                                Email：
                                <a href="mailto:hc1053203@gmail.com">
                                    hc1053203@gmail.com
                                </a>
                            </li>
                            <li>
                                GitHub：
                                <a href="https://github.com/Edwin-Tu" target="_blank" rel="noreferrer">
                                    github.com/Edwin-Tu
                                </a>
                            </li>
                            <li>LINE ID：edwin-tu</li>
                        </ul>
                    </section>
                </div>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <small>© 凃彥任 — 個人介紹頁面</small>
                </div>
            </footer>
        </div>
    );
};

export default Home;
