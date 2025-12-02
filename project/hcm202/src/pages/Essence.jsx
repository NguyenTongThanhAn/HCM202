import './Page.css'

const Essence = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">🎭</div>
        <h1 className="page-title">Bản chất Văn hóa</h1>
        <p className="page-subtitle">Hiểu về bản chất và định nghĩa văn hóa theo quan điểm Hồ Chí Minh</p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Định nghĩa về văn hóa</h2>
          <p>
            Theo Hồ Chí Minh, văn hóa là toàn bộ những giá trị vật chất và tinh thần do con người sáng tạo ra 
            trong quá trình lịch sử. Văn hóa không chỉ là những sản phẩm nghệ thuật, mà còn bao gồm cả lối sống, 
            cách ứng xử, phong tục tập quán, và các giá trị đạo đức.
          </p>
        </div>

        <div className="content-section">
          <h2>Đặc điểm của văn hóa</h2>
          <ul className="content-list">
            <li>Văn hóa là sản phẩm của con người, do con người sáng tạo</li>
            <li>Văn hóa mang tính lịch sử, được hình thành và phát triển qua thời gian</li>
            <li>Văn hóa có tính dân tộc, phản ánh bản sắc của mỗi dân tộc</li>
            <li>Văn hóa có tính nhân loại, có thể giao lưu và tiếp thu lẫn nhau</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>Mối quan hệ giữa văn hóa và đời sống</h2>
          <p>
            Hồ Chí Minh nhấn mạnh rằng văn hóa phải gắn liền với đời sống, phục vụ nhân dân và phát triển đất nước. 
            Văn hóa không thể tách rời khỏi thực tiễn, mà phải phản ánh và phục vụ cuộc sống của nhân dân.
          </p>
        </div>

        <div className="highlight-box">
          <p className="highlight-text">
            Văn hóa phải gắn liền với đời sống, phục vụ nhân dân và phát triển đất nước
          </p>
        </div>
      </div>
    </div>
  )
}

export default Essence

