// Fragment kodu do uzupełnienia
import { questionsChatGpt } from "./questions-chat-gpt";
import { Question } from "./questions-chat-gpt";

interface WordFrequencyDictionary {
  [word: string]: number;
}

interface WordCount {
  word: string;
  count: number;
}

function topThreeWords(questionsChatGpt: Question[]): WordCount[] {

  function gatherAllWords(): string[] {
    let allWords: string[] = [];

    questionsChatGpt.map((el: Question) => {
      const splittedQuestion: string[] = el.question.split(" ");
      allWords = allWords.concat(splittedQuestion);

      return allWords;
    });

    return allWords;
  }

  function countOccuranceOfEachWord(words: string[]): [string, number][] {
    const wordDict: WordFrequencyDictionary = {};

    words.map((el: string) => {
      if (el in wordDict) {
        wordDict[el]++;
      } else {
        wordDict[el] = 1;
      }
    });


    const dictArray: [string, number][] = Object.entries(wordDict);
    dictArray.sort(
      (a: (string | number)[], b: (string | number)[]) =>
        (b[1] as number) - (a[1] as number)
    );



    return dictArray
  }


  function convertToOutput(wordsCountArray: [string, number][]): WordCount[] {
    return wordsCountArray.reduce((acc: WordCount[], curr: [string, number]) => {
      const record: WordCount = { word: curr[0] as string, count: curr[1] as number }
      acc.push(record)
      return acc
    }, [])


  }

  const allWords: string[] = gatherAllWords()
  const occurance: [string, number][] = countOccuranceOfEachWord(allWords)
  const topThree: WordCount[] = convertToOutput(occurance).slice(0, 3)

  return topThree



}







// const topThree: WordCount[] = topThreeWords(questionsChatGpt);
// console.log(topThree);

// Oczekiwany output
// [
//   { word: 'Jakie', count: 18 },
//   { word: 'są', count: 18 },
//   { word: 'najlepsze', count: 17 }
// ]
