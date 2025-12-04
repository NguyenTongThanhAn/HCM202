import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const sections = [
    {
      path: '/ban-chat',
      title: 'Khái niệm và Bản chất',
      icon: '🎭',
      description: 'Một số nhận thức chung về văn hóa và quan hệ giữa văn hóa với các lĩnh vực khác',
      color: '#991a14'
    },
    {
      path: '/vai-tro',
      title: 'Vai trò',
      icon: '🌟',
      description: 'Quan điểm của Hồ Chí Minh về vai trò của văn hóa',
      color: '#991a14'
    },
    {
      path: '/nguyen-tac',
      title: 'Nền văn hóa mới',
      icon: '🏛️',
      description: 'Quan điểm Hồ Chí Minh về xây dựng nền văn hóa mới',
      color: '#991a14'
    },
    {
      path: '/phat-trien',
      title: 'Vận dụng và Thực tiễn',
      icon: '🌱',
      description: 'Những chặng đường văn hóa dưới sự lãnh đạo của Đảng và thực trạng hiện nay',
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
    },
    {
      text: "Dân ta phải biết sử ta. Cho tường gốc tích nước nhà Việt Nam",
      author: "Hồ Chí Minh"
    },
    {
      text: "Từ trong quần chúng ra. Về sâu trong quần chúng",
      author: "Hồ Chí Minh"
    },
    {
      text: "Kháng chiến hóa văn hóa, văn hóa hóa kháng chiến",
      author: "Hồ Chí Minh"
    },
    {
      text: "Văn hóa, nghệ thuật cũng như mọi hoạt động khác, không thể đứng ngoài, mà phải ở trong kinh tế và chính trị",
      author: "Hồ Chí Minh"
    }
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => {
        // Chỉ lướt đến câu cuối cùng có thể hiển thị 3 câu
        const maxIndex = quotes.length - 3
        if (prev >= maxIndex) {
          return 0 // Quay về đầu
        }
        return prev + 1
      })
    }, 4000) // Chuyển slide mỗi 4 giây

    return () => clearInterval(interval)
  }, [isAutoPlaying, quotes.length])

  const goToNext = () => {
    setCurrentQuoteIndex((prev) => {
      const maxIndex = quotes.length - 3
      if (prev >= maxIndex) {
        return 0 // Quay về đầu
      }
      return prev + 1
    })
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentQuoteIndex((prev) => {
      if (prev <= 0) {
        return quotes.length - 3 // Quay về vị trí cuối có thể hiển thị 3 câu
      }
      return prev - 1
    })
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    // Đảm bảo index không vượt quá giới hạn để hiển thị 3 câu
    const maxIndex = Math.max(0, quotes.length - 3)
    setCurrentQuoteIndex(Math.min(index, maxIndex))
    setIsAutoPlaying(false)
  }

  // Tính toán transform để di chuyển carousel
  const getTransform = () => {
    const slideWidth = 100 / 3 // Mỗi slide chiếm 33.333%
    return `translateX(-${currentQuoteIndex * slideWidth}%)`
  }

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
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <h2 className="section-title">TỔNG QUAN CỦA TƯ TƯỞNG HỒ CHÍ MINH VỀ VĂN HÓA</h2>
          <div className="overview-content">
            <div className="overview-image-wrapper">
              <img 
                src="/tong-quat-trang-chu.jpg" 
                alt="Tổng quan Tư tưởng Hồ Chí Minh về Văn hóa" 
                className="overview-image"
              />
            </div>
            <div className="overview-text-wrapper">
              <p className="overview-text">
                Chủ tịch Hồ Chí Minh – Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam – là biểu tượng cao đẹp của sự kết tinh giữa truyền thống văn hóa dân tộc ngàn đời với tinh hoa văn hóa nhân loại. Tư tưởng văn hóa của Người không chỉ thấm nhuần sâu sắc chủ nghĩa yêu nước và tinh thần quốc tế chân chính, mà còn mang giá trị thực tiễn to lớn trong công cuộc kiến thiết đất nước.
              </p>
              <p className="overview-text">
                Người quan niệm văn hóa phải đi sâu vào tâm lý quốc dân, trở thành động lực xây dựng cuộc sống mới. Đó là nền văn hóa lấy việc nâng cao dân trí, bồi dưỡng nhân cách làm trọng tâm; kiên quyết bài trừ tham nhũng, lãng phí và những thói hư tật xấu để xây dựng xã hội văn minh. Mục tiêu tối thượng của văn hóa, theo tư tưởng của Người, là làm cho mọi tầng lớp nhân dân đều thấu hiểu trách nhiệm công dân và được thụ hưởng trọn vẹn niềm hạnh phúc chính đáng của con người.
              </p>
            </div>
          </div>
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

      {/* Quotes Section - Carousel */}
      <section className="quotes-section">
        <div className="container">
          <h2 className="section-title">Những câu nói nổi tiếng</h2>
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: getTransform() }}
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="quote-card">
                      <div className="quote-icon">
                        <img src="/flag.png" alt="Cờ Việt Nam" />
                      </div>
                      <p className="quote-text">"{quote.text}"</p>
                      <p className="quote-author">— {quote.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious}>
              ‹
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={goToNext}>
              ›
            </button>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {quotes.map((_, index) => {
                // Chỉ hiển thị dot cho các vị trí có thể hiển thị 3 câu
                const maxIndex = quotes.length - 3
                if (index > maxIndex) return null
                
                return (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentQuoteIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

