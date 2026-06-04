import React from "react";
import img1 from '../images/2026.05.18/690754592_1424683386367098_158577605595868017_n_0.jpg';
import img2 from '../images/2026.05.18/702265435_1435040211998082_6249529715033199915_n_0.jpg';
import img3 from '../images/2026.05.18/703621368_1435034681998635_7623423129655255461_n_0.jpg';
import PDF from '../images/2026.05.18/Can AI Keep a Script.pdf?url';
import MP4 from '../images/2026.05.18/llm-secret-demo.mp4?url';

const AIAExperience: React.FC = () => {
    return (
        <main>
            <div className="container section">
                <h2>AIA 人工智慧學校 實戰發表會</h2>
                <p className="muted">2026.05.18 · 政大公企中心</p>

                <section style={{ marginTop: '2rem' }}>
                    <h3>發表主題</h3>
                    <p>
                        <strong>Can AI Keep a Secret? AI 真的能幫我們保守秘密嗎？</strong>
                    </p>
                    <p>
                        在這個大型語言模型（LLM）快速發展的時代，我們越來越依賴 AI 處理日常事務，
                        但同時也必須正視一個關鍵問題：AI 真的能保守秘密嗎？
                        本次發表探討 LLM 在資訊安全層面的潛在風險，包括 Prompt Injection、
                        資料外洩等攻擊面，並提出防護建議。
                    </p>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>活動照片</h3>
                    <div className="exp-gallery">
                        <div className="exp-gallery-item">
                            <img src={img1} alt="AIA 發表會現場 1" />
                        </div>
                        <div className="exp-gallery-item">
                            <img src={img2} alt="AIA 發表會現場 2" />
                        </div>
                        <div className="exp-gallery-item">
                            <img src={img3} alt="AIA 發表會現場 3" />
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: '2rem' }}>
                    <h3>相關資料</h3>
                    <p>
                        <a href={PDF} target="_blank" rel="noreferrer">PDF 簡報</a>
                        {" | "}
                        <a href={MP4} target="_blank" rel="noreferrer">發表影片</a>
                    </p>
                </section>
            </div>
        </main>
    );
};

export default AIAExperience;
