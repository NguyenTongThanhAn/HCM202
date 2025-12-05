import { useState } from "react";
import "./Legacy.css";

const Legacy = () => {
  const [activeSection, setActiveSection] = useState("world");

  const sections = [
    {
      id: "world",
      title: "Di sản Thế giới",
      subtitle: "Những Kiệt tác của Nhân loại",
      icon: "🏛️",
      color: "#991a14",
      items: [
        {
          id: 1,
          name: "Quần thể Di tích Cố đô Huế",
          image: "/heritage/hue.jpg",
        },
        {
          id: 2,
          name: "Vịnh Hạ Long - Quần đảo Cát Bà",
          image: "/heritage/halong.jpg",
        },
        { id: 3, name: "Đô thị cổ Hội An", image: "/heritage/hoian.jpg" },
        { id: 4, name: "Thánh địa Mỹ Sơn", image: "/heritage/myson.jpg" },
        {
          id: 5,
          name: "Vườn Quốc gia Phong Nha - Kẻ Bàng",
          image: "/heritage/phongnha.jpg",
        },
        {
          id: 6,
          name: "Khu trung tâm Hoàng thành Thăng Long",
          image: "/heritage/thanglong.jpg",
        },
        { id: 7, name: "Thành Nhà Hồ", image: "/heritage/thanhnhaho.jpg" },
        {
          id: 8,
          name: "Quần thể Danh thắng Tràng An",
          image: "/heritage/trangan.jpg",
        },
        {
          id: 9,
          name: "Quần thể Di tích Yên Tử - Côn Sơn, Kiếp Bạc",
          image: "/heritage/yentu.jpg",
        },
      ],
    },
    {
      id: "intangible",
      title: "Di sản Phi vật thể",
      subtitle: "Hồn cốt của Dân tộc",
      icon: "🎭",
      color: "#e67e22",
      items: [
        {
          id: 10,
          name: "Nhã nhạc Cung đình Huế",
          image: "/heritage/nhanhac.jpg",
        },
        {
          id: 11,
          name: "Không gian văn hóa Cồng chiêng Tây Nguyên",
          image: "/heritage/congchieng.jpg",
        },
        {
          id: 12,
          name: "Dân ca Quan họ Bắc Ninh",
          image: "/heritage/quanho.jpg",
        },
        {
          id: 13,
          name: "Hội Gióng ở đền Phù Đổng và đền Sóc",
          image: "/heritage/hoigiong.jpg",
        },
        {
          id: 14,
          name: "Tín ngưỡng thờ cúng Hùng Vương",
          image: "/heritage/hungvuong.jpg",
        },
        {
          id: 15,
          name: "Đờn ca tài tử Nam Bộ",
          image: "/heritage/doncataitu.jpg",
        },
        {
          id: 16,
          name: "Dân ca Ví, Giặm Nghệ Tĩnh",
          image: "/heritage/vigiam.jpg",
        },
        {
          id: 17,
          name: "Nghi lễ và trò chơi Kéo co",
          image: "/heritage/keoco.jpg",
        },
        {
          id: 18,
          name: "Thực hành Tín ngưỡng thờ Mẫu Tam phủ",
          image: "/heritage/thomau.jpg",
        },
        { id: 19, name: "Hát Xoan Phú Thọ", image: "/heritage/hatxoan.jpg" },
        {
          id: 20,
          name: "Nghệ thuật Bài Chòi Trung Bộ",
          image: "/heritage/baichoi.jpg",
        },
        {
          id: 21,
          name: "Thực hành Then của người Tày, Nùng, Thái",
          image: "/heritage/then.jpg",
        },
        { id: 22, name: "Nghệ thuật Xòe Thái", image: "/heritage/xoethai.jpg" },
        {
          id: 23,
          name: "Lễ hội Vía Bà Chúa Xứ núi Sam",
          image: "/heritage/bachuaxu.jpg",
        },
        {
          id: 24,
          name: "Ca trù",
          image: "/heritage/catru.jpg",
          note: "Cần bảo vệ khẩn cấp",
        },
        {
          id: 25,
          name: "Nghệ thuật làm gốm của người Chăm",
          image: "/heritage/gomcham.jpg",
          note: "Cần bảo vệ khẩn cấp",
        },
      ],
    },
    {
      id: "documentary",
      title: "Di sản Tư liệu",
      subtitle: "Ký ức của Quốc gia và Thế giới",
      icon: "📜",
      color: "#2980b9",
      items: [
        {
          id: 26,
          name: "Mộc bản triều Nguyễn",
          image: "/heritage/mocban.jpg",
          note: "Thế giới",
        },
        {
          id: 27,
          name: "Bia đá các khoa thi Tiến sĩ triều Lê - Mạc",
          image: "/heritage/biada.jpg",
          note: "Thế giới",
        },
        {
          id: 28,
          name: "Châu bản triều Nguyễn",
          image: "/heritage/chauban.jpg",
          note: "Thế giới",
        },
        {
          id: 29,
          name: "Cửu Đỉnh - Hoàng cung Huế",
          image: "/heritage/cuudinh.jpg",
          note: "Thế giới",
        },
        {
          id: 30,
          name: "Bộ sưu tập của nhạc sĩ Hoàng Vân",
          image: "/heritage/hoangvan.jpg",
          note: "Thế giới",
        },
        {
          id: 31,
          name: "Mộc bản chùa Vĩnh Nghiêm",
          image: "/heritage/vinhnghiem.jpg",
          note: "Châu Á - TBD",
        },
        {
          id: 32,
          name: "Thơ văn trên kiến trúc cung đình Huế",
          image: "/heritage/thovan.jpg",
          note: "Châu Á - TBD",
        },
        {
          id: 33,
          name: "Mộc bản trường học Phúc Giang",
          image: "/heritage/phucgiang.jpg",
          note: "Châu Á - TBD",
        },
        {
          id: 34,
          name: "Hoàng Hoa sứ trình đồ",
          image: "/heritage/hoanghoasu.jpg",
          note: "Châu Á - TBD",
        },
        {
          id: 35,
          name: "Bia Ma nhai tại Ngũ Hành Sơn",
          image: "/heritage/nguhanhson.jpg",
          note: "Châu Á - TBD",
        },
        {
          id: 36,
          name: "Văn bản Hán Nôm làng Trường Lưu",
          image: "/heritage/truongluu.jpg",
          note: "Châu Á - TBD",
        },
      ],
    },
  ];

  const currentSection = sections.find((s) => s.id === activeSection);

  return (
    <div className="legacy-page">
      <div className="legacy-header">
        <div className="legacy-header-content">
          <div className="legacy-icon">🏆</div>
          <h1 className="legacy-title">Di sản Văn hóa Việt Nam</h1>
          <p className="legacy-subtitle">
            Những kiệt tác được UNESCO công nhận - Niềm tự hào của dân tộc Việt
            Nam
          </p>
        </div>
      </div>

      <div className="legacy-content">
        {/* Tab Box */}
        <div className="legacy-tab-box">
          {/* Tab Navigation */}
          <div className="legacy-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`legacy-nav-btn ${
                  activeSection === section.id ? "active" : ""
                }`}
                onClick={() => setActiveSection(section.id)}
                style={{ "--section-color": section.color }}
              >
                <span className="nav-btn-icon">{section.icon}</span>
                <span className="nav-btn-label">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="legacy-tab-content">
            {currentSection && (
              <div className="legacy-section" key={currentSection.id}>
                <div
                  className="section-header"
                  style={{ "--section-color": currentSection.color }}
                >
                  <div className="section-info">
                    <h2 className="section-title">{currentSection.title}</h2>
                    <p className="section-subtitle">
                      {currentSection.subtitle}
                    </p>
                  </div>
                  <div className="section-count">
                    <span className="count-number">
                      {currentSection.items.length}
                    </span>
                    <span className="count-label">di sản</span>
                  </div>
                </div>

                <div className="heritage-gallery">
                  {currentSection.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="heritage-card"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="heritage-image-wrapper">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="heritage-image"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/400x300/${currentSection.color.replace(
                              "#",
                              ""
                            )}/ffffff?text=${encodeURIComponent(
                              item.name.substring(0, 15)
                            )}`;
                          }}
                        />
                        <div className="heritage-number">{index + 1}</div>
                        {item.note && (
                          <div className="heritage-note">{item.note}</div>
                        )}
                      </div>
                      <div className="heritage-info">
                        <h3 className="heritage-name">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
