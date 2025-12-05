import "./Page.css";

const Foundation = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">
          <span style={{ fontSize: "48px" }}>🏠</span>
        </div>
        <h1 className="page-title">Nền Văn Hóa Mới</h1>
        <p className="page-subtitle">
          Xây dựng nền văn hóa mới: Toàn diện - Khoa học - Nhân văn
        </p>
      </div>

      <div className="page-content">
        {/* Banner dẫn nhập */}
        <section className="foundation-intro">
          <div className="foundation-banner">
            <p className="foundation-banner-text">
              "Xây dựng nền văn hóa mới: Toàn diện - Khoa học - Nhân văn"
            </p>
            <p className="foundation-banner-subtext">
              Quan điểm của Hồ Chí Minh là một quá trình vận động và phát triển
              không ngừng, gắn liền với nhiệm vụ cách mạng của từng thời kỳ.
            </p>
          </div>
        </section>

        {/* Giai đoạn 1: Định hình nền móng */}
        <section className="foundation-section">
          <div className="foundation-stage-card">
            <div className="foundation-stage-header">
              <h2 className="foundation-stage-title">
                1. GIAI ĐOẠN 1: ĐỊNH HÌNH NỀN MÓNG (TRƯỚC 1945)
              </h2>
            </div>
            <div className="foundation-stage-content">
              <p className="foundation-stage-intro">
                Vào tháng 8/1943, trong khi đưa ra quan niệm về ý nghĩa của văn
                hóa, Hồ Chí Minh đã xác định 5 nội dung cốt lõi để xây dựng nền
                văn hóa dân tộc:
              </p>

              <div className="foundation-pillars">
                <div className="foundation-pillar">
                  <div className="pillar-icon">
                    <span style={{ fontSize: "32px" }}>🧠</span>
                  </div>
                  <h3 className="pillar-title">Xây dựng Tâm lý</h3>
                  <p className="pillar-content">Tinh thần độc lập, tự cường.</p>
                </div>
                <div className="foundation-pillar">
                  <div className="pillar-icon">
                    <span style={{ fontSize: "32px" }}>❤️</span>
                  </div>
                  <h3 className="pillar-title">Xây dựng Luân lý</h3>
                  <p className="pillar-content">
                    Biết hy sinh cái "tôi" nhỏ bé để làm lợi cho quần chúng.
                  </p>
                </div>
                <div className="foundation-pillar">
                  <div className="pillar-icon">
                    <span style={{ fontSize: "32px" }}>🤝</span>
                  </div>
                  <h3 className="pillar-title">Xây dựng Xã hội</h3>
                  <p className="pillar-content">
                    Hướng tới mọi sự nghiệp liên quan đến phúc lợi của nhân dân.
                  </p>
                </div>
                <div className="foundation-pillar">
                  <div className="pillar-icon">
                    <span style={{ fontSize: "32px" }}>⚖️</span>
                  </div>
                  <h3 className="pillar-title">Xây dựng Chính trị</h3>
                  <p className="pillar-content">
                    Thực hiện dân quyền (quyền của dân).
                  </p>
                </div>
                <div className="foundation-pillar">
                  <div className="pillar-icon">
                    <span style={{ fontSize: "32px" }}>💰</span>
                  </div>
                  <h3 className="pillar-title">Xây dựng Kinh tế</h3>
                  <p className="pillar-content">
                    Kiến thiết nền kinh tế vững chắc.
                  </p>
                </div>
              </div>

              <div className="foundation-note">
                <p>
                  <strong>Nhận xét:</strong> Ngay từ đầu, Bác đã nhìn nhận văn
                  hóa không chỉ là văn chương nghệ thuật mà bao trùm cả kinh tế,
                  chính trị và tâm lý xã hội.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Giai đoạn 2: Trong kháng chiến chống Pháp */}
        <section className="foundation-section">
          <div className="foundation-stage-card">
            <div className="foundation-stage-header">
              <h2 className="foundation-stage-title">
                2. GIAI ĐOẠN 2: TRONG KHÁNG CHIẾN CHỐNG PHÁP
              </h2>
            </div>
            <div className="foundation-stage-content">
              <p className="foundation-stage-intro">
                Khi cả dân tộc bước vào cuộc kháng chiến trường kỳ gian khổ, Hồ
                Chí Minh khẳng định lại phương châm chiến lược trong "Đề cương
                văn hóa Việt Nam" (1943). Nền văn hóa mới phải đảm bảo 3 tính
                chất:
              </p>

              <div className="foundation-triangle">
                <div className="triangle-item triangle-top">
                  <div className="triangle-icon">
                    <span style={{ fontSize: "32px" }}>🏠</span>
                  </div>
                  <h3 className="triangle-title">TÍNH DÂN TỘC</h3>
                  <p className="triangle-content">
                    Chống lại sự nô dịch, đồng hóa của thực dân; phát huy cốt
                    cách Việt Nam.
                  </p>
                </div>
                <div className="triangle-items-bottom">
                  <div className="triangle-item">
                    <div className="triangle-icon">
                      <span style={{ fontSize: "32px" }}>🔬</span>
                    </div>
                    <h3 className="triangle-title">TÍNH KHOA HỌC</h3>
                    <p className="triangle-content">
                      Chống lại sự ngu dốt, mê tín dị đoan; xây dựng tư duy tiến
                      bộ.
                    </p>
                  </div>
                  <div className="triangle-item">
                    <div className="triangle-icon">
                      <span style={{ fontSize: "32px" }}>👥</span>
                    </div>
                    <h3 className="triangle-title">TÍNH ĐẠI CHÚNG</h3>
                    <p className="triangle-content">
                      Văn hóa phục vụ đông đảo nhân dân, không phải tháp ngà của
                      giới thượng lưu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="foundation-image-caption">
                <p>
                  <em>Tổng bí thư Trường Chinh và chủ tịch Hồ Chí Minh</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Giai đoạn 3: Thời kỳ xây dựng CNXH */}
        <section className="foundation-section">
          <div className="foundation-stage-card">
            <div className="foundation-stage-header">
              <h2 className="foundation-stage-title">
                3. GIAI ĐOẠN 3: THỜI KỲ XÂY DỰNG CHỦ NGHĨA XÃ HỘI
              </h2>
            </div>
            <div className="foundation-stage-content">
              <p className="foundation-stage-intro">
                Khi miền Bắc quá độ lên CNXH, quan điểm xây dựng văn hóa được
                nâng lên một tầm cao mới:
              </p>

              <div className="foundation-socialist">
                <div className="socialist-intro">
                  <p className="socialist-main-text">
                    Nền văn hóa có <strong>nội dung Xã hội chủ nghĩa</strong> và{" "}
                    <strong>tính chất Dân tộc</strong>.
                  </p>
                </div>
                <div className="socialist-content">
                  <div className="socialist-item">
                    <h3>Nội dung Xã hội chủ nghĩa</h3>
                    <p>
                      Tiên tiến, hiện đại, lấy chủ nghĩa Mác - Lênin làm nền
                      tảng, hướng tới công bằng, dân chủ.
                    </p>
                  </div>
                  <div className="socialist-item">
                    <h3>Tính chất Dân tộc</h3>
                    <p>
                      Luôn biết trân trọng quá khứ, giữ gìn bản sắc và thuần
                      phong mỹ tục.
                    </p>
                  </div>
                </div>
              </div>

              <div className="foundation-image-caption">
                <p>
                  <em>Bác Hồ thăm nhà máy dệt may</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kết luận */}
        <section className="foundation-section">
          <div className="foundation-conclusion">
            <h2 className="foundation-conclusion-title">
              KẾT LUẬN: DIỆN MẠO NỀN VĂN HÓA VIỆT NAM
            </h2>
            <div className="foundation-conclusion-content">
              <p className="foundation-conclusion-text">
                Tổng hợp lại, quan điểm của Hồ Chí Minh về xây dựng nền văn hóa
                mới là:
              </p>
              <div className="foundation-final-quote">
                <blockquote className="foundation-quote">
                  "Một nền văn hóa toàn diện, giữ gìn được cốt cách văn hóa dân
                  tộc, bảo đảm tính khoa học, tiến bộ và nhân văn."
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Foundation;
