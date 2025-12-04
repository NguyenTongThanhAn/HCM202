import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ChatbotWidget from "./ChatbotWidget";
import "./Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Trang chủ", icon: "🏠" },
    { path: "/ban-chat", label: "Khái niệm và Bản chất", icon: "🎭" },
    { path: "/vai-tro", label: "Vai trò", icon: "🌟" },
    { path: "/nguyen-tac", label: "Nền văn hóa mới", icon: "🏛️" },
    { path: "/phat-trien", label: "Vận dụng và Thực tiễn", icon: "🌱" },
    { path: "/quiz", label: "Ôn tập Quiz", icon: "📝" },
    { path: "/crossword", label: "Ô Chữ", icon: "🎯" },
    { path: "/di-san", label: "Di sản", icon: "💎" },
  ];

  return (
    <div className="layout">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/" className="fpt-logo-wrapper">
              <img
                src="/logo.jpg"
                alt="FPT Education"
                className="fpt-logo-img"
                style={{ display: "block", maxHeight: "70px", width: "auto" }}
              />
            </Link>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DỰ ÁN MÔN HỌC TƯ TƯỞNG HỒ CHÍ MINH</h3>
            <p className="footer-code">3W_HCM202_07 - Nhóm 3</p>
          </div>

          <div className="footer-section">
            <p className="footer-description">
              Website là sản phẩm sáng tạo cho môn học HCM202 (Tư tưởng Hồ Chí
              Minh) tại Đại học FPT.
            </p>
          </div>

          <div className="footer-section">
            <a
              href="https://docs.google.com/document/d/1fd_MGseVe2oF3onYDQyhxOHqatSvnUzu4Exu2bHEhR0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              📚 Nguồn tài liệu
            </a>
          </div>

          <div className="footer-copyright"></div>
        </div>
      </footer>

      <ChatbotWidget />
    </div>
  );
};

export default Layout;
