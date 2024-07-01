export interface QuizItem {
  hiragana: string;
  word: string;
  choices: Array<{
    text: string;
    emoji: string;
  }>;
}

export const quizData: QuizItem[] = [
  {
    hiragana: "あ",
    word: "あめ",
    choices: [
      { text: "あめ", emoji: "🍬" },
      { text: "いぬ", emoji: "🐶" },
      { text: "うし", emoji: "🐮" },
      { text: "えき", emoji: "🚉" },
    ],
  },
  {
    hiragana: "い",
    word: "いぬ",
    choices: [
      { text: "あめ", emoji: "🍬" },
      { text: "いぬ", emoji: "🐶" },
      { text: "うし", emoji: "🐮" },
      { text: "えほん", emoji: "📚" },
    ],
  },
  // 他のクイズ項目も同様に4つの選択肢に更新...
];
