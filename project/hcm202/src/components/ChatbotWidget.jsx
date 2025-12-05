import { useState, useRef, useEffect } from "react";
import "./ChatbotWidget.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là chatbot hỗ trợ tìm hiểu về tư tưởng văn hóa của Hồ Chí Minh. Bạn có thể hỏi tôi về quan điểm của Bác về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Tôi có thể giúp gì cho bạn?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_KEY = "AIzaSyDaUzSsgv3bjw_U3sDbqf73HcCwrqaPT7I";
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  const systemPrompt = `Chatbot này sẽ trả lời các câu hỏi liên quan đến tư tưởng văn hóa của Hồ Chí Minh. Bao gồm quan điểm của Hồ Chí Minh về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Khi người dùng hỏi về các khía cạnh văn hóa mà Hồ Chí Minh đề cập, chatbot sẽ cung cấp thông tin về các nguyên lý và tư tưởng của ông về việc bảo tồn, phát huy và phát triển văn hóa trong bối cảnh xây dựng xã hội chủ nghĩa, cũng như sự kết hợp giữa văn hóa và chính trị trong sự nghiệp cách mạng.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Xây dựng prompt với lịch sử hội thoại
      const recentMessages = messages.slice(-4); // Lấy 4 tin nhắn gần nhất
      let conversationContext = systemPrompt + "\n\n";

      recentMessages.forEach((msg) => {
        if (msg.role === "user") {
          conversationContext += `Người dùng: ${msg.content}\n\n`;
        } else {
          conversationContext += `Trợ lý: ${msg.content}\n\n`;
        }
      });

      conversationContext += `Người dùng: ${userMessage}\n\nTrợ lý:`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: conversationContext,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response.status, errorData);
        throw new Error(
          `API Error: ${response.status} - ${JSON.stringify(errorData)}`
        );
      }

      const data = await response.json();

      // Kiểm tra cấu trúc response
      if (
        !data.candidates ||
        !data.candidates[0] ||
        !data.candidates[0].content
      ) {
        console.error("Invalid response structure:", data);
        throw new Error("Invalid response from API");
      }

      const aiResponse =
        data.candidates[0].content.parts[0].text ||
        "Xin lỗi, tôi không thể trả lời câu hỏi này. Vui lòng thử lại.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      let errorMessage = "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.";

      // Hiển thị thông báo lỗi chi tiết hơn nếu có
      if (error.message.includes("API Error")) {
        errorMessage =
          "Lỗi kết nối với AI. Vui lòng kiểm tra API key hoặc thử lại sau.";
      } else if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        errorMessage =
          "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet của bạn.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`chatbot-toggle-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Mở chatbot"
      >
        {isOpen ? (
          "✕"
        ) : (
          <img
            src="/robot-assistant.png"
            alt="Chatbot"
            className="chatbot-toggle-icon"
          />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-widget">
          <div className="chatbot-widget-container">
            <div className="chatbot-widget-header">
              <div className="chatbot-widget-title-section">
                <h3 className="chatbot-widget-title">💬 Chatbot AI Hỗ Trợ</h3>
                <p className="chatbot-widget-subtitle">
                  Tư tưởng văn hóa Hồ Chí Minh
                </p>
              </div>
              <button
                className="chatbot-widget-close"
                onClick={() => setIsOpen(false)}
                aria-label="Đóng chatbot"
              >
                ✕
              </button>
            </div>

            <div className="chatbot-widget-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chatbot-message ${message.role}`}>
                  <div className="chatbot-message-avatar">
                    {message.role === "user" ? "👤" : "🤖"}
                  </div>
                  <div className="chatbot-message-content">
                    <div className="chatbot-message-text">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="chatbot-message assistant">
                  <div className="chatbot-message-avatar">🤖</div>
                  <div className="chatbot-message-content">
                    <div className="chatbot-message-text loading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-widget-input-form" onSubmit={sendMessage}>
              <input
                type="text"
                className="chatbot-widget-input"
                placeholder="Nhập câu hỏi của bạn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="chatbot-widget-send-button"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? "⏳" : "📤"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
