import { useState } from "react";
import "./Heritage.css";

const Heritage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tất cả", icon: "🏆" },
    { id: "world", label: "Di sản Thế giới", icon: "🌍" },
    { id: "intangible", label: "Di sản Phi vật thể", icon: "🎭" },
    { id: "documentary", label: "Di sản Tư liệu", icon: "📜" },
  ];

  const worldHeritage = [
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
    {
      id: 3,
      name: "Đô thị cổ Hội An",
      image: "/heritage/hoian.jpg",
    },
    {
      id: 4,
      name: "Thánh địa Mỹ Sơn",
      image: "/heritage/myson.jpg",
    },
    {
      id: 5,
      name: "Vườn Quốc gia Phong Nha - Kẻ Bàng",
      image: "/heritage/phongnha.jpg",
    },
    {
      id: 6,
      name: "Khu trung tâm Hoàng thành Thăng Long - Hà Nội",
      image: "/heritage/thanglong.jpg",
    },
    {
      id: 7,
      name: "Thành Nhà Hồ",
      image: "/heritage/thanhnhaho.jpg",
    },
    {
      id: 8,
      name: "Quần thể Danh thắng Tràng An",
      image: "/heritage/trangan.jpg",
    },
    {
      id: 9,
      name: "Quần thể Di tích và Danh thắng Yên Tử - Vĩnh Nghiêm - Côn Sơn, Kiếp Bạc",
      image: "/heritage/yentu.jpg",
    },
  ];

  const intangibleHeritage = [
    {
      id: 1,
      name: "Nhã nhạc Cung đình Huế",
      image: "/heritage/nhanhachu.jpg",
    },
    {
      id: 2,
      name: "Không gian văn hóa Cồng chiêng Tây Nguyên",
      image: "/heritage/congchieng.jpg",
    },
    {
      id: 3,
      name: "Dân ca Quan họ Bắc Ninh",
      image: "/heritage/quanho.jpg",
    },
    {
      id: 4,
      name: "Hội Gióng ở đền Phù Đổng và đền Sóc",
      image: "/heritage/hoigiong.jpg",
    },
    {
      id: 5,
      name: "Tín ngưỡng thờ cúng Hùng Vương",
      image: "/heritage/hungvuong.jpg",
    },
    {
      id: 6,
      name: "Đờn ca tài tử Nam Bộ",
      image: "/heritage/doncataitu.jpg",
    },
    {
      id: 7,
      name: "Dân ca Ví, Giặm Nghệ Tĩnh",
      image: "/heritage/vigiam.jpg",
    },
    {
      id: 8,
      name: "Nghi lễ và trò chơi Kéo co",
      image: "/heritage/keoco.jpg",
    },
    {
      id: 9,
      name: "Thực hành Tín ngưỡng thờ Mẫu Tam phủ của người Việt",
      image: "/heritage/thomau.jpg",
    },
    {
      id: 10,
      name: "Hát Xoan Phú Thọ",
      image: "/heritage/hatxoan.jpg",
    },
    {
      id: 11,
      name: "Nghệ thuật Bài Chòi Trung Bộ",
      image: "/heritage/baichoi.jpg",
    },
    {
      id: 12,
      name: "Thực hành Then của người Tày, Nùng, Thái",
      image: "/heritage/then.jpg",
    },
    {
      id: 13,
      name: "Nghệ thuật Xòe Thái",
      image: "/heritage/xoethai.jpg",
    },
    {
      id: 14,
      name: "Lễ hội Vía Bà Chúa Xứ núi Sam",
      image: "/heritage/bachuxu.jpg",
    },
  ];

  const urgentHeritage = [
    {
      id: 1,
      name: "Ca trù",
      image: "/heritage/catru.jpg",
    },
    {
      id: 2,
      name: "Nghệ thuật làm gốm của người Chăm",
      image: "/heritage/gomcham.jpg",
    },
  ];

  const documentaryHeritageWorld = [
    {
      id: 1,
      name: "Mộc bản triều Nguyễn",
      image: "/heritage/mocban.jpg",
    },
    {
      id: 2,
      name: "Bia đá các khoa thi Tiến sĩ triều Lê - Mạc",
      image: "/heritage/biada.jpg",
    },
    {
      id: 3,
      name: "Châu bản triều Nguyễn",
      image: "/heritage/chauban.jpg",
    },
    {
      id: 4,
      name: "Những bản đúc nổi trên Chín đỉnh đồng ở Hoàng cung Huế (Cửu Đỉnh)",
      image: "/heritage/cuudinh.jpg",
    },
    {
      id: 5,
      name: "Bộ sưu tập của nhạc sĩ Hoàng Vân",
      image: "/heritage/hoangvan.jpg",
    },
  ];

  const documentaryHeritageAsia = [
    {
      id: 1,
      name: "Mộc bản chùa Vĩnh Nghiêm",
      image: "/heritage/mocbanvinhnghiem.jpg",
    },
    {
      id: 2,
      name: "Thơ văn trên kiến trúc cung đình Huế",
      image: "/heritage/thovanhue.jpg",
    },
    {
      id: 3,
      name: "Mộc bản trường học Phúc Giang",
      image: "/heritage/mocbanphucgiang.jpg",
    },
    {
      id: 4,
      name: "Hoàng Hoa sứ trình đồ",
      image: "/heritage/hoanghoasu.jpg",
    },
    {
      id: 5,
      name: "Bia Ma nhai tại danh thắng Ngũ Hành Sơn",
      image: "/heritage/biamanhai.jpg",
    },
    {
      id: 6,
      name: "Văn bản Hán Nôm làng Trường Lưu",
      image: "/heritage/hannom.jpg",
    },
  ];

  const HeritageCard = ({ item }) => (
    <div className="heritage-card">
      <div className="heritage-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="heritage-image"
          onError={(e) => {
            e.target.src = "/heritage/placeholder.jpg";
          }}
        />
        <div className="heritage-overlay"></div>
      </div>
      <div className="heritage-info">
        <h3 className="heritage-name">{item.name}</h3>
      </div>
    </div>
  );

  return (
    <div className="heritage-page">
      <div className="heritage-header">
        <div className="page-icon">
          <span style={{ fontSize: "48px" }}>🏛️</span>
        </div>
        <h1 className="heritage-title">Di sản Văn hóa Việt Nam</h1>
        <p className="heritage-subtitle">
          Những giá trị văn hóa được UNESCO công nhận
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="heritage-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
          </button>
        ))}
      </div>

      <div className="heritage-content">
        {/* Di sản Thế giới */}
        {(activeFilter === "all" || activeFilter === "world") && (
          <section className="heritage-section">
            <div className="section-header">
              {/* <span className="section-icon">🌍</span> */}
              <h2 className="section-title">
                Hệ thống Di sản Thế giới: Những Kiệt tác của Nhân loại
              </h2>
            </div>
            <div className="heritage-grid">
              {worldHeritage.map((item) => (
                <HeritageCard key={`world-${item.id}`} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Di sản Văn hóa Phi vật thể */}
        {(activeFilter === "all" || activeFilter === "intangible") && (
          <section className="heritage-section">
            <div className="section-header">
              {/* <span className="section-icon">🎭</span> */}
              <h2 className="section-title">
                Di sản Văn hóa Phi vật thể: Hồn cốt của Dân tộc
              </h2>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                Danh sách Di sản Văn hóa Phi vật thể Đại diện của Nhân loại
              </h3>
              <div className="heritage-grid">
                {intangibleHeritage.map((item) => (
                  <HeritageCard key={`intangible-${item.id}`} item={item} />
                ))}
              </div>
            </div>

            <div className="subsection">
              <h3 className="subsection-title urgent">
                Danh sách Di sản Văn hóa Phi vật thể Cần Bảo vệ Khẩn cấp
              </h3>
              <div className="heritage-grid">
                {urgentHeritage.map((item) => (
                  <HeritageCard key={`urgent-${item.id}`} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Di sản Tư liệu */}
        {(activeFilter === "all" || activeFilter === "documentary") && (
          <section className="heritage-section">
            <div className="section-header">
              {/* <span className="section-icon">📜</span> */}
              <h2 className="section-title">
                Di sản Tư liệu (Memory of the World): Ký ức của Quốc gia và Thế
                giới
              </h2>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">Di sản Tư liệu Thế giới</h3>
              <div className="heritage-grid">
                {documentaryHeritageWorld.map((item) => (
                  <HeritageCard key={`doc-world-${item.id}`} item={item} />
                ))}
              </div>
            </div>

            <div className="subsection">
              <h3 className="subsection-title">
                Di sản Tư liệu khu vực Châu Á - Thái Bình Dương
              </h3>
              <div className="heritage-grid">
                {documentaryHeritageAsia.map((item) => (
                  <HeritageCard key={`doc-asia-${item.id}`} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Heritage;
