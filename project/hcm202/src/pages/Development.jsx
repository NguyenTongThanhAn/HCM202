import { useState } from "react";
import "./Page.css";
import "./Development.css";

const Development = () => {
  const [activeTab, setActiveTab] = useState("timeline");
  const [practiceSubPage, setPracticeSubPage] = useState("positive"); // positive or negative

  const negativeIssues = [
    {
      id: "flexing",
      title: 'Trào lưu "Flexing" và Chủ nghĩa vật chất',
      icon: "💰",
      color: "#e74c3c",
      image: "https://images.unsplash.com/photo-1553729459-uj6qpxhhv5s?w=400",
      description:
        "Xu hướng khoe khoang tài sản, lối sống xa hoa trên mạng xã hội. Đề cao vật chất, coi nhẹ giá trị tinh thần và đạo đức.",
      examples: [
        "Khoe siêu xe, hàng hiệu trên TikTok, Instagram",
        "Đo giá trị con người bằng tài sản sở hữu",
        "Lối sống hưởng thụ, thực dụng trong giới trẻ",
      ],
    },
    {
      id: "phongbat",
      title: 'Thảm họa "Phông bạt" và Bê bối từ thiện',
      icon: "🎭",
      color: "#9b59b6",
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400",
      description:
        "Vụ bê bối sao kê từ thiện năm 2024 phơi bày thực trạng giả dối, lợi dụng lòng tin của cộng đồng để trục lợi cá nhân.",
      examples: [
        "Khai khống số tiền từ thiện để đánh bóng tên tuổi",
        "Lợi dụng thiên tai, dịch bệnh để PR bản thân",
        "Mất niềm tin vào hoạt động từ thiện chính đáng",
      ],
    },
    {
      id: "nghiadia",
      title: '"Nghĩa địa" dự án công nghìn tỷ',
      icon: "🏚️",
      color: "#34495e",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400",
      description:
        "Nhiều công trình văn hóa, thể thao quy mô lớn bị bỏ hoang, xuống cấp sau khi tổ chức sự kiện. Lãng phí ngân sách nhà nước.",
      examples: [
        "Sân vận động, nhà thi đấu bỏ hoang sau SEA Games",
        "Công trình kỷ niệm xây xong không sử dụng",
        "Thiếu quy hoạch bền vững cho các dự án văn hóa",
      ],
    },
    {
      id: "hinhthuc",
      title: "Bệnh hình thức trong tổ chức sự kiện",
      icon: "🎪",
      color: "#e67e22",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      description:
        "Tổ chức sự kiện văn hóa chỉ chú trọng hình thức bề ngoài, thiếu chiều sâu nội dung, không mang lại giá trị thực chất.",
      examples: [
        "Lễ hội hoành tráng nhưng nội dung nghèo nàn",
        "Chạy theo số lượng, bỏ qua chất lượng",
        "Tốn kém ngân sách cho màn trình diễn ngắn hạn",
      ],
    },
    {
      id: "vocam",
      title: 'Hội chứng "Vô cảm" trong xã hội',
      icon: "😶",
      color: "#7f8c8d",
      image:
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400",
      description:
        "Thái độ thờ ơ, lãnh đạm trước nỗi đau và khó khăn của người khác. Mất dần tình người và sự sẻ chia trong cộng đồng.",
      examples: [
        "Đứng quay video thay vì cứu người gặp nạn",
        "Thờ ơ với bạo lực học đường, gia đình",
        "Sống khép kín, thiếu kết nối cộng đồng",
      ],
    },
    {
      id: "toxic",
      title: 'Văn hóa ứng xử "Độc hại" trên mạng',
      icon: "💀",
      color: "#c0392b",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400",
      description:
        "Bạo lực ngôn từ, tấn công cá nhân, lan truyền tin giả trên không gian mạng. Gây tổn thương tinh thần nghiêm trọng.",
      examples: [
        "Cyberbullying dẫn đến trầm cảm, tự tử",
        "Tấn công tập thể (cancel culture) người nổi tiếng",
        "Lan truyền tin giả, kích động thù hận",
      ],
    },
    {
      id: "metindoan",
      title: "Mê tín dị đoan thời 4.0",
      icon: "🔮",
      color: "#8e44ad",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      description:
        "Sự trỗi dậy của các hình thức mê tín dị đoan mới, núp bóng tâm linh, khai thác niềm tin của người dân để trục lợi.",
      examples: [
        '"Thầy" tự xưng chữa bách bệnh, giải hạn',
        "Trả tiền triệu cho dịch vụ xem bói online",
        "Tin đồn thất thiệt về thế giới tâm linh",
      ],
    },
    {
      id: "thamnhung",
      title: "Tham nhũng trong lĩnh vực văn hóa",
      icon: "💸",
      color: "#2c3e50",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400",
      description:
        "Lợi dụng chức vụ, quyền hạn trong quản lý văn hóa để trục lợi cá nhân. Thất thoát ngân sách, ảnh hưởng uy tín ngành.",
      examples: [
        "Tham ô trong các dự án bảo tồn di sản",
        "Nhận hối lộ cấp phép tổ chức sự kiện",
        "Lạm dụng quỹ phát triển văn hóa",
      ],
    },
    {
      id: "luoibieng",
      title: "Lối sống lười biếng và ỷ lại",
      icon: "😴",
      color: "#95a5a6",
      image:
        "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=400",
      description:
        "Tâm lý trông chờ, ỷ lại vào nhà nước, gia đình. Thiếu tinh thần tự lực, tự cường trong phát triển bản thân và cộng đồng.",
      examples: [
        "Chờ đợi hỗ trợ thay vì chủ động vươn lên",
        "Thiếu động lực học tập, làm việc",
        "Đổ lỗi cho hoàn cảnh, không tự chịu trách nhiệm",
      ],
    },
  ];

  const milestones = [
    {
      year: "1943",
      title: "Đề cương Văn hóa Việt Nam - Cương lĩnh đầu tiên",
      icon: "📜",
      color: "#991a14",
      image: "/decuongvanhoa.jpg", // Thêm URL ảnh vào đây
      content: [
        "Tháng 2/1943, bản Đề cương Văn hóa Việt Nam do Tổng Bí thư Trường Chinh soạn thảo được thông qua.",
        'Đây được coi là "Cương lĩnh đầu tiên của Đảng về văn hóa", đặt nền tảng tư tưởng và học thuật cho nền văn hóa mới.',
        "Xác lập 3 nguyên tắc vận động cốt lõi: Dân tộc hóa - Khoa học hóa - Đại chúng hóa.",
        "Sứ mệnh: Thức tỉnh, tập hợp giới trí thức và quần chúng tham gia mặt trận giải phóng dân tộc.",
      ],
    },
    {
      year: "1946",
      title: "Văn hóa soi đường cho quốc dân đi",
      icon: "💡",
      color: "#e67e22",
      image: "/hoi-nghi-van-hoa.jpg", // Thêm URL ảnh vào đây
      content: [
        'Ngày 24/11/1946, tại Hội nghị Văn hóa toàn quốc lần thứ nhất, Chủ tịch Hồ Chí Minh đưa ra luận điểm: "Văn hóa phải soi đường cho quốc dân đi".',
        "Người khẳng định văn hóa có liên lạc mật thiết với chính trị và phải đi sâu vào tâm lý quốc dân.",
        "Nhiệm vụ cấp bách: Văn hóa phải sửa đổi được các thói hư tật xấu và xây dựng lý tưởng tự chủ, độc lập.",
      ],
    },
    {
      year: "1998",
      title: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
      icon: "🎯",
      color: "#27ae60",
      image: "/festival-hue.jpg", // Thêm URL ảnh vào đây
      content: [
        "Nghị quyết Trung ương 5 (khóa VIII) năm 1998 đánh dấu bước ngoặt trong tư duy lý luận thời kỳ Đổi mới.",
        "Xác định vai trò kép: Văn hóa vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội.",
        'Định hình diện mạo văn hóa Việt Nam: "Tiên tiến, đậm đà bản sắc dân tộc" - kim chỉ nam để hòa nhập mà không hòa tan.',
      ],
    },
    {
      year: "2014",
      title: "Văn hóa là sức mạnh nội sinh quan trọng",
      icon: "💪",
      color: "#2980b9",
      image: "/hoi-nghi-9.jpg", // Thêm URL ảnh vào đây
      content: [
        "Nghị quyết Trung ương 9 (khóa XI) năm 2014 nhấn mạnh yêu cầu phát triển bền vững.",
        "Nâng tầm quan điểm: Văn hóa thực sự trở thành nền tảng tinh thần vững chắc của xã hội.",
        'Khẳng định văn hóa là "sức mạnh nội sinh" để bảo vệ Tổ quốc.',
        "Mục tiêu: Xây dựng con người Việt Nam phát triển toàn diện, bồi dưỡng nhân cách, đạo đức.",
      ],
    },
    {
      year: "2021",
      title: "Chấn hưng văn hóa trong kỷ nguyên số",
      icon: "🚀",
      color: "#9b59b6",
      image: "/tbt.jpg", // Thêm URL ảnh vào đây
      content: [
        'Đại hội XIII: Xác định "Phát huy sức mạnh mềm của văn hóa Việt Nam" và khát vọng phát triển đất nước phồn vinh.',
        'Hội nghị Văn hóa toàn quốc 2021: Tổng Bí thư Nguyễn Phú Trọng kêu gọi "Chấn hưng văn hóa".',
        "Xây dựng hệ giá trị quốc gia, hệ giá trị gia đình và chuẩn mực con người Việt Nam thời đại mới.",
        "Chiến lược mới: Phát triển Công nghiệp văn hóa, xây dựng văn hóa số và văn hóa doanh nghiệp.",
      ],
    },
  ];

  const achievements = [
    {
      id: "culture",
      title: "Công nghiệp Văn hóa & Du lịch",
      icon: "🎭",
      color: "#991a14",
      stats: [
        { value: "44 tỷ USD", label: "Giá trị sản xuất bình quân" },
        { value: "4,4%", label: "Đóng góp GDP" },
        { value: "7,4%", label: "Tăng trưởng lao động/năm" },
      ],
      highlights: [
        "Công nghiệp văn hóa trở thành xu hướng và động lực tăng trưởng quan trọng",
        "Du lịch đóng góp 6-8% GDP, là điểm sáng phục hồi sau đại dịch",
        "Giai đoạn 2021-2024: Đón 33,7 triệu lượt khách quốc tế",
        "Việt Nam liên tục được vinh danh điểm đến hàng đầu châu Á",
      ],
    },
    {
      id: "sports",
      title: "Thể thao & Sức khỏe Toàn dân",
      icon: "🏆",
      color: "#27ae60",
      stats: [
        { value: "Lan tỏa", label: "Phong trào rèn luyện" },
        { value: "Tăng cao", label: "CLB thể thao" },
        { value: "Tiến bộ", label: "Thành tích quốc tế" },
      ],
      highlights: [
        'Cuộc vận động "Toàn dân rèn luyện thân thể theo gương Bác Hồ vĩ đại"',
        "Phong trào lan tỏa trong học sinh, sinh viên, lực lượng vũ trang",
        "Đạt nhiều tiến bộ tại các kỳ đại hội thể thao khu vực và châu lục",
        "Khơi dậy niềm tự hào dân tộc mạnh mẽ",
      ],
    },
    {
      id: "diplomacy",
      title: "Đối ngoại & Truyền thông",
      icon: "🌏",
      color: "#2980b9",
      stats: [
        { value: "54", label: "Điều ước quốc tế ký kết" },
        { value: "5 năm", label: "Hợp tác chiều sâu" },
        { value: "Tiên phong", label: "Báo chí số" },
      ],
      highlights: [
        'Chuyển từ "giao lưu" đơn thuần sang "hợp tác đích thực"',
        "Ký kết 54 điều ước và thỏa thuận quốc tế trong 5 năm",
        'Báo chí giữ sứ mệnh "Mạch dẫn tri thức - Kết nối niềm tin"',
        "Truyền thông trở thành phần quan trọng của công nghiệp văn hóa",
      ],
    },
  ];

  return (
    <div className="page development-page">
      {/* Tab Navigation */}
      <div className="development-tabs">
        <button
          className={`dev-tab ${activeTab === "timeline" ? "active" : ""}`}
          onClick={() => setActiveTab("timeline")}
        >
          <span className="tab-icon">📅</span>
          <span>Vận dụng</span>
        </button>
        <button
          className={`dev-tab ${activeTab === "achievements" ? "active" : ""}`}
          onClick={() => setActiveTab("achievements")}
        >
          <span className="tab-icon">🏅</span>
          <span>Thực tiễn</span>
        </button>
      </div>

      <div className="page-content">
        {/* Vận dụng Tab */}
        {activeTab === "timeline" && (
          <div className="timeline-section">
            <div className="page-header">
              <div className="page-icon">📜</div>
              <h1 className="page-title">
                Những chặng đường văn hóa dưới sự lãnh đạo của Đảng
              </h1>
              <p className="page-subtitle">
                Từ Đề cương Văn hóa 1943 đến kỷ nguyên Chấn hưng văn hóa
              </p>
            </div>

            <div className="timeline-container">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  style={{ "--milestone-color": milestone.color }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-icon">{milestone.icon}</div>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-content">
                      <h3 className="timeline-title">{milestone.title}</h3>
                      <ul className="timeline-list">
                        {milestone.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="timeline-image">
                      {milestone.image ? (
                        <img src={milestone.image} alt={milestone.title} />
                      ) : (
                        <div className="timeline-image-placeholder">
                          <span>{milestone.icon}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Thực tiễn Tab */}
        {activeTab === "achievements" && (
          <div className="achievements-section">
            {/* Tích cực - Positive */}
            {practiceSubPage === "positive" && (
              <>
                <div className="page-header">
                  <div className="page-icon">🏆</div>
                  <h1 className="page-title" style={{ whiteSpace: "nowrap" }}>
                    Thành tựu Văn hóa - Thể thao - Du lịch
                  </h1>
                  <p className="page-subtitle">
                    Ngành văn hóa, thể thao và du lịch đạt được nhiều kết quả
                    quan trọng (2021-2026)
                  </p>
                </div>

                <div className="achievements-grid">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="achievement-card"
                      style={{ "--card-color": achievement.color }}
                    >
                      <div className="achievement-header">
                        <span className="achievement-icon">
                          {achievement.icon}
                        </span>
                        <h3>{achievement.title}</h3>
                      </div>

                      <div className="achievement-stats">
                        {achievement.stats.map((stat, index) => (
                          <div key={index} className="stat-item">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <ul className="achievement-highlights">
                        {achievement.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Next button */}
                <div className="subpage-navigation">
                  <button
                    className="next-page-btn"
                    onClick={() => setPracticeSubPage("negative")}
                  >
                    <span>Xem mặt tiêu cực</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </>
            )}

            {/* Tiêu cực - Negative */}
            {practiceSubPage === "negative" && (
              <>
                <div className="page-header">
                  <div className="page-icon">⚠️</div>
                  <h1 className="page-title">
                    Những biểu hiện tiêu cực trong văn hóa đời sống
                  </h1>
                  <p className="page-subtitle">
                    Nhận diện các vấn đề lệch chuẩn cần khắc phục (2024-2025)
                  </p>
                </div>

                <div className="negative-content">
                  <div className="negative-intro">
                    <p>
                      Mặc dù tư tưởng "Văn hóa soi đường" luôn được khẳng định
                      là kim chỉ nam, nhưng thực tế đời sống văn hóa - xã hội
                      đang xuất hiện những mảng tối đáng báo động, đi ngược lại
                      lời răn dạy của Chủ tịch Hồ Chí Minh.
                    </p>
                  </div>

                  <div className="negative-grid">
                    {negativeIssues.map((issue) => (
                      <div
                        key={issue.id}
                        className="negative-card"
                        style={{ "--issue-color": issue.color }}
                      >
                        <div className="negative-card-image">
                          <div className="negative-card-overlay">
                            <span className="negative-card-icon">
                              {issue.icon}
                            </span>
                          </div>
                        </div>
                        <div className="negative-card-content">
                          <h3 className="negative-card-title">{issue.title}</h3>
                          <p className="negative-card-desc">
                            {issue.description}
                          </p>
                          <ul className="negative-card-examples">
                            {issue.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back button */}
                <div className="subpage-navigation">
                  <button
                    className="prev-page-btn"
                    onClick={() => setPracticeSubPage("positive")}
                  >
                    <span className="btn-arrow">←</span>
                    <span>Quay lại mặt tích cực</span>
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Development;
