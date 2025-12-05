import { useState, useEffect } from "react";
import { loadQuiz } from "../utils/quizParser";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { questionId: selectedAnswer }
  const [showAnswers, setShowAnswers] = useState({}); // { questionId: true/false }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const quizData = await loadQuiz();
        setQuestions(quizData);
        setError(null);
      } catch (err) {
        setError("Không thể tải câu hỏi. Vui lòng kiểm tra lại file quiz.txt");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, []);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = userAnswers[currentQuestion?.id] || null;
  const showAnswer = showAnswers[currentQuestion?.id] || false;
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  // Tính điểm
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: questions.length,
      percentage:
        questions.length > 0
          ? Math.round((correctCount / questions.length) * 100)
          : 0,
    };
  };

  const score = calculateScore();

  const handleSelectAnswer = (optionLabel) => {
    if (!showAnswer) {
      const questionId = currentQuestion.id;
      // Lưu câu trả lời của người dùng
      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: optionLabel,
      }));
      // Tự động hiển thị đáp án sau khi chọn
      setShowAnswers((prev) => ({
        ...prev,
        [questionId]: true,
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleGoToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const handleResetQuiz = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    setUserAnswers({});
    setShowAnswers({});
    setCurrentIndex(0);
    setShowResetModal(false);
  };

  const cancelReset = () => {
    setShowResetModal(false);
  };

  if (loading) {
    return (
      <div className="quiz-page">
        <div className="quiz-loading">
          <div className="loading-spinner"></div>
          <p>Đang tải câu hỏi...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-page">
        <div className="quiz-error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-error">
          <p>Không có câu hỏi nào được tìm thấy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="page-icon">
          <span style={{ fontSize: "48px" }}>📝</span>
        </div>
        <h1 className="page-title">Ôn tập Quiz</h1>
        <p className="page-subtitle">
          Ôn tập các câu hỏi về Tư tưởng Hồ Chí Minh về Văn hóa
        </p>
      </div>

      <div className="quiz-container">
        <div className="quiz-layout">
          {/* Question Navigation Grid - Left Side */}
          <div className="question-nav-sidebar">
            <div className="question-nav-grid">
              <h3>Danh sách câu hỏi</h3>
              <div className="nav-grid">
                {questions.map((q, index) => {
                  const userAnswer = userAnswers[q.id];
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect = userAnswer === q.correctAnswer;
                  const isCurrent = index === currentIndex;

                  return (
                    <button
                      key={q.id}
                      className={`nav-item ${isCurrent ? "active" : ""} ${
                        isAnswered
                          ? isCorrect
                            ? "answered-correct"
                            : "answered-incorrect"
                          : ""
                      }`}
                      onClick={() => handleGoToQuestion(index)}
                      title={
                        isAnswered
                          ? `Đã trả lời: ${userAnswer} ${
                              isCorrect ? "(Đúng)" : "(Sai)"
                            }`
                          : "Chưa trả lời"
                      }
                    >
                      {q.id}
                      {isAnswered && (
                        <span className="nav-status">
                          {isCorrect ? "✓" : "✗"}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content - Right Side */}
          <div className="quiz-content">
            {/* Score Display */}
            <div className="quiz-score">
              <div className="score-card">
                <div className="score-item">
                  <span className="score-label">Điểm số:</span>
                  <span className="score-value">
                    {score.correct}/{score.total}
                  </span>
                </div>
                <div className="score-item">
                  <span className="score-label">Tỷ lệ đúng:</span>
                  <span className="score-percentage">{score.percentage}%</span>
                </div>
                <button className="btn-reset" onClick={handleResetQuiz}>
                  Làm lại
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="quiz-progress">
              <div className="progress-info">
                <span>
                  Câu hỏi {currentIndex + 1} / {questions.length}
                </span>
                <span className="progress-percentage">
                  {Math.round(((currentIndex + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${((currentIndex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="quiz-card">
              <div className="question-header">
                <span className="question-number">
                  Câu {currentQuestion.id}
                </span>
              </div>

              <div className="question-text">{currentQuestion.question}</div>

              <div className="options-container">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswer === option.label;
                  const isCorrectOption =
                    option.label === currentQuestion.correctAnswer;
                  const showCorrect = showAnswer && isCorrectOption;
                  const showIncorrect =
                    showAnswer && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={option.label}
                      className={`option-button ${
                        isSelected ? "selected" : ""
                      } ${showCorrect ? "correct" : ""} ${
                        showIncorrect ? "incorrect" : ""
                      } ${
                        showAnswer && !isSelected && isCorrectOption
                          ? "correct-not-selected"
                          : ""
                      }`}
                      onClick={() => handleSelectAnswer(option.label)}
                      disabled={showAnswer}
                    >
                      <span className="option-label">{option.label}.</span>
                      <span className="option-text">{option.text}</span>
                      {showCorrect && <span className="option-check">✓</span>}
                      {showIncorrect && <span className="option-cross">✗</span>}
                    </button>
                  );
                })}
              </div>

              {/* Answer Section */}
              {showAnswer && (
                <div className="answer-section">
                  <div className="answer-result">
                    <div
                      className={`result-icon ${
                        isCorrect ? "correct" : "incorrect"
                      }`}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </div>
                    <div className="result-text">
                      <h3>{isCorrect ? "Chính xác!" : "Sai rồi!"}</h3>
                      <p className="correct-answer">
                        Đáp án đúng:{" "}
                        <strong>{currentQuestion.correctAnswer}</strong>
                      </p>
                    </div>
                  </div>
                  {currentQuestion.explanation && (
                    <div className="explanation-box">
                      <h4>Giải thích:</h4>
                      <p>{currentQuestion.explanation}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="quiz-actions">
                <div className="navigation-buttons">
                  <button
                    className="btn-nav"
                    onClick={handlePreviousQuestion}
                    disabled={currentIndex === 0}
                  >
                    ← Câu trước
                  </button>
                  <button
                    className="btn-nav"
                    onClick={handleNextQuestion}
                    disabled={currentIndex === questions.length - 1}
                  >
                    Câu sau →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="modal-overlay" onClick={cancelReset}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <span style={{ fontSize: "48px" }}>⚠️</span>
            </div>
            <h2 className="modal-title">Xác nhận làm lại</h2>
            <p className="modal-message">
              Bạn có chắc chắn muốn làm lại bài quiz không?
            </p>
            <p className="modal-warning">
              Tất cả câu trả lời và điểm số hiện tại sẽ bị xóa và không thể khôi
              phục.
            </p>
            <div className="modal-actions">
              <button
                className="modal-btn modal-btn-cancel"
                onClick={cancelReset}
              >
                Hủy
              </button>
              <button
                className="modal-btn modal-btn-confirm"
                onClick={confirmReset}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
