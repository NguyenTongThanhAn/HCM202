import { useState, useRef, useEffect, useCallback } from "react";
import "./ChatbotWidget.css";
import { GeminiModel } from "../utils/geminiModel.js";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      role: "assistant",
      content:
        "Xin chào! Tôi là chatbot hỗ trợ tìm hiểu về tư tưởng văn hóa của Hồ Chí Minh. Bạn có thể hỏi tôi về quan điểm của Bác về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Tôi có thể giúp gì cho bạn?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const systemPrompt = `Chatbot này sẽ trả lời các câu hỏi liên quan đến tư tưởng văn hóa của Hồ Chí Minh. Bao gồm quan điểm của Hồ Chí Minh về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Khi người dùng hỏi về các khía cạnh văn hóa mà Hồ Chí Minh đề cập, chatbot sẽ cung cấp thông tin về các nguyên lý và tư tưởng của ông về việc bảo tồn, phát huy và phát triển văn hóa trong bối cảnh xây dựng xã hội chủ nghĩa, cũng như sự kết hợp giữa văn hóa và chính trị trong sự nghiệp cách mạng.`;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, scrollToBottom]);


  // Chuyển đổi messages sang format history của Gemini
  const convertMessagesToHistory = (messages) => {
    const history = [];
    // Bỏ qua tin nhắn đầu tiên (tin nhắn chào mừng)
    const messagesToConvert = messages.slice(1);
    
    // Xử lý từng cặp tin nhắn user-assistant
    for (let i = 0; i < messagesToConvert.length; i++) {
      const currentMsg = messagesToConvert[i];
      const nextMsg = messagesToConvert[i + 1];
      
      if (currentMsg.role === "user") {
        history.push({
          role: "user",
          parts: [{ text: currentMsg.content }]
        });
        
        // Nếu có tin nhắn tiếp theo là assistant thì thêm vào
        if (nextMsg && nextMsg.role === "assistant") {
          history.push({
            role: "model",
            parts: [{ text: nextMsg.content }]
          });
          i++; // Bỏ qua tin nhắn assistant đã xử lý
        }
      }
    }
    
    return history;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Xây dựng history từ messages (lấy 4 cặp tin nhắn gần nhất)
      const recentMessages = messages.slice(-8); // Lấy 8 tin nhắn gần nhất (4 cặp user-assistant)
      const historyChat = convertMessagesToHistory(recentMessages);
      
      // Sử dụng GeminiModel với history
      // System prompt sẽ được truyền vào câu hỏi
      const questionWithContext = systemPrompt + "\n\nCâu hỏi: " + userMessage;

      await GeminiModel.GenerateWithHistory(
        historyChat,
        questionWithContext,
        (responseText) => {
          setMessages((prev) => [
            ...prev,
            { id: Date.now(), role: "assistant", content: responseText },
          ]);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error("Chatbot Error:", error);
      console.error("Error details:", error.message, error.stack);
      
      let errorMessage = "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.";

      // Xử lý các loại lỗi khác nhau
      if (error.message?.includes("403") || error.message?.includes("leaked") || error.message?.includes("API key was reported")) {
        errorMessage = "API key đã bị vô hiệu hóa. Vui lòng kiểm tra và cập nhật API key mới trong file .env (biến VITE_GEMINI_API_KEY).";
      } else if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("API key")) {
        errorMessage = "Lỗi API key không hợp lệ. Vui lòng kiểm tra cấu hình.";
      } else if (error.message?.includes("PERMISSION_DENIED")) {
        errorMessage = "Không có quyền truy cập. Vui lòng kiểm tra API key.";
      } else if (error.message?.includes("API Error")) {
        errorMessage = "Lỗi kết nối với AI. Vui lòng kiểm tra API key hoặc thử lại sau.";
      } else if (
        error.message?.includes("Failed to fetch") ||
        error.message?.includes("NetworkError") ||
        error.message?.includes("network") ||
        error.message?.includes("fetch")
      ) {
        errorMessage = "Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet của bạn.";
      } else if (error.message?.includes("Model") || error.message?.includes("model")) {
        errorMessage = "Lỗi model AI. Vui lòng kiểm tra cấu hình model.";
      } else {
        // Hiển thị lỗi chi tiết hơn để debug
        errorMessage = `Lỗi: ${error.message || "Không xác định được lỗi"}`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: errorMessage,
        },
      ]);
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
              {messages.map((message) => (
                <div key={message.id} className={`chatbot-message ${message.role}`}>
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
                aria-label="Nhập câu hỏi"
                onKeyDown={(e) => {
                  if (e.key === "Escape" && isOpen) {
                    setIsOpen(false);
                  }
                }}
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
