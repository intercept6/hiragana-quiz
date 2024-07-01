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
  {
    hiragana: "う",
    word: "うま",
    choices: [
      { text: "あひる", emoji: "🦆" },
      { text: "いす", emoji: "🪑" },
      { text: "うま", emoji: "🐴" },
      { text: "えんぴつ", emoji: "✏️" },
    ],
  },
  {
    hiragana: "え",
    word: "えほん",
    choices: [
      { text: "あり", emoji: "🐜" },
      { text: "いちご", emoji: "🍓" },
      { text: "うさぎ", emoji: "🐰" },
      { text: "えほん", emoji: "📚" },
    ],
  },
  {
    hiragana: "お",
    word: "おにぎり",
    choices: [
      { text: "あおい", emoji: "🔵" },
      { text: "いろ", emoji: "🎨" },
      { text: "うで", emoji: "💪" },
      { text: "おにぎり", emoji: "🍙" },
    ],
  },
  {
    hiragana: "か",
    word: "かさ",
    choices: [
      { text: "かさ", emoji: "☂️" },
      { text: "きつね", emoji: "🦊" },
      { text: "くま", emoji: "🐻" },
      { text: "けーき", emoji: "🍰" },
    ],
  },
  {
    hiragana: "き",
    word: "きんぎょ",
    choices: [
      { text: "かえる", emoji: "🐸" },
      { text: "きんぎょ", emoji: "🐠" },
      { text: "くつ", emoji: "👞" },
      { text: "けむり", emoji: "💨" },
    ],
  },
  {
    hiragana: "く",
    word: "くるま",
    choices: [
      { text: "かに", emoji: "🦀" },
      { text: "きりん", emoji: "🦒" },
      { text: "くるま", emoji: "🚗" },
      { text: "けいたい", emoji: "📱" },
    ],
  },
  {
    hiragana: "け",
    word: "けーき",
    choices: [
      { text: "かぶ", emoji: "🥬" },
      { text: "きのこ", emoji: "🍄" },
      { text: "くも", emoji: "☁️" },
      { text: "けーき", emoji: "🍰" },
    ],
  },
  {
    hiragana: "こ",
    word: "こあら",
    choices: [
      { text: "かめ", emoji: "🐢" },
      { text: "きつつき", emoji: "🐦" },
      { text: "くじら", emoji: "🐳" },
      { text: "こあら", emoji: "🐨" },
    ],
  },
  {
    hiragana: "さ",
    word: "さかな",
    choices: [
      { text: "さかな", emoji: "🐟" },
      { text: "しまうま", emoji: "🦓" },
      { text: "すいか", emoji: "🍉" },
      { text: "せんせい", emoji: "👨‍🏫" },
    ],
  },
  {
    hiragana: "し",
    word: "しか",
    choices: [
      { text: "さる", emoji: "🐒" },
      { text: "しか", emoji: "🦌" },
      { text: "すし", emoji: "🍣" },
      { text: "せんぷうき", emoji: "🌀" },
    ],
  },
  {
    hiragana: "す",
    word: "すいか",
    choices: [
      { text: "さくら", emoji: "🌸" },
      { text: "しんごう", emoji: "🚦" },
      { text: "すいか", emoji: "🍉" },
      { text: "せっけん", emoji: "🧼" },
    ],
  },
  {
    hiragana: "せ",
    word: "せんせい",
    choices: [
      { text: "さとう", emoji: "🍬" },
      { text: "しお", emoji: "🧂" },
      { text: "すずめ", emoji: "🐦" },
      { text: "せんせい", emoji: "👩‍🏫" },
    ],
  },
  {
    hiragana: "そ",
    word: "そば",
    choices: [
      { text: "さつまいも", emoji: "🍠" },
      { text: "しろくま", emoji: "🐻‍❄️" },
      { text: "すぽんじ", emoji: "🧽" },
      { text: "そば", emoji: "🍜" },
    ],
  },
  {
    hiragana: "た",
    word: "たいよう",
    choices: [
      { text: "たいよう", emoji: "☀️" },
      { text: "ちきゅう", emoji: "🌎" },
      { text: "つき", emoji: "🌙" },
      { text: "てぶくろ", emoji: "🧤" },
    ],
  },
  {
    hiragana: "ち",
    word: "ちょうちょ",
    choices: [
      { text: "たぬき", emoji: "🦝" },
      { text: "ちょうちょ", emoji: "🦋" },
      { text: "つばめ", emoji: "🐦" },
      { text: "てんとう", emoji: "🐞" },
    ],
  },
  {
    hiragana: "つ",
    word: "つくえ",
    choices: [
      { text: "たまご", emoji: "🥚" },
      { text: "ちーず", emoji: "🧀" },
      { text: "つくえ", emoji: "🪑" },
      { text: "てれび", emoji: "📺" },
    ],
  },
  {
    hiragana: "て",
    word: "てぶくろ",
    choices: [
      { text: "たこ", emoji: "🐙" },
      { text: "ちりとり", emoji: "🧹" },
      { text: "つみき", emoji: "🧱" },
      { text: "てぶくろ", emoji: "🧤" },
    ],
  },
  {
    hiragana: "と",
    word: "とり",
    choices: [
      { text: "たいこ", emoji: "🥁" },
      { text: "ちゅーりっぷ", emoji: "🌷" },
      { text: "つな", emoji: "🐟" },
      { text: "とり", emoji: "🐦" },
    ],
  },
  {
    hiragana: "な",
    word: "なす",
    choices: [
      { text: "なす", emoji: "🍆" },
      { text: "にんじん", emoji: "🥕" },
      { text: "ぬいぐるみ", emoji: "🧸" },
      { text: "ねこ", emoji: "🐱" },
    ],
  },
  {
    hiragana: "に",
    word: "にわとり",
    choices: [
      { text: "なっとう", emoji: "🥢" },
      { text: "にわとり", emoji: "🐔" },
      { text: "ぬいぐるみ", emoji: "🧸" },
      { text: "ねずみ", emoji: "🐭" },
    ],
  },
  {
    hiragana: "ぬ",
    word: "ぬいぐるみ",
    choices: [
      { text: "なべ", emoji: "🍲" },
      { text: "にく", emoji: "🥩" },
      { text: "ぬいぐるみ", emoji: "🧸" },
      { text: "ねぎ", emoji: "🧅" },
    ],
  },
  {
    hiragana: "ね",
    word: "ねこ",
    choices: [
      { text: "なし", emoji: "🍐" },
      { text: "にじ", emoji: "🌈" },
      { text: "ぬいぐるみ", emoji: "🧸" },
      { text: "ねこ", emoji: "🐱" },
    ],
  },
  {
    hiragana: "の",
    word: "のり",
    choices: [
      { text: "なわとび", emoji: "🤸" },
      { text: "にんぎょう", emoji: "🎎" },
      { text: "ぬの", emoji: "🧵" },
      { text: "のり", emoji: "🍙" },
    ],
  },
  {
    hiragana: "は",
    word: "はな",
    choices: [
      { text: "はな", emoji: "🌸" },
      { text: "ひこうき", emoji: "✈️" },
      { text: "ふうせん", emoji: "🎈" },
      { text: "へび", emoji: "🐍" },
    ],
  },
  {
    hiragana: "ひ",
    word: "ひつじ",
    choices: [
      { text: "はさみ", emoji: "✂️" },
      { text: "ひつじ", emoji: "🐑" },
      { text: "ふくろう", emoji: "🦉" },
      { text: "へりこぷたー", emoji: "🚁" },
    ],
  },
  {
    hiragana: "ふ",
    word: "ふね",
    choices: [
      { text: "はち", emoji: "🐝" },
      { text: "ひよこ", emoji: "🐥" },
      { text: "ふね", emoji: "⛵" },
      { text: "へや", emoji: "🏠" },
    ],
  },
  {
    hiragana: "へ",
    word: "へりこぷたー",
    choices: [
      { text: "はんばーがー", emoji: "🍔" },
      { text: "ひまわり", emoji: "🌻" },
      { text: "ふぐ", emoji: "🐡" },
      { text: "へりこぷたー", emoji: "🚁" },
    ],
  },
  {
    hiragana: "ほ",
    word: "ほし",
    choices: [
      { text: "はさみ", emoji: "✂️" },
      { text: "ひこうき", emoji: "✈️" },
      { text: "ふうせん", emoji: "🎈" },
      { text: "ほし", emoji: "⭐" },
    ],
  },
  {
    hiragana: "ま",
    word: "まめ",
    choices: [
      { text: "まめ", emoji: "🫘" },
      { text: "みかん", emoji: "🍊" },
      { text: "むぎ", emoji: "🌾" },
      { text: "めがね", emoji: "👓" },
    ],
  },
  {
    hiragana: "み",
    word: "みかん",
    choices: [
      { text: "まくら", emoji: "🛏️" },
      { text: "みかん", emoji: "🍊" },
      { text: "むし", emoji: "🐛" },
      { text: "めだか", emoji: "🐠" },
    ],
  },
  {
    hiragana: "む",
    word: "むしば",
    choices: [
      { text: "まつ", emoji: "🌲" },
      { text: "みず", emoji: "💧" },
      { text: "むしば", emoji: "🦷" },
      { text: "めろん", emoji: "🍈" },
    ],
  },
  {
    hiragana: "め",
    word: "めがね",
    choices: [
      { text: "まんが", emoji: "📚" },
      { text: "みかん", emoji: "🍊" },
      { text: "むぎちゃ", emoji: "🍵" },
      { text: "めがね", emoji: "👓" },
    ],
  },
  {
    hiragana: "も",
    word: "もも",
    choices: [
      { text: "まつり", emoji: "🎆" },
      { text: "みつばち", emoji: "🐝" },
      { text: "むぎ", emoji: "🌾" },
      { text: "もも", emoji: "🍑" },
    ],
  },
  {
    hiragana: "や",
    word: "やさい",
    choices: [
      { text: "やさい", emoji: "🥗" },
      { text: "ゆき", emoji: "❄️" },
      { text: "よーよー", emoji: "🪀" },
      { text: "らっぱ", emoji: "🎺" },
    ],
  },
  {
    hiragana: "ゆ",
    word: "ゆき",
    choices: [
      { text: "やま", emoji: "⛰️" },
      { text: "ゆき", emoji: "❄️" },
      { text: "よる", emoji: "🌙" },
      { text: "らいおん", emoji: "🦁" },
    ],
  },
  {
    hiragana: "よ",
    word: "よーよー",
    choices: [
      { text: "やかん", emoji: "🫖" },
      { text: "ゆびわ", emoji: "💍" },
      { text: "よーよー", emoji: "🪀" },
      { text: "らくだ", emoji: "🐪" },
    ],
  },
  {
    hiragana: "ら",
    word: "らっぱ",
    choices: [
      { text: "やきゅう", emoji: "⚾" },
      { text: "ゆうびんきょく", emoji: "🏤" },
      { text: "よっと", emoji: "⛵" },
      { text: "らっぱ", emoji: "🎺" },
    ],
  },
  {
    hiragana: "り",
    word: "りんご",
    choices: [
      { text: "らくだ", emoji: "🐪" },
      { text: "りんご", emoji: "🍎" },
      { text: "るーれっと", emoji: "🎰" },
      { text: "れもん", emoji: "🍋" },
    ],
  },
  {
    hiragana: "る",
    word: "るーれっと",
    choices: [
      { text: "らじお", emoji: "📻" },
      { text: "りぼん", emoji: "🎀" },
      { text: "るーれっと", emoji: "🎰" },
      { text: "れんこん", emoji: "🥬" },
    ],
  },
  {
    hiragana: "れ",
    word: "れもん",
    choices: [
      { text: "らくがき", emoji: "🖍️" },
      { text: "りす", emoji: "🐿️" },
      { text: "るびー", emoji: "💎" },
      { text: "れもん", emoji: "🍋" },
    ],
  },
  {
    hiragana: "ろ",
    word: "ろぼっと",
    choices: [
      { text: "らくだ", emoji: "🐪" },
      { text: "りんご", emoji: "🍎" },
      { text: "るーれっと", emoji: "🎰" },
      { text: "ろぼっと", emoji: "🤖" },
    ],
  },
  {
    hiragana: "わ",
    word: "わに",
    choices: [
      { text: "わに", emoji: "🐊" },
      { text: "りす", emoji: "🐿️" },
      { text: "るびー", emoji: "💎" },
      { text: "れもん", emoji: "🍋" },
    ],
  },
];
