import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import useSound from 'use-sound';
import { QuizItem, quizData } from '../data/quizData';

const HiraganaQuiz: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<QuizItem | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [playCorrect] = useSound('/sounds/correct.mp3', {volume: 0.5});
  const [playIncorrect] = useSound('/sounds/incorrect.mp3', {volume: 0.5});
  const [playPop] = useSound('/sounds/pop.mp3', {volume: 0.5});

  const feedbackAnimation = useSpring({
    opacity: showFeedback ? 1 : 0,
    transform: showFeedback ? 'translateY(0)' : 'translateY(-20px)',
  });

  const hiraganaAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    reset: true,
    key: currentQuiz?.hiragana,
  });

  useEffect(() => {
    getNextQuiz();
  }, []);

  const getNextQuiz = () => {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    setCurrentQuiz(quizData[randomIndex]);
    setShowFeedback(false);
  };

  const handleAnswer = (choice: string) => {
    playPop();
    if (currentQuiz) {
      const correct = choice === currentQuiz.word;
      setIsCorrect(correct);
      setShowFeedback(true);
      if (correct) {
        setScore(score + 1);
        playCorrect();
      } else {
        playIncorrect();
      }
      setTimeout(() => {
        getNextQuiz();
      }, 1500);
    }
  };

  if (!currentQuiz) return <div>Loading...</div>;

  return (
    <div className="quiz-container">
      <h2>ひらがなクイズ</h2>
      <div className="score">スコア: {score}</div>
      <animated.div style={hiraganaAnimation} className="hiragana-display">
        {currentQuiz.hiragana}
      </animated.div>
      <div className="question">どの言葉が「{currentQuiz.hiragana}」からはじまる？</div>
      <div className="choices">
        {currentQuiz.choices.map((choice, index) => (
          <button key={index} onClick={() => handleAnswer(choice)} disabled={showFeedback}>
            {choice}
          </button>
        ))}
      </div>
      <animated.div style={feedbackAnimation} className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
        {isCorrect ? 'せいかい！' : 'ざんねん...もういちどチャレンジしよう！'}
      </animated.div>
    </div>
  );
};

export default HiraganaQuiz;