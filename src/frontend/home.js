
  import React, { useState } from 'react';
  
  function Quiz() {
    const quizData = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          question: "What is 2 + 2?",
          options: ["3", "4", "22", "None of the above"],
          answer: "4"
        },
        // Add more questions as needed
      ];
    const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
    const [showResults, setShowResults] = useState(false);
  

  
      
    const handleOptionClick = (questionIndex, option) => {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers[questionIndex] = option;
      setSelectedAnswers(updatedAnswers);
    };
  
    const handleSubmit = () => {
      setShowResults(true);
    };
  
    return (
      <div>
        <h1>Quiz</h1>
        {quizData.map((q, index) => (
          <div key={index}>
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <button 
                key={i} 
                onClick={() => handleOptionClick(index, option)}
                style={{ 
                  backgroundColor: showResults
                    ? option === q.answer ? "lightgreen" : selectedAnswers[index] === option ? "red" : ""
                    : "",
                  margin: "5px"
                }}
              >
                {option}
              </button>
            ))}
            {showResults && (
              <div>
                {selectedAnswers[index] === q.answer ? "Correct" : "Incorrect"}
              </div>
            )}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit Quiz</button>
      </div>
    );
  }
  
  export default Quiz;
    