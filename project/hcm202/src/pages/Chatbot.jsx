import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Xin chào! Tôi là chatbot hỗ trợ tìm hiểu về tư tưởng văn hóa của Hồ Chí Minh. Bạn có thể hỏi tôi về quan điểm của Bác về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Tôi có thể giúp gì cho bạn?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const API_KEY = 'AIzaSyAE2WixFOn-XBm3OqH_AKEbfaWEuMqQtBU'
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

  const systemPrompt = `Chatbot này sẽ trả lời các câu hỏi liên quan đến tư tưởng Hồ Chí Minh về văn hóa. Bao gồm quan điểm của Hồ Chí Minh về văn hóa dân tộc, giáo dục, nghệ thuật, và vai trò của văn hóa trong phát triển xã hội. Khi người dùng hỏi về các khía cạnh văn hóa mà Hồ Chí Minh đề cập, chatbot sẽ cung cấp thông tin về các quan niệm, nguyên lý và tư tưởng của ông về việc bảo tồn, phát huy và phát triển văn hóa trong bối cảnh xây dựng xã hội chủ nghĩa, cũng như ý nghĩa của việc "Văn hóa soi đường cho quốc dân đi".`

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      // Xây dựng prompt với lịch sử hội thoại
      const recentMessages = messages.slice(-4) // Lấy 4 tin nhắn gần nhất
      let conversationContext = systemPrompt + '\n\n'
      
      recentMessages.forEach(msg => {
        if (msg.role === 'user') {
          conversationContext += `Người dùng: ${msg.content}\n\n`
        } else {
          conversationContext += `Trợ lý: ${msg.content}\n\n`
        }
      })
      
      conversationContext += `Người dùng: ${userMessage}\n\nTrợ lý:`

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: conversationContext
            }]
          }]
        })
      })

      if (!response.ok) {
        throw new Error('Không thể kết nối với AI')
      }

      const data = await response.json()
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                        'Xin lỗi, tôi không thể trả lời câu hỏi này. Vui lòng thử lại.'

      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="chatbot-title-section">
            <h1 className="chatbot-title">💬 Chatbot Tư Tưởng Văn Hóa Hồ Chí Minh</h1>
            <p className="chatbot-subtitle">
              Hỏi đáp về quan điểm văn hóa, giáo dục, nghệ thuật và vai trò văn hóa trong phát triển xã hội
            </p>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-avatar">
                {message.role === 'user' ? '👤' : '🤖'}
              </div>
              <div className="message-content">
                <div className="message-text">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-avatar">🤖</div>
              <div className="message-content">
                <div className="message-text loading">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-form" onSubmit={sendMessage}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Nhập câu hỏi của bạn về tư tưởng văn hóa Hồ Chí Minh..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="chatbot-send-button"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? '⏳' : '📤'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chatbot

