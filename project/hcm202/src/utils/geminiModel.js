import { GoogleGenerativeAI } from '@google/generative-ai';

// Sử dụng API key từ biến môi trường
// Tạo file .env trong thư mục gốc với nội dung: VITE_GEMINI_API_KEY=your_api_key_here
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Debug: Kiểm tra xem biến môi trường có được load không
console.log('=== ENV DEBUG ===');
console.log('import.meta.env:', import.meta.env);
console.log('import.meta.env.MODE:', import.meta.env.MODE);
console.log('VITE_GEMINI_API_KEY loaded:', API_KEY ? 'Yes (length: ' + API_KEY.length + ')' : 'No');
console.log('All VITE_ env vars:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
console.log('=================');

if (!API_KEY) {
  console.error('Error: VITE_GEMINI_API_KEY is not set. Please create a .env file in the root directory with your API key.');
  console.error('Example: VITE_GEMINI_API_KEY=your_api_key_here');
  console.error('Get your API key at: https://makersuite.google.com/app/apikey');
  console.error('IMPORTANT: After creating/updating .env file, you MUST restart the dev server (stop and run "npm run dev" again)');
}

// Nếu không có API key, vẫn tạo instance nhưng sẽ báo lỗi khi sử dụng
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const GetModel = {
  GeminiProModel: () => {
    if (!genAI) {
      throw new Error('API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file.');
    }
    return genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }
};

export const GeminiModel = {
  GenerateContentStream: (prompt, onDataReceived, handleResult) => {
    const model = GetModel.GeminiProModel();

    // generate content
    const generateContent = async () => {
      const result = await model.generateContentStream([prompt]);

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();

        // Gọi callback với dữ liệu chunkText mỗi khi nhận được
        onDataReceived(chunkText);
      }

      handleResult(false);
    };

    generateContent();
  },

  GenerateWithFineTuning: (prompt, onDataReceived, handleResult) => {},

  GenerateWithHistory: async (historyChat, question, responseQuestion) => {
    try {
      const model = GetModel.GeminiProModel();

      const chat = model.startChat({
        history: historyChat || []
      });

      const msg = question;

      const result = await chat.sendMessage(msg + 'Câu trả lời khoảng 100 từ');

      const text = result.response.text();

      console.log(text);

      responseQuestion(text);
    } catch (error) {
      console.error('GenerateWithHistory Error:', error);
      throw error; // Re-throw để ChatbotWidget có thể xử lý
    }
  }
};

