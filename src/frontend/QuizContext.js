import React, {useContext,useState,createContext} from "react";
const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <QuizContext.Provider value={{ selectedValues, setSelectedValues }}>
      {children}
    </QuizContext.Provider>
  );
};