import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const sections = [
    {
      path: '/gioi-thieu',
      title: 'Giới thiệu',
      icon: '📚',
      description: 'Tổng quan về Tư tưởng Hồ Chí Minh về văn hóa',
      color: '#991a14'
    },
    {
      path: '/ban-chat',
      title: 'Bản chất Văn hóa',
      icon: '🎭',
      description: 'Hiểu về bản chất và định nghĩa văn hóa theo quan điểm Hồ Chí Minh',
      color: '#991a14'
    },
    {
      path: '/nguyen-tac',
      title: 'Nguyên tắc Xây dựng',
      icon: '🏛️',
      description: 'Các nguyên tắc cơ bản trong xây dựng nền văn hóa mới',
      color: '#991a14'
    },
    {
      path: '/vai-tro',
      title: 'Vai trò Văn hóa',
      icon: '🌟',
      description: 'Vai trò và ý nghĩa của văn hóa trong đời sống xã hội',
      color: '#991a14'
    },
    {
      path: '/phat-trien',
      title: 'Phát triển Văn hóa',
      icon: '🌱',
      description: 'Phương hướng phát triển và bảo tồn văn hóa dân tộc',
      color: '#991a14'
    },
    {
      path: '/di-san',
      title: 'Di sản Tư tưởng',
      icon: '💎',
      description: 'Giá trị và ý nghĩa thời đại của tư tưởng văn hóa Hồ Chí Minh',
      color: '#991a14'
    }
  ]

  const quotes = [
    {
      text: "Văn hóa soi đường cho quốc dân đi",
      author: "Hồ Chí Minh"
    },
    {
      text: "Văn hóa phải gắn liền với đời sống",
      author: "Hồ Chí Minh"
    },
    {
      text: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
      author: "Hồ Chí Minh"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-image"></div>
          <div className="hero-overlay"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Nghiên cứu</span>
            <span className="title-line highlight">Tư tưởng Hồ Chí Minh</span>
            <span className="title-line">về Văn hóa</span>
          </h1>
          <p className="hero-subtitle">
            Khám phá hệ thống quan điểm sâu sắc về văn hóa của Chủ tịch Hồ Chí Minh
          </p>
          <div className="hero-buttons">
            <Link to="/gioi-thieu" className="btn-primary">
              Bắt đầu khám phá
            </Link>
            <Link to="/di-san" className="btn-secondary">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="sections-grid">
        <div className="container">
          <h2 className="section-title">Nội dung nghiên cứu</h2>
          <div className="cards-grid">
            {sections.map((section, index) => (
              <Link
                key={section.path}
                to={section.path}
                className="section-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">{section.icon}</div>
                <h3 className="card-title">{section.title}</h3>
                <p className="card-description">{section.description}</p>
                <div className="card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="quotes-section">
        <div className="container">
          <h2 className="section-title">Những câu nói nổi tiếng</h2>
          <div className="quotes-grid">
            {quotes.map((quote, index) => (
              <div key={index} className="quote-card">
                <div className="quote-icon">💬</div>
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

