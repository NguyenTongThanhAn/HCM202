import { useState } from 'react'
import './Page.css'

const Essence = () => {
  const [activeRelation, setActiveRelation] = useState(null)

  const relations = [
    {
      id: 'chinh-tri',
      title: 'Văn hóa với Chính trị',
      icon: '🏛️',
      content: 'Giải phóng chính trị để mở đường cho văn hóa phát triển. Văn hóa phải ở trong chính trị, phục vụ nhiệm vụ chính trị.'
    },
    {
      id: 'kinh-te',
      title: 'Văn hóa với Kinh tế',
      icon: '💰',
      content: 'Những cơ sở hạ tầng của xã hội có kiến thiết rồi, văn hóa mới kiến thiết được. Tuy nhiên, văn hóa có vai trò tác động tích cực trở lại kinh tế, là nguồn lực cho sự khai sáng.'
    },
    {
      id: 'xa-hoi',
      title: 'Văn hóa với Xã hội',
      icon: '👥',
      content: 'Xã hội nào văn hóa thế ấy. Giải phóng xã hội là điều kiện tiên quyết để giải phóng và phát triển văn hóa.'
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-icon">🎭</div>
        <h1 className="page-title">Khái niệm và Bản chất</h1>
        <p className="page-subtitle">Một số nhận thức chung về văn hóa và quan hệ giữa văn hóa với các lĩnh vực khác</p>
      </div>

      <div className="page-content">
        {/* Phần 1: Định nghĩa văn hóa với Quote lớn */}
        <section className="definition-section">
          <div className="definition-intro">
            <h2>Hồ Chí Minh định nghĩa Văn hóa là gì?</h2>
            <p>
              Khác với nhiều quan niệm đương thời thường bó hẹp văn hóa trong phạm vi văn học hay nghệ thuật, 
              Hồ Chí Minh tiếp cận văn hóa dưới một nhãn quan rộng mở và biện chứng. Để thấu hiểu trọn vẹn tư tưởng 
              của Người, cần nhìn nhận văn hóa qua hệ quy chiếu đa chiều với 4 cách tiếp cận cốt lõi:
            </p>
          </div>

          <div className="approaches-grid">
            <div className="approach-card">
              <div className="approach-icon">🌍</div>
              <h3 className="approach-title">Nghĩa rộng</h3>
              <p className="approach-content">
                Văn hóa là tổng hợp mọi phương thức sinh hoạt của con người để sinh tồn và phát triển.
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">🏯</div>
              <h3 className="approach-title">Nghĩa hẹp</h3>
              <p className="approach-content">
                Văn hóa là đời sống tinh thần của xã hội, thuộc kiến trúc thượng tầng.
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">📚</div>
              <h3 className="approach-title">Nghĩa hẹp hơn</h3>
              <p className="approach-content">
                Văn hóa là các hoạt động giáo dục, trường học, xóa nạn mù chữ (thường dùng khi nói với đồng bào miền núi).
              </p>
            </div>
            <div className="approach-card">
              <div className="approach-icon">☭</div>
              <h3 className="approach-title">Theo phương thức sử dụng</h3>
              <p className="approach-content">
                Văn hóa thể hiện qua cách con người sử dụng các công cụ sinh hoạt.
              </p>
            </div>
          </div>

          <div className="large-quote-box">
            <div className="quote-icon-large">
              <img src="/flag.png" alt="Cờ Việt Nam" />
            </div>
            <blockquote className="large-quote-text">
              "Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, 
              chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, những công cụ cho sinh hoạt hằng ngày về mặc, ăn, ở và các phương thức sử dụng. Toàn bộ những sáng tạo và phát minh đó tức là văn hóa. Văn hóa là sự tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn."
            </blockquote>
            <p className="quote-author-large">— Hồ Chí Minh</p>
            <div className="quote-context">
              <p>
                Định nghĩa này được viết ra trong bối cảnh đặc biệt: khi người còn trong nhà tù của Tưởng Giới Thạch 
                (Tháng 8/1943) và trước cả khi UNESCO được thành lập.
              </p>
            </div>
          </div>
        </section>

        {/* Phần 2: Văn hóa trong mối quan hệ đa chiều */}
        <section className="relations-section">
          <h2 className="section-title">Văn hóa trong mối quan hệ đa chiều</h2>
          <div className="relations-grid">
            {relations.map((relation) => (
              <div
                key={relation.id}
                className={`relation-card ${activeRelation === relation.id ? 'active' : ''}`}
                onClick={() => setActiveRelation(activeRelation === relation.id ? null : relation.id)}
              >
                <div className="relation-icon">{relation.icon}</div>
                <h3 className="relation-title">{relation.title}</h3>
                {activeRelation === relation.id && (
                  <div className="relation-content">
                    <p>{relation.content}</p>
                  </div>
                )}
                <div className="relation-indicator">
                  {activeRelation === relation.id ? '▼' : '▶'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phần 3: Giữ gìn Bản sắc & Tiếp thu Tinh hoa */}
        <section className="identity-section">
          <h2 className="section-title">Giữ gìn Bản sắc & Tiếp thu Tinh hoa</h2>
          
          <div className="identity-grid">
            {/* Phần A: Giữ gìn Bản sắc */}
            <div className="identity-card">
              <div className="identity-header">
                <div className="identity-icon">🏛️</div>
                <h3>A. Giữ gìn Bản sắc văn hóa dân tộc</h3>
              </div>
              <div className="identity-content">
                <p>
                  Bản sắc dân tộc là những giá trị văn hóa bền vững, là "thẻ căn cước" để phân biệt dân tộc này 
                  với dân tộc khác. Đây là thành quả của quá trình hàng ngàn năm lao động, chiến đấu và giao lưu 
                  của con người Việt Nam.
                </p>
                <div className="identity-image">
                  <img src="/3a.png" alt="Hồ Chí Minh với nhân dân" />
                  <p className="image-caption">
                    Bác Hồ nói chuyện với các chiến sĩ Đại đoàn quân Tiên Phong tại đền Giếng, Đền Hùng, Phú Thọ, ngày 19-9-1954.
                  </p>
                </div>
                <p className="identity-subtitle">Bản sắc ấy được nhận diện qua hai tầng lớp quan hệ:</p>
                <ul className="identity-list">
                  <li>
                    <strong>Về nội dung:</strong> đó là lòng yêu nước, thương nòi, tinh thần độc lập, tự cường, tự tôn dân tộc...
                  </li>
                  <li>
                    <strong>Về hình thức:</strong> cốt cách văn hóa dân tộc biểu hiện ở ngôn ngữ, phong tục, tập quán, 
                    lễ hội, truyền thống, cách cảm và nghĩ...
                  </li>
                </ul>
                <p>
                  <strong>Quan điểm của Hồ Chí Minh:</strong> Người khẳng định trách nhiệm của chúng ta là phải trân trọng, 
                  khai thác và phát triển những giá trị tốt đẹp của văn hóa dân tộc để làm nền tảng cho sự phát triển. 
                  Tuy nhiên, giữ gìn không có nghĩa là bảo thủ, mà phải đi đôi với việc "triệt để tẩy trừ mọi di hại 
                  nô dịch của văn hóa thực dân, đế quốc".
                </p>
              </div>
              <div className="quote-box-small">
                <blockquote className="small-quote-text">
                  "Dân ta phải biết sử ta<br />
                  Cho tường gốc tích nước nhà Việt Nam"
                </blockquote>
              </div>
            </div>

            {/* Phần B: Tiếp thu Tinh hoa */}
            <div className="identity-card">
              <div className="identity-header">
                <div className="identity-icon">🌍</div>
                <h3>B. Tiếp thu Tinh hoa văn hóa nhân loại</h3>
              </div>
              <div className="identity-content">
                <p>
                  Hồ Chí Minh nhìn nhận quy luật phát triển của văn hóa là sự "tiếp biến" (tiếp nhận và biến đổi). 
                  Người chủ trương xây dựng một nền văn hóa Việt Nam cởi mở, là sự "chung đúc" giữa văn hóa phương Đông và phương Tây.
                </p>
                <p className="identity-subtitle">Nguyên tắc tiếp thu:</p>
                <ul className="identity-list">
                  <li>
                    <strong>Đối tượng:</strong> Nghiên cứu toàn diện văn hóa Đông - Tây, kim - cổ.
                  </li>
                  <li>
                    <strong>Tiêu chí:</strong> "Cái gì hay, cái gì tốt thì ta học lấy" để làm giàu cho mình.
                  </li>
                  <li>
                    <strong>Phương châm:</strong> Phải "tiêu hóa" văn hóa ngoại lai, biến cái của người thành cái của mình, 
                    tránh nguy cơ trở thành "kẻ bắt chước" rập khuôn.
                  </li>
                </ul>
                <div className="highlight-note">
                  <p>
                    Một nhà báo Mỹ từng nhận xét: Cụ Hồ không phải là người dân tộc chủ nghĩa hẹp hòi. Cụ là người yêu mến 
                    văn hóa Pháp trong khi chống thực dân Pháp, biết quý trọng truyền thống cách mạng Mỹ trong khi Mỹ đang 
                    phá hoại đất nước mình.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phần C: Mối quan hệ biện chứng */}
          <div className="dialectical-relation">
            <div className="dialectical-header">
              <div className="dialectical-icon">⚖️</div>
              <h3>C. Mối quan hệ biện chứng</h3>
            </div>
            <div className="dialectical-content-wrapper">
              <div className="dialectical-text">
                <p className="dialectical-intro">
                  Giữa dân tộc và quốc tế có mối quan hệ hữu cơ, trong đó:
                </p>
                <div className="dialectical-points">
                  <div className="dialectical-point">
                    <div className="point-icon">🌳</div>
                    <div className="point-content">
                      <strong>Lấy văn hóa dân tộc làm GỐC:</strong> Đây là điều kiện tiên quyết, là "bộ lọc" để tiếp thu văn hóa bên ngoài.
                    </div>
                  </div>
                  <div className="dialectical-point">
                    <div className="point-icon">🌐</div>
                    <div className="point-content">
                      <strong>Lấy văn hóa nhân loại làm yếu tố BỔ SUNG:</strong> Tiếp thu để văn hóa Việt Nam hợp với tinh thần dân chủ, khoa học và hiện đại.
                    </div>
                  </div>
                </div>
              </div>
              <div className="dialectical-image">
                <img src="/3c.png" alt="Mối quan hệ biện chứng giữa Bản sắc dân tộc và Tinh hoa nhân loại" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Essence
