import { useState } from 'react'
import './Page.css'

const Essence = () => {
  const [activeRelation, setActiveRelation] = useState(null)

  const relations = [
    {
      id: 'kinh-te',
      title: 'Văn hóa với Kinh tế',
      icon: '💰',
      content: 'Văn hóa và kinh tế có mối quan hệ biện chứng, tác động qua lại lẫn nhau. Kinh tế là nền tảng vật chất, còn văn hóa là động lực tinh thần thúc đẩy phát triển kinh tế.'
    },
    {
      id: 'chinh-tri',
      title: 'Văn hóa với Chính trị',
      icon: '🏛️',
      content: 'Văn hóa gắn liền với chính trị, phục vụ mục tiêu chính trị cách mạng. Văn hóa phải đi sâu vào tâm lý quốc dân, trở thành động lực xây dựng cuộc sống mới.'
    },
    {
      id: 'xa-hoi',
      title: 'Văn hóa với Xã hội',
      icon: '👥',
      content: 'Văn hóa là nền tảng tinh thần của xã hội, góp phần xây dựng con người mới, xã hội mới. Văn hóa phải phục vụ nhân dân, nâng cao dân trí.'
    },
    {
      id: 'dao-duc',
      title: 'Văn hóa với Đạo đức',
      icon: '✨',
      content: 'Văn hóa và đạo đức có mối quan hệ mật thiết. Văn hóa góp phần giáo dục đạo đức, hình thành nhân cách con người, xây dựng lối sống văn minh.'
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
              của Người, cần nhìn nhận văn hóa qua hệ quy chiếu đa chiều với 4 cách tiếp cận cốt lõi.
            </p>
          </div>

          <div className="large-quote-box">
            <div className="quote-icon-large">
              <img src="/flag.png" alt="Cờ Việt Nam" />
            </div>
            <blockquote className="large-quote-text">
              "Vì lẽ sinh tồn cũng như mục đích của cuộc sống, loài người mới sáng tạo và phát minh ra ngôn ngữ, 
              chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật... Toàn bộ những sáng tạo và 
              phát minh đó tức là văn hóa."
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
                <p className="quote-source">
                  Bác Hồ nói chuyện với các chiến sĩ Đại đoàn quân Tiên Phong tại đền Giếng, Đền Hùng, Phú Thọ, ngày 19-9-1954.
                </p>
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
        </section>
      </div>
    </div>
  )
}

export default Essence
