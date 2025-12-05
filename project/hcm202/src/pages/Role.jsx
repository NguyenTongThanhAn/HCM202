import "./Page.css";

const Role = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">🌟</div>
        <h1 className="page-title">Vai trò Văn hóa</h1>
        <p className="page-subtitle">
          Vai trò và ý nghĩa của văn hóa trong đời sống xã hội theo tư tưởng Hồ
          Chí Minh
        </p>
      </div>

      <div className="page-content">
        {/* Phần 1: Quan điểm chủ đạo */}
        <section className="role-section">
          <div className="role-main-card">
            <div className="role-main-header">
              <h2 className="role-main-title">
                1. QUAN ĐIỂM CHỦ ĐẠO: "VĂN HÓA SOI ĐƯỜNG CHO QUỐC DÂN ĐI"
              </h2>
            </div>
            <div className="role-main-content">
              <p className="role-intro">
                Đây là luận điểm cốt lõi, được Chủ tịch Hồ Chí Minh tuyên bố tại
                Hội nghị Văn hóa toàn quốc lần thứ nhất (24/11/1946).
              </p>

              <div className="role-main-image">
                <img
                  src="/Van-hoa-soi-duong-cho-quoc-dan-di.jpg"
                  alt="Văn hóa soi đường cho quốc dân đi"
                />
              </div>

              <div className="role-context">
                <h3>Bối cảnh lịch sử</h3>
                <p>
                  Câu nói ra đời khi đất nước đang ở thế "ngàn cân treo sợi
                  tóc", đối mặt với giặc đói, giặc dốt và giặc ngoại xâm. Khi
                  ấy, văn hóa được Người đặt vào vị trí của một "ngọn đuốc" để
                  phá tan sự tăm tối.
                </p>
              </div>

              <div className="role-analysis">
                <h3>Phân tích chiều sâu</h3>
                <div className="analysis-points">
                  <div className="analysis-point">
                    <h4>Chức năng dự báo</h4>
                    <p>
                      Văn hóa không chỉ đi sau để phản ánh hiện thực xã hội, mà
                      phải đi trước để dự báo và định hướng tương lai.
                    </p>
                  </div>
                  <div className="analysis-point">
                    <h4>Chức năng dẫn dắt</h4>
                    <p>
                      Văn hóa cung cấp hệ giá trị chuẩn mực (Chân - Thiện - Mỹ)
                      giúp quốc dân phân biệt được Chính - Tà, Bạn - Thù, Đúng -
                      Sai.
                    </p>
                  </div>
                  <div className="analysis-point">
                    <h4>Vai trò điều tiết</h4>
                    <p>
                      Nếu ví kinh tế là con thuyền, thì văn hóa chính là bánh
                      lái. Muốn con thuyền quốc gia đi đúng hướng, tránh va vào
                      đá ngầm của sự suy thoái đạo đức, cần phải có văn hóa soi
                      đường.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phần 2: Văn hóa là mục tiêu */}
        <section className="role-section">
          <div className="role-main-card">
            <div className="role-main-header">
              <h2 className="role-main-title">
                2. VĂN HÓA LÀ MỤC TIÊU CỦA SỰ NGHIỆP CÁCH MẠNG
              </h2>
            </div>
            <div className="role-main-content">
              <p className="role-intro">
                Hồ Chí Minh khẳng định: Độc lập dân tộc và Chủ nghĩa xã hội suy
                cho cùng là để hướng tới giá trị nhân văn cao cả nhất là
                <strong> Giải phóng con người</strong>. Văn hóa chính là mục
                tiêu của sự giải phóng đó.
              </p>

              <div className="role-goals">
                <div className="goal-item">
                  <h3>Mục tiêu vĩ mô (Xã hội)</h3>
                  <p>
                    <span className="goal-icon">✓</span>
                    Xây dựng một xã hội dân chủ, công bằng, văn minh, nơi "dân
                    là chủ và dân làm chủ".
                  </p>
                </div>
                <div className="goal-item">
                  <h3>Mục tiêu vi mô (Con người)</h3>
                  <ul className="goal-list">
                    <li>
                      Văn hóa hướng tới việc đảm bảo quyền sống, quyền tự do và
                      quyền mưu cầu hạnh phúc cho mỗi người dân.
                    </li>
                    <li>
                      Cụ thể hóa bằng đời sống thực tiễn: Ai cũng có cơm ăn áo
                      mặc, ai cũng được học hành, đời sống vật chất và tinh thần
                      luôn được nâng cao.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-conclusion">
                <p>
                  <strong>Kết luận:</strong> Văn hóa không phải là phương tiện
                  trang trí, mà là đích đến cuối cùng của mọi hoạt động kinh tế
                  - chính trị.
                </p>
              </div>

              <div className="role-main-image">
                <img
                  src="/vaitro1.png"
                  alt="Chủ tịch Hồ Chí Minh thăm diễn viên Đoàn Văn công nhân dân Trung ương"
                />
                <p className="image-caption">
                  Chủ tịch Hồ Chí Minh thăm diễn viên Đoàn Văn công nhân dân
                  Trung ương sau buổi biểu diễn tại Phủ Chủ tịch, ngày
                  31-12-1956.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phần 3: Văn hóa là động lực */}
        <section className="role-section">
          <div className="role-main-card">
            <div className="role-main-header">
              <h2 className="role-main-title">
                3. VĂN HÓA LÀ ĐỘNG LỰC CỦA SỰ PHÁT TRIỂN
              </h2>
            </div>
            <div className="role-main-content">
              <p className="role-intro">
                Nếu động lực vật chất là lợi ích kinh tế, thì văn hóa cung cấp
                động lực tinh thần vô giá, thúc đẩy sự phát triển của xã hội
                trên nhiều phương diện:
              </p>

              <div className="role-drivers">
                <div className="driver-item">
                  <h3>Văn hóa Chính trị</h3>
                  <p>
                    Văn hóa soi đường, lãnh đạo quốc dân thực hiện độc lập, tự
                    cường. Tư duy sáng tạo của đội ngũ cán bộ là nguồn lực lớn
                    cho cách mạng.
                  </p>
                </div>
                <div className="driver-item">
                  <h3>Văn hóa Văn nghệ</h3>
                  <p>
                    Văn học nghệ thuật giúp nâng cao lòng yêu nước và lý tưởng
                    cách mạng. Những bài ca, vần thơ kháng chiến đã thực sự trở
                    thành "sức mạnh vật chất" trên chiến trường, nuôi dưỡng niềm
                    tin tất thắng.
                  </p>
                </div>
                <div className="driver-item highlight-driver">
                  <h3>Văn hóa Giáo dục (Quan trọng nhất)</h3>
                  <ul className="driver-list">
                    <li>
                      <strong>Quan điểm:</strong> "Một dân tộc dốt là một dân
                      tộc yếu".
                    </li>
                    <li>
                      <strong>Hành động:</strong> Phong trào "Diệt giặc dốt",
                      Bình dân học vụ nhằm xóa nạn mù chữ. Giáo dục tạo ra nguồn
                      nhân lực chất lượng cao - động lực chính để kiến thiết đất
                      nước.
                    </li>
                  </ul>
                </div>
                <div className="driver-item">
                  <h3>Văn hóa Đạo đức</h3>
                  <p>
                    Thực hành "Cần, Kiệm, Liêm, Chính" giúp cán bộ, đảng viên
                    vững vàng trước sự quyến rũ của quyền lực và tiền bạc, từ đó
                    giữ vững niềm tin của nhân dân vào chế độ.
                  </p>
                </div>
                <div className="driver-item">
                  <h3>Văn hóa Pháp luật</h3>
                  <p>Bảo đảm dân chủ, trật tự, kỷ cương, phép nước.</p>
                </div>
              </div>

              <div className="role-images-grid">
                <div className="role-image-item">
                  <img
                    src="/vaitro2.png"
                    alt="Chủ tịch Hồ Chí Minh thăm một lớp học của phong trào Bình dân học vụ"
                  />
                </div>
                <div className="role-image-item">
                  <img src="/binhdanhocvu.jpg" alt="Bình dân học vụ" />
                </div>
              </div>
              <p
                className="image-caption"
                style={{ textAlign: "center", marginTop: "0.75rem" }}
              >
                Chủ tịch Hồ Chí Minh thăm một lớp học của phong trào Bình dân
                học vụ.
              </p>
            </div>
          </div>
        </section>

        {/* Phần 4: Văn hóa là mặt trận */}
        <section className="role-section">
          <div className="role-main-card">
            <div className="role-main-header">
              <h2 className="role-main-title">
                4. VĂN HÓA LÀ MỘT MẶT TRẬN ĐẤU TRANH
              </h2>
            </div>
            <div className="role-main-content">
              <p className="role-intro">
                Đây là tư duy "quân sự hóa" văn hóa độc đáo của Hồ Chí Minh, đặt
                văn hóa ngang hàng với các mặt trận quân sự, chính trị, kinh tế.
              </p>

              <div className="role-battlefield">
                <div className="battlefield-item">
                  <h3>Tính chất mặt trận</h3>
                  <p>
                    Văn hóa không phải là nơi giải trí đơn thuần mà là một chiến
                    trường ác liệt giữa cái mới và cái cũ, giữa tư tưởng tiến bộ
                    và tư tưởng phản động, giữa đạo đức cách mạng và chủ nghĩa
                    cá nhân.
                  </p>
                </div>
                <div className="battlefield-item">
                  <h3>Chiến sĩ văn hóa</h3>
                  <ul className="battlefield-list">
                    <li>
                      Người làm văn hóa, văn nghệ là những chiến sĩ trên mặt
                      trận ấy.
                    </li>
                    <li>
                      <strong>Nhiệm vụ:</strong> Dùng ngòi bút, tác phẩm làm vũ
                      khí sắc bén để "phò chính trừ tà".
                    </li>
                    <li>
                      <strong>Hành động cụ thể:</strong> Phê phán cái xấu (tham
                      ô, lãng phí, quan liêu) và ca ngợi cái tốt (người tốt,
                      việc tốt, gương điển hình tiên tiến).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-quote-box">
                <blockquote className="role-quote">
                  "Văn hóa nghệ thuật cũng là một mặt trận. Anh chị em là chiến
                  sĩ trên mặt trận ấy."
                </blockquote>
                <p className="role-quote-author">— Hồ Chí Minh</p>
              </div>

              <div className="role-images-grid">
                <div className="role-image-item">
                  <img src="/nhavan.jpg" />
                  <p className="image-caption">
                    Các văn nghệ sĩ cách mạng tiêu biểu trong kháng chiến chống
                    Pháp. Từ phải qua trái: Tô Hoài, Nguyễn Huy Tưởng, Hoàng
                    Trung Thông, Chế Lan Viên, Nguyễn Xuân Sanh, Học Phi, Nguyễn
                    Đỗ Cung (hàng trên); Nam Cao, Nguyên Hồng, Kim Lân, Nguyễn
                    Đình Thi (hàng dưới)
                  </p>
                </div>
                <div className="role-image-item">
                  <img src="/hat-chobo-doi.jpg" alt="Hát cho bộ đội" />
                  <p className="image-caption">
                    Các nhạc sĩ đang biểu diễn trong thời kỳ kháng chiến chống
                    Pháp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Role;
