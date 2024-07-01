export interface QuizItem {
    hiragana: string;
    word: string;
    choices: string[];
  }
  
  export const quizData: QuizItem[] = [
    {
      hiragana: 'あ',
      word: 'あめ',
      choices: ['あめ', 'いぬ', 'うし']
    },
    {
      hiragana: 'い',
      word: 'いぬ',
      choices: ['あめ', 'いぬ', 'うし']
    },
    {
      hiragana: 'う',
      word: 'うし',
      choices: ['あめ', 'いぬ', 'うし']
    },
    // 他のクイズ項目を追加...
  ];