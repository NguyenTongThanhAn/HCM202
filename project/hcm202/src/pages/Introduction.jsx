import './Page.css'

const Introduction = () => {
  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">📚</div>
        <h1 className="page-title">Giới thiệu</h1>
        <p className="page-subtitle">Tổng quan về Tư tưởng Hồ Chí Minh về văn hóa</p>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Khái quát chung</h2>
          <p>
            Tư tưởng Hồ Chí Minh về văn hóa là một hệ thống quan điểm toàn diện, sâu sắc về vai trò, 
            vị trí và chức năng của văn hóa trong đời sống xã hội và trong sự nghiệp cách mạng. 
            Đây là một trong những di sản tinh thần quý giá mà Chủ tịch Hồ Chí Minh để lại cho dân tộc Việt Nam.
          </p>
        </div>

        <div className="content-section">
          <h2>Bối cảnh lịch sử</h2>
          <p>
            Tư tưởng văn hóa của Hồ Chí Minh được hình thành trong bối cảnh đất nước đang đấu tranh 
            giành độc lập và xây dựng chế độ mới. Người đã kế thừa và phát triển những giá trị văn hóa 
            truyền thống của dân tộc, đồng thời tiếp thu tinh hoa văn hóa nhân loại.
          </p>
        </div>

        <div className="content-section">
          <h2>Ý nghĩa và tầm quan trọng</h2>
          <p>
            Tư tưởng Hồ Chí Minh về văn hóa không chỉ có ý nghĩa lý luận mà còn có giá trị thực tiễn sâu sắc, 
            là kim chỉ nam cho việc xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.
          </p>
        </div>

        <div className="highlight-box">
          <p className="highlight-text">
            "Văn hóa soi đường cho quốc dân đi" - Hồ Chí Minh
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction

