import "./Page.css";

const Development = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">
          <span style={{ fontSize: "48px" }}>🌱</span>
        </div>
        <h1 className="page-title">Phát triển Văn hóa</h1>
        <p className="page-subtitle">
          Phương hướng phát triển và bảo tồn văn hóa dân tộc
        </p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Kế thừa và phát huy truyền thống</h2>
          <p>
            Hồ Chí Minh nhấn mạnh việc kế thừa và phát huy truyền thống văn hóa
            dân tộc. Phải giữ gìn những giá trị văn hóa tốt đẹp của dân tộc,
            đồng thời loại bỏ những yếu tố lạc hậu, phản tiến bộ.
          </p>
        </div>

        <div className="content-section">
          <h2>Tiếp thu tinh hoa văn hóa nhân loại</h2>
          <p>
            Bên cạnh việc giữ gìn bản sắc dân tộc, cần tiếp thu có chọn lọc tinh
            hoa văn hóa nhân loại, làm phong phú thêm nền văn hóa dân tộc. Phải
            biết "gạn đục khơi trong", tiếp thu cái tốt, loại bỏ cái xấu.
          </p>
        </div>

        <div className="content-section">
          <h2>Xây dựng nền văn hóa mới</h2>
          <p>
            Mục tiêu là xây dựng nền văn hóa mới tiên tiến, đậm đà bản sắc dân
            tộc - một nền văn hóa vừa mang tính dân tộc, vừa mang tính hiện đại,
            vừa phục vụ nhân dân, vừa phản ánh đúng quy luật khách quan.
          </p>
        </div>

        <div className="development-steps">
          <div className="step-item">
            <div className="step-number">01</div>
            <h3>Bảo tồn</h3>
            <p>Giữ gìn những giá trị văn hóa truyền thống tốt đẹp</p>
          </div>

          <div className="step-item">
            <div className="step-number">02</div>
            <h3>Tiếp thu</h3>
            <p>Học hỏi tinh hoa văn hóa nhân loại một cách có chọn lọc</p>
          </div>

          <div className="step-item">
            <div className="step-number">03</div>
            <h3>Sáng tạo</h3>
            <p>Xây dựng nền văn hóa mới phù hợp với thời đại</p>
          </div>

          <div className="step-item">
            <div className="step-number">04</div>
            <h3>Phát triển</h3>
            <p>Không ngừng phát triển và hoàn thiện nền văn hóa</p>
          </div>
        </div>

        <div className="highlight-box">
          <p className="highlight-text">
            "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì
            phải trồng người"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Development;
