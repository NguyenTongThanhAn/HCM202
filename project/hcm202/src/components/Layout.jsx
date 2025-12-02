import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: '🏠' },
    { path: '/gioi-thieu', label: 'Giới thiệu', icon: '📚' },
    { path: '/ban-chat', label: 'Bản chất Văn hóa', icon: '🎭' },
    { path: '/nguyen-tac', label: 'Nguyên tắc', icon: '🏛️' },
    { path: '/vai-tro', label: 'Vai trò', icon: '🌟' },
    { path: '/phat-trien', label: 'Phát triển', icon: '🌱' },
    { path: '/di-san', label: 'Di sản', icon: '💎' },
  ]

  return (
    <div className="layout">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/" className="fpt-logo-wrapper">
              <img 
                src="/logo.jpg" 
                alt="FPT Education" 
                className="fpt-logo-img"
                style={{ display: 'block', maxHeight: '70px', width: 'auto' }}
              />
            </Link>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Nghiên cứu Tư tưởng Hồ Chí Minh về Văn hóa</p>
          <p className="footer-subtitle">Giữ gìn và phát huy giá trị văn hóa dân tộc</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

