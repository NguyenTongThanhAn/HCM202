import { useState } from "react";
import "./Page.css";
import "./Other.css";

const Other = () => {
  const [activeMedia, setActiveMedia] = useState("podcast");

  return (
    <div className="page other-page">
      <div className="page-header">
        <div className="page-icon">📂</div>
        <h1 className="page-title">Tổng hợp</h1>
        <p className="page-subtitle">
          Podcast, Video, Presentation và Infographic về tư tưởng Hồ Chí Minh về
          văn hóa
        </p>
      </div>

      <div className="page-content">
        {/* Media Type Selector */}
        <div className="media-selector">
          <div
            className={`media-card ${
              activeMedia === "podcast" ? "active" : ""
            }`}
            onClick={() => setActiveMedia("podcast")}
          >
            <div className="media-icon">🎙️</div>
            <h3>Podcast</h3>
            <p>Nghe các bài phân tích chuyên sâu</p>
          </div>
          <div
            className={`media-card ${activeMedia === "video" ? "active" : ""}`}
            onClick={() => setActiveMedia("video")}
          >
            <div className="media-icon">🎬</div>
            <h3>Video</h3>
            <p>Xem các video tư liệu lịch sử</p>
          </div>
          <div
            className={`media-card ${
              activeMedia === "presentation" ? "active" : ""
            }`}
            onClick={() => setActiveMedia("presentation")}
          >
            <div className="media-icon">📊</div>
            <h3>Presentation</h3>
            <p>Slide thuyết trình tổng hợp</p>
          </div>
          <div
            className={`media-card ${
              activeMedia === "infographic" ? "active" : ""
            }`}
            onClick={() => setActiveMedia("infographic")}
          >
            <div className="media-icon">🖼️</div>
            <h3>Infographic</h3>
            <p>Hình ảnh tổng hợp trực quan</p>
          </div>
        </div>

        {/* Media Content */}
        <div className="media-content">
          {activeMedia === "podcast" && (
            <div className="podcast-section">
              <h2>🎙️ Podcast</h2>
              <div className="media-player">
                <h3>DNA Văn Hóa Việt Nam Qua Tư Tưởng Hồ Chí Minh</h3>
                <audio controls style={{ width: "100%" }}>
                  <source
                    src="/DNA_Văn_Hóa_Việt_Nam_Qua_Tư_Tưởng_Hồ_Chí_Minh (1).m4a"
                    type="audio/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ audio.
                </audio>
                <p className="media-source">Nguồn: NotebookLM</p>
              </div>
            </div>
          )}

          {activeMedia === "video" && (
            <div className="video-section">
              <h2>🎬 Video</h2>
              <div className="media-player">
                <h3>Tư tưởng Hồ Chí Minh về Văn hóa</h3>
                <video
                  controls
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    borderRadius: "12px",
                  }}
                >
                  <source
                    src="/Tư_tưởng_HCM_về_Văn_hóa (1).mp4"
                    type="video/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
                <p className="media-source">Nguồn: NotebookLM</p>
              </div>
            </div>
          )}

          {activeMedia === "presentation" && (
            <div className="presentation-section">
              <h2>📊 Presentation</h2>
              <div className="media-player">
                <h3>Tư tưởng Hồ Chí Minh về Văn hóa</h3>
                <div className="pdf-container">
                  <iframe
                    src="/Tư_tưởng_Hồ_Chí_Minh_về_Văn_hóa (1).pdf"
                    style={{
                      width: "100%",
                      height: "600px",
                      border: "none",
                      borderRadius: "12px",
                    }}
                    title="Presentation PDF"
                  />
                  <a
                    href="/Tư_tưởng_Hồ_Chí_Minh_về_Văn_hóa (1).pdf"
                    download
                    className="download-btn"
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      padding: "0.8rem 1.5rem",
                      background: "#991a14",
                      color: "white",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    📥 Tải xuống PDF
                  </a>
                  <p className="media-source">Nguồn: NotebookLM</p>
                </div>
              </div>
            </div>
          )}

          {activeMedia === "infographic" && (
            <div className="infographic-section">
              <h2>🖼️ Infographic</h2>
              <div className="media-player">
                <h3>Infographic Tư tưởng Hồ Chí Minh về Văn hóa</h3>
                <div className="infographic-container">
                  <img
                    src="/infographic-1.png"
                    alt="Infographic Tư tưởng Hồ Chí Minh về Văn hóa"
                    style={{
                      width: "100%",
                      maxWidth: "800px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  />
                  <a
                    href="/infographic.png"
                    download
                    className="download-btn"
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      padding: "0.8rem 1.5rem",
                      background: "#991a14",
                      color: "white",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    📥 Tải xuống Infographic
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Other;
