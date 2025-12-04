/**
 * Parse quiz.txt file content into structured quiz data
 * @param {string} text - Raw text content from quiz.txt
 * @returns {Array} Array of quiz questions
 */
export const parseQuizText = (text) => {
  const questions = []
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0)
  
  let currentQuestion = null
  let currentOptions = []
  let currentAnswer = null
  let currentExplanation = null
  let collectingOptions = false
  let collectingAnswer = false
  let collectingExplanation = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Check if this is a new question (starts with number/)
    const questionMatch = line.match(/^(\d+)\/(.+)$/)
    if (questionMatch) {
      // Save previous question if exists
      if (currentQuestion) {
        questions.push({
          id: questions.length + 1,
          question: currentQuestion,
          options: currentOptions,
          correctAnswer: currentAnswer,
          explanation: currentExplanation
        })
      }
      
      // Start new question
      currentQuestion = questionMatch[2].trim()
      currentOptions = []
      currentAnswer = null
      currentExplanation = null
      collectingOptions = true
      collectingAnswer = false
      collectingExplanation = false
      continue
    }
    
    // Check if this is an option (starts with A., B., C., or D.)
    const optionMatch = line.match(/^([A-D])\.\s*(.+)$/)
    if (optionMatch && collectingOptions) {
      const optionText = optionMatch[2].trim()
      // Remove "(Không được chọn)" if present
      const cleanOption = optionText.replace(/\s*\(Không được chọn\)\s*$/, '').trim()
      currentOptions.push({
        label: optionMatch[1],
        text: cleanOption
      })
      continue
    }
    
    // Check if this is the answer section
    if (line.startsWith('Đáp án:')) {
      collectingOptions = false
      collectingAnswer = true
      collectingExplanation = false
      // Check if answer is on the same line
      const answerOnSameLine = line.match(/^Đáp án:\s*([A-D])\./)
      if (answerOnSameLine) {
        currentAnswer = answerOnSameLine[1]
        collectingAnswer = false
      }
      continue
    }
    
    // Collect answer (line after "Đáp án:")
    if (collectingAnswer && !currentAnswer) {
      const answerMatch = line.match(/^([A-D])\.\s*(.+)$/)
      if (answerMatch) {
        currentAnswer = answerMatch[1]
        collectingAnswer = false
        collectingExplanation = true
        // If there's text after the answer, it might be part of explanation
        const textAfterAnswer = answerMatch[2].trim()
        if (textAfterAnswer && !textAfterAnswer.includes('Đáp án')) {
          currentExplanation = textAfterAnswer
        }
      } else {
        // If line doesn't match answer format, stop collecting answer
        collectingAnswer = false
        collectingExplanation = true
      }
      continue
    }
    
    // Check if this is the explanation section
    if (line.startsWith('Giải thích:')) {
      collectingAnswer = false
      collectingExplanation = true
      const explanationText = line.replace('Giải thích:', '').trim()
      if (explanationText) {
        currentExplanation = explanationText
      }
      continue
    }
    
    // Collect explanation
    if (collectingExplanation) {
      // Stop collecting if we hit a new question
      if (line.match(/^\d+\//)) {
        collectingExplanation = false
      } else if (currentExplanation) {
        currentExplanation += ' ' + line
      } else {
        currentExplanation = line
      }
      continue
    }
  }
  
  // Don't forget the last question
  if (currentQuestion) {
    questions.push({
      id: questions.length + 1,
      question: currentQuestion,
      options: currentOptions,
      correctAnswer: currentAnswer,
      explanation: currentExplanation
    })
  }
  
  return questions
}

/**
 * Fetch and parse quiz from quiz.txt file
 * @returns {Promise<Array>} Promise that resolves to array of quiz questions
 */
export const loadQuiz = async () => {
  try {
    const response = await fetch('/quiz.txt')
    if (!response.ok) {
      throw new Error('Failed to load quiz file')
    }
    const text = await response.text()
    return parseQuizText(text)
  } catch (error) {
    console.error('Error loading quiz:', error)
    throw error
  }
}

