import React, { useState, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import useSound from "use-sound";
import { QuizItem, quizData } from "../data/quizData";

const HiraganaQuiz: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<QuizItem | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [playCorrect] = useSound("/sounds/correct.mp3");
  const [playIncorrect] = useSound("/sounds/incorrect.mp3");
  const [playPop] = useSound("/sounds/pop.mp3");

  const feedbackAnimation = useSpring({
    opacity: showFeedback ? 1 : 0,
    transform: showFeedback ? "translateY(0)" : "translateY(-20px)",
  });

  const hiraganaAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    reset: true,
    key: currentQuiz?.hiragana,
  });

  const getNextQuiz = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    const quiz = { ...quizData[randomIndex] };

    // 選択肢をシャッフル
    quiz.choices = shuffleArray(quiz.choices);

    setCurrentQuiz(quiz);
    setShowFeedback(false);
  }, []);

  useEffect(() => {
    getNextQuiz();
  }, [getNextQuiz]);

  // 配列をシャッフルする関数
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswer = (choice: string) => {
    playPop();
    if (currentQuiz) {
      const correct = choice === currentQuiz.word;
      setIsCorrect(correct);
      setShowFeedback(true);
      if (correct) {
        playCorrect();
        setTimeout(() => {
          getNextQuiz();
        }, 1500);
      } else {
        playIncorrect();
        setTimeout(() => {
          setShowFeedback(false);
        }, 1500);
      }
    }
  };

  if (!currentQuiz) return <div>Loading...</div>;

  return (
    <div className="quiz-container">
      <animated.div style={hiraganaAnimation} className="hiragana-display">
        {currentQuiz.hiragana}
      </animated.div>
      <div className="question">
        どのことばが「{currentQuiz.hiragana}」からはじまる？
      </div>
      <div className="choices">
        {currentQuiz.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice.text)}
            disabled={showFeedback}
          >
            <span className="emoji">{choice.emoji}</span>
            <span className="choice-text">{choice.text}</span>
          </button>
        ))}
      </div>
      <animated.div
        style={feedbackAnimation}
        className={`feedback ${isCorrect ? "correct" : "incorrect"}`}
      >
        {isCorrect ? "せいかい！" : "まちがい"}
      </animated.div>
    </div>
  );
};

export default HiraganaQuiz;
