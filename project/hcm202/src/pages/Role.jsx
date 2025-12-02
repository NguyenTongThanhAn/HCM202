import './Page.css'

const Role = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">🌟</div>
        <h1 className="page-title">Vai trò Văn hóa</h1>
        <p className="page-subtitle">Vai trò và ý nghĩa của văn hóa trong đời sống xã hội</p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Vai trò giáo dục</h2>
          <p>
            Văn hóa có vai trò quan trọng trong việc giáo dục, nâng cao dân trí, bồi dưỡng nhân cách con người. 
            Thông qua văn hóa, con người được giáo dục về đạo đức, lối sống, và các giá trị nhân văn.
          </p>
        </div>

        <div className="content-section">
          <h2>Vai trò trong xây dựng xã hội</h2>
          <p>
            Văn hóa góp phần xây dựng xã hội mới, tạo nên môi trường văn hóa lành mạnh, 
            thúc đẩy sự phát triển toàn diện của con người và xã hội.
          </p>
        </div>

        <div className="content-section">
          <h2>Vai trò trong bảo vệ Tổ quốc</h2>
          <p>
            Văn hóa có vai trò quan trọng trong việc bảo vệ Tổ quốc, xây dựng tinh thần yêu nước, 
            ý thức dân tộc, và sức mạnh đoàn kết của toàn dân tộc.
          </p>
        </div>

        <div className="roles-grid">
          <div className="role-item">
            <div className="role-icon">📖</div>
            <h3>Giáo dục con người</h3>
            <p>Nâng cao dân trí, bồi dưỡng nhân cách</p>
          </div>

          <div className="role-item">
            <div className="role-icon">🏗️</div>
            <h3>Xây dựng xã hội</h3>
            <p>Tạo môi trường văn hóa lành mạnh</p>
          </div>

          <div className="role-item">
            <div className="role-icon">🛡️</div>
            <h3>Bảo vệ Tổ quốc</h3>
            <p>Xây dựng tinh thần yêu nước</p>
          </div>

          <div className="role-item">
            <div className="role-icon">🤝</div>
            <h3>Đoàn kết dân tộc</h3>
            <p>Tăng cường sức mạnh đại đoàn kết</p>
          </div>
        </div>

        <div className="highlight-box">
          <p className="highlight-text">
            "Văn hóa soi đường cho quốc dân đi" - Văn hóa là ngọn đuốc soi sáng con đường phát triển
          </p>
        </div>
      </div>
    </div>
  )
}

export default Role

