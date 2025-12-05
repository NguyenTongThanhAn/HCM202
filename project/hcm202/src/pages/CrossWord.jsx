import { useState, useEffect, useRef } from "react";
import "./Crossword.css";

const Crossword = () => {
  // Từ khóa chính (theo cột dọc): HỒ CHÍ MINH (9 chữ cái)
  const keyword = "HOCHIMINH";

  // Dữ liệu câu hỏi - thiết kế sao cho cột keyword thẳng hàng
  // Tất cả đáp án có ký tự keyword ở vị trí tạo cột thẳng
  const puzzleData = [
    {
      id: 1,
      hint: "Vịnh đẹp nhất Việt Nam, Di sản Thiên nhiên Thế giới ở Quảng Ninh?",
      answer: "HALONG", // H ở vị trí 1
      keyChar: "H",
      keyPosition: 1,
    },
    {
      id: 2,
      hint: "Đô thị cổ nổi tiếng với đèn lồng và phố cổ ở Quảng Nam?",
      answer: "HOIAN", // O ở vị trí 2
      keyChar: "O",
      keyPosition: 2,
    },
    {
      id: 3,
      hint: "Quần thể di tích cố đô của triều Nguyễn ở miền Trung?",
      answer: "CODOHUE", // C ở vị trí 1
      keyChar: "C",
      keyPosition: 1,
    },
    {
      id: 4,
      hint: "Lễ hội truyền thống tưởng nhớ các Vua dựng nước (ngày 10/3 ÂL)?",
      answer: "HUNGVUONG", // H ở vị trí 1
      keyChar: "H",
      keyPosition: 1,
    },
    {
      id: 5,
      hint: "Loại hình dân ca của vùng Nghệ An - Hà Tĩnh?",
      answer: "VIGIAM", // I ở vị trí 2
      keyChar: "I",
      keyPosition: 2,
    },
    {
      id: 6,
      hint: "Thánh địa tôn giáo cổ của người Chăm ở Quảng Nam?",
      answer: "MYSON", // M ở vị trí 1
      keyChar: "M",
      keyPosition: 1,
    },
    {
      id: 7,
      hint: "Lễ hội ở Hà Nội tưởng nhớ Thánh Gióng đánh giặc Ân?",
      answer: "HOIGIONG", // I ở vị trí 3
      keyChar: "I",
      keyPosition: 3,
    },
    {
      id: 8,
      hint: "Âm nhạc cung đình trang trọng của triều Nguyễn?",
      answer: "NHANHAC", // N ở vị trí 1
      keyChar: "N",
      keyPosition: 1,
    },
    {
      id: 9,
      hint: "Hoàng thành cổ ở Hà Nội, di sản văn hóa thế giới?",
      answer: "THANGLONG", // H ở vị trí 2
      keyChar: "H",
      keyPosition: 2,
    },
  ];

  // State cho các ô nhập
  const [userAnswers, setUserAnswers] = useState(
    puzzleData.map((item) => Array(item.answer.length).fill(""))
  );
  const [showResults, setShowResults] = useState(false);
  const [completedRows, setCompletedRows] = useState([]);
  const [showKeyword, setShowKeyword] = useState(false);
  const [showHint, setShowHint] = useState(null);
  const [allCorrect, setAllCorrect] = useState(false);
  const [rowResults, setRowResults] = useState(
    puzzleData.map(() => ({ checked: false, isCorrect: false }))
  );
  const [rowRevealed, setRowRevealed] = useState(puzzleData.map(() => false));
  // Trạng thái của các ô keyword (null: chưa nhập, true: đúng, false: sai)
  const [keywordCellStatus, setKeywordCellStatus] = useState(
    puzzleData.map(() => null)
  );

  const inputRefs = useRef([]);

  // Tính toán vị trí căn giữa cho từ khóa
  const maxLength = Math.max(...puzzleData.map((item) => item.answer.length));
  const keywordColumn = Math.floor(maxLength / 2); // Cột giữa cho từ khóa

  // Tính offset để các ô chữ từ khóa thẳng hàng
  const getRowOffset = (rowIndex) => {
    const keyPos = puzzleData[rowIndex].keyPosition;
    return keywordColumn - keyPos + 1;
  };

  const handleInputChange = (rowIndex, cellIndex, value) => {
    const newAnswers = [...userAnswers];
    // Chỉ lấy ký tự cuối cùng và chuyển thành chữ hoa
    const char = value.slice(-1).toUpperCase();
    newAnswers[rowIndex][cellIndex] = char;
    setUserAnswers(newAnswers);

    // Kiểm tra nếu đây là ô keyword
    const keyPos = puzzleData[rowIndex].keyPosition - 1;
    if (cellIndex === keyPos) {
      const newKeywordStatus = [...keywordCellStatus];
      if (char) {
        // Kiểm tra ký tự với từ khóa
        const expectedChar = keyword[rowIndex];
        newKeywordStatus[rowIndex] = char === expectedChar;
      } else {
        newKeywordStatus[rowIndex] = null;
      }
      setKeywordCellStatus(newKeywordStatus);

      // Kiểm tra nếu tất cả ô keyword đều đúng
      const allKeywordCorrect = newKeywordStatus.every(
        (status) => status === true
      );
      if (allKeywordCorrect) {
        setAllCorrect(true);
        setShowKeyword(true);
      }
    }

    // Tự động chuyển sang ô tiếp theo
    if (char && cellIndex < puzzleData[rowIndex].answer.length - 1) {
      const nextInput = inputRefs.current[`${rowIndex}-${cellIndex + 1}`];
      if (nextInput) nextInput.focus();
    } else if (char && cellIndex === puzzleData[rowIndex].answer.length - 1) {
      // Khi điền xong ô cuối cùng, tự động check đáp án hàng này
      checkRowAnswer(rowIndex, newAnswers);
    }
  };

  const checkRowAnswer = (rowIndex, answers) => {
    const userAnswer = answers[rowIndex].join("");
    const isCorrect = userAnswer === puzzleData[rowIndex].answer;

    const newRowResults = [...rowResults];
    newRowResults[rowIndex] = { checked: true, isCorrect };
    setRowResults(newRowResults);

    if (isCorrect) {
      const newCompletedRows = [...completedRows];
      if (!newCompletedRows.includes(rowIndex)) {
        newCompletedRows.push(rowIndex);
      }
      setCompletedRows(newCompletedRows);

      // Kiểm tra nếu tất cả đúng
      if (newCompletedRows.length === puzzleData.length) {
        setAllCorrect(true);
        setShowKeyword(true);
      }
    }
  };

  const handleKeyDown = (rowIndex, cellIndex, e) => {
    if (
      e.key === "Backspace" &&
      !userAnswers[rowIndex][cellIndex] &&
      cellIndex > 0
    ) {
      const prevInput = inputRefs.current[`${rowIndex}-${cellIndex - 1}`];
      if (prevInput) prevInput.focus();
    }
    if (
      e.key === "ArrowRight" &&
      cellIndex < puzzleData[rowIndex].answer.length - 1
    ) {
      const nextInput = inputRefs.current[`${rowIndex}-${cellIndex + 1}`];
      if (nextInput) nextInput.focus();
    }
    if (e.key === "ArrowLeft" && cellIndex > 0) {
      const prevInput = inputRefs.current[`${rowIndex}-${cellIndex - 1}`];
      if (prevInput) prevInput.focus();
    }
    if (e.key === "ArrowDown" && rowIndex < puzzleData.length - 1) {
      const offset = getRowOffset(rowIndex);
      const nextOffset = getRowOffset(rowIndex + 1);
      const newCellIndex = cellIndex + offset - nextOffset;
      if (
        newCellIndex >= 0 &&
        newCellIndex < puzzleData[rowIndex + 1].answer.length
      ) {
        const nextInput = inputRefs.current[`${rowIndex + 1}-${newCellIndex}`];
        if (nextInput) nextInput.focus();
      }
    }
    if (e.key === "ArrowUp" && rowIndex > 0) {
      const offset = getRowOffset(rowIndex);
      const prevOffset = getRowOffset(rowIndex - 1);
      const newCellIndex = cellIndex + offset - prevOffset;
      if (
        newCellIndex >= 0 &&
        newCellIndex < puzzleData[rowIndex - 1].answer.length
      ) {
        const prevInput = inputRefs.current[`${rowIndex - 1}-${newCellIndex}`];
        if (prevInput) prevInput.focus();
      }
    }
  };

  const checkAnswers = () => {
    const completed = [];
    puzzleData.forEach((item, rowIndex) => {
      const userAnswer = userAnswers[rowIndex].join("");
      if (userAnswer === item.answer) {
        completed.push(rowIndex);
      }
    });
    setCompletedRows(completed);
    setShowResults(true);

    // Kiểm tra xem tất cả có đúng không
    if (completed.length === puzzleData.length) {
      setAllCorrect(true);
    }
  };

  const resetGame = () => {
    setUserAnswers(
      puzzleData.map((item) => Array(item.answer.length).fill(""))
    );
    setShowResults(false);
    setCompletedRows([]);
    setShowKeyword(false);
    setShowHint(null);
    setAllCorrect(false);
    setRowResults(puzzleData.map(() => ({ checked: false, isCorrect: false })));
    setRowRevealed(puzzleData.map(() => false));
    setKeywordCellStatus(puzzleData.map(() => null));
  };

  const revealAnswer = (rowIndex) => {
    const newRevealed = [...rowRevealed];
    newRevealed[rowIndex] = !newRevealed[rowIndex];
    setRowRevealed(newRevealed);
  };

  const getCellClass = (rowIndex, cellIndex) => {
    const isKeywordCell = cellIndex === puzzleData[rowIndex].keyPosition - 1;
    let className = "crossword-cell";

    if (isKeywordCell) {
      className += " keyword-cell";
      // Thêm class dựa trên trạng thái đúng/sai của ô keyword
      if (keywordCellStatus[rowIndex] === true) {
        className += " keyword-correct";
      } else if (keywordCellStatus[rowIndex] === false) {
        className += " keyword-incorrect";
      }
    }

    if (rowResults[rowIndex].checked) {
      const isCorrect =
        userAnswers[rowIndex][cellIndex] ===
        puzzleData[rowIndex].answer[cellIndex];
      className += isCorrect ? " correct" : " incorrect";
    }

    if (completedRows.includes(rowIndex)) {
      className += " completed";
    }

    return className;
  };

  // Tính toán từ khóa từ các đáp án
  const getKeywordFromAnswers = () => {
    return puzzleData
      .map((item, index) => {
        const keyPos = item.keyPosition - 1;
        return userAnswers[index][keyPos] || "";
      })
      .join("");
  };

  return (
    <div className="crossword-container">
      <div className="crossword-header">
        <h1>Trò Chơi Ô Chữ</h1>
        <h2>Di Sản Văn Hóa Việt Nam</h2>
        <p className="crossword-instruction">
          Điền đáp án vào các ô trống. Các ô màu vàng sẽ tạo thành từ khóa theo
          chiều dọc!
        </p>
      </div>

      <div className="crossword-game">
        <div className="crossword-grid">
          {puzzleData.map((item, rowIndex) => (
            <div key={rowIndex} className="crossword-row">
              <div
                className="row-cells"
                style={{ marginLeft: `${getRowOffset(rowIndex) * 48}px` }}
              >
                {item.answer.split("").map((_, cellIndex) => (
                  <input
                    key={cellIndex}
                    ref={(el) =>
                      (inputRefs.current[`${rowIndex}-${cellIndex}`] = el)
                    }
                    type="text"
                    className={getCellClass(rowIndex, cellIndex)}
                    value={userAnswers[rowIndex][cellIndex]}
                    onChange={(e) =>
                      handleInputChange(rowIndex, cellIndex, e.target.value)
                    }
                    onKeyDown={(e) => handleKeyDown(rowIndex, cellIndex, e)}
                    maxLength={2}
                    disabled={completedRows.includes(rowIndex)}
                  />
                ))}
              </div>
              {rowResults[rowIndex].checked && (
                <div className="row-status">
                  {rowResults[rowIndex].isCorrect ? (
                    <span className="status-correct">✅</span>
                  ) : (
                    <div className="status-incorrect">
                      <span>❌</span>
                      <button
                        className="show-answer-btn"
                        onClick={() => revealAnswer(rowIndex)}
                        title="Xem đáp án"
                      >
                        👁️
                      </button>
                      {rowRevealed[rowIndex] && (
                        <div className="revealed-answer">
                          {puzzleData[rowIndex].answer}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hints-panel">
          <h3>📝 Câu Hỏi & Gợi Ý</h3>
          <div className="hints-list">
            {puzzleData.map((item, index) => (
              <div
                key={index}
                className={`hint-item ${
                  completedRows.includes(index) ? "completed" : ""
                }`}
              >
                <span className="hint-number">{index + 1}.</span>
                <span className="hint-text">{item.hint}</span>
                {completedRows.includes(index) && (
                  <span className="hint-check">✅</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showKeyword && (
        <div className="keyword-reveal">
          <div className="keyword-animation">
            <h2>🎉 Chúc mừng!</h2>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "1.5rem",
                color: "#666",
              }}
            >
              Đáp án cuối cùng của bạn là:
            </p>
            <div className="keyword-display">
              {getKeywordFromAnswers()
                .split("")
                .map((char, index) => (
                  <span
                    key={index}
                    className="keyword-char"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
            </div>
            <p className="keyword-meaning">
              Chủ tịch Hồ Chí Minh - Vị lãnh tụ vĩ đại của dân tộc Việt Nam,
              người đã cống hiến cả cuộc đời cho sự nghiệp giải phóng dân tộc và
              xây dựng đất nước.
            </p>
            <button
              className="close-keyword-btn"
              onClick={() => setShowKeyword(false)}
              style={{ marginTop: "1.5rem" }}
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      <div className="crossword-actions">
        <button className="reset-btn" onClick={resetGame}>
          🔄 Chơi lại
        </button>
      </div>
    </div>
  );
};

export default Crossword;
