import './Page.css'

const Principles = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">🏛️</div>
        <h1 className="page-title">Nguyên tắc Xây dựng</h1>
        <p className="page-subtitle">Các nguyên tắc cơ bản trong xây dựng nền văn hóa mới</p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Ba nguyên tắc cơ bản</h2>
          <p>
            Hồ Chí Minh đề ra ba nguyên tắc cơ bản trong xây dựng nền văn hóa mới: 
            <strong> "Dân tộc hóa, đại chúng hóa, khoa học hóa"</strong>
          </p>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="principle-number">1</div>
            <h3>Dân tộc hóa</h3>
            <p>
              Văn hóa phải mang bản sắc dân tộc, thể hiện tinh thần, truyền thống và giá trị của dân tộc Việt Nam. 
              Phải giữ gìn và phát huy những giá trị văn hóa tốt đẹp của dân tộc.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-number">2</div>
            <h3>Đại chúng hóa</h3>
            <p>
              Văn hóa phải phục vụ đại chúng, phục vụ nhân dân lao động. Văn hóa phải dễ hiểu, dễ tiếp thu, 
              phù hợp với trình độ và nhu cầu của đông đảo quần chúng nhân dân.
            </p>
          </div>

          <div className="principle-card">
            <div className="principle-number">3</div>
            <h3>Khoa học hóa</h3>
            <p>
              Văn hóa phải dựa trên nền tảng khoa học, phản ánh đúng quy luật khách quan, 
              loại bỏ những yếu tố mê tín, lạc hậu, phản khoa học.
            </p>
          </div>
        </div>

        <div className="content-section">
          <h2>Mối quan hệ giữa ba nguyên tắc</h2>
          <p>
            Ba nguyên tắc này có mối quan hệ chặt chẽ, bổ sung cho nhau. Dân tộc hóa tạo nên bản sắc, 
            đại chúng hóa đảm bảo tính phổ biến, và khoa học hóa đảm bảo tính tiên tiến của nền văn hóa.
          </p>
        </div>

        <div className="highlight-box">
          <p className="highlight-text">
            "Dân tộc hóa, đại chúng hóa, khoa học hóa" - Ba nguyên tắc vàng trong xây dựng văn hóa
          </p>
        </div>
      </div>
    </div>
  )
}

export default Principles

