import './Page.css'

const Legacy = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">💎</div>
        <h1 className="page-title">Di sản Tư tưởng</h1>
        <p className="page-subtitle">Giá trị và ý nghĩa thời đại của tư tưởng văn hóa Hồ Chí Minh</p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Giá trị lâu bền</h2>
          <p>
            Tư tưởng Hồ Chí Minh về văn hóa vẫn giữ nguyên giá trị và ý nghĩa thời sự, 
            là kim chỉ nam cho việc xây dựng và phát triển nền văn hóa Việt Nam trong thời đại mới.
          </p>
        </div>

        <div className="content-section">
          <h2>Ý nghĩa trong thời đại mới</h2>
          <p>
            Trong bối cảnh hội nhập quốc tế và toàn cầu hóa, tư tưởng văn hóa Hồ Chí Minh càng có ý nghĩa quan trọng, 
            giúp chúng ta giữ gìn bản sắc dân tộc, đồng thời tiếp thu có chọn lọc tinh hoa văn hóa thế giới.
          </p>
        </div>

        <div className="content-section">
          <h2>Định hướng phát triển</h2>
          <p>
            Tư tưởng Hồ Chí Minh về văn hóa tiếp tục là ngọn đuốc soi đường cho sự phát triển văn hóa Việt Nam, 
            định hướng cho việc xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.
          </p>
        </div>

        <div className="legacy-values">
          <div className="value-card">
            <h3>🌍 Tầm nhìn toàn cầu</h3>
            <p>Tư tưởng văn hóa Hồ Chí Minh có giá trị không chỉ với Việt Nam mà còn với nhân loại</p>
          </div>

          <div className="value-card">
            <h3>⏰ Tính thời đại</h3>
            <p>Vẫn giữ nguyên giá trị và ý nghĩa trong thời đại hiện nay</p>
          </div>

          <div className="value-card">
            <h3>🎯 Tính thực tiễn</h3>
            <p>Là kim chỉ nam cho việc xây dựng và phát triển văn hóa</p>
          </div>

          <div className="value-card">
            <h3>💡 Tính sáng tạo</h3>
            <p>Khuyến khích sự sáng tạo và đổi mới trong văn hóa</p>
          </div>
        </div>

        <div className="highlight-box large">
          <p className="highlight-text">
            Tư tưởng Hồ Chí Minh về văn hóa là di sản tinh thần quý giá, 
            tiếp tục soi sáng con đường phát triển văn hóa Việt Nam trong thời đại mới
          </p>
        </div>
      </div>
    </div>
  )
}

export default Legacy

