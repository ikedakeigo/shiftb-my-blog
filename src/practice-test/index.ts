/*
  以下の問題をJavaScriptので解いてください。
  1. 関数の定義
  2. 関数の呼び出して結果をconsole.logする
  の、両方を記述してください。
*/

/*
  例題
*/
// 問題: 以下のようなオブジェクトを受け取り、nameとageを返す関数を作成してください
// 例): 引数: { name: '太郎', age: 20 }, 返り値: '太郎は20歳です'
// 回答例:

//   関数の定義
type Person = {
  name: string;
  age: number;
}
const getNameAndAge = (person: Person) => person.name + "は" + person.age + "歳です";
//   関数の呼び出して結果をconsole.logする
const person: Person = { name: "太郎", age: 20 }; // 引数には例の引数を使用してください。
console.log(getNameAndAge(person));

// 注意!!!
// 必ず、
// 1. 関数を定義
// 2. 引数となる定数を定義
// 3. 関数の引数に2で定義した定数を渡して、関数を呼び出す。その結果をconsole.logする
// の順番で記述してください。

/*
  問題
*/

/**
 * 型定義 chapter7
 */

type Arg = number

type NumberArray = number[];

type StringArray = string[];

type Person2 = {
  name: string;
  age: number;
}[]; // オブジェクト型の配列{}[]


// 問題1: 引数として受け取った数値を2倍にして返す関数を作成して実行してください。
// 例) 引数: 2, 返り値: 4



const result = (arg: Arg) => arg * 2;
const arg: Arg = 2;

console.log(result(arg));

// 問題2: 最大値を返す関数を作成して実行してください。
// 例) 引数: 1, 3, 2, 5, 4, 返り値: 5
// ※ 引数の数は何個でも受け取れる様にしてください
// ※ Math.maxは使用しないでください

/**
 * reduceメソッドの第2引数に初期値が入る
 * 第一引数は（累積数、現在の数理）
 */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const largeNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(largeNumber);

// 問題3: 配列を引数として受け取り、偶数のみを返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [2, 4, 6]

const arrayVal = (array: NumberArray) => array.filter((num) => num % 2 === 0);
const array: NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayVal(array));

// 問題4: 配列内の重複を除去する関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 2, 4, 5, 6, 5, 6], 返り値: [1, 2, 3, 4, 5, 6]

const arrayA = (arg2: NumberArray) => arg2.filter((element, index) => arg2.indexOf(element) == index);
const arg2: NumberArray = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
console.log(arrayA(arg2));

// 問題5: テンプレートリテラルを使用して、引数で受け取った名前を元に「こんにちは、○○さん」と出力する関数を作成して実行してください。
// 例) 引数: '太郎', 出力: こんにちは、太郎さん
const hello = (name: string) => {
  console.log(`こんにちは、${name}さん`);
};

hello("太郎");

// 問題6: 配列を引数として受け取り、各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3], 返り値: [2, 4, 6]



const mathUp = (array: NumberArray) => {
  // 新しい配列を作成
  // map関数で配列を取得
  const newArray = array.map((math) => math * 2);
  return newArray;
};

console.log(mathUp([1, 2, 3]));

// 問題7: 文字列の配列を受け取り、index番号を付けたオブジェクトを返す関数を作成して実行してください。
// 例) 引数: ['a', 'b', 'c'], 返り値: [{ index: 0, value: 'a' }, { index: 1, value: 'b' }, { index: 2, value: 'c' }]

const arrayToObject = (array: StringArray) => array.map((value, index) => ({ index, value }));
console.log(arrayToObject(["a", "b", "c"]));

// 問題8: 名前と年齢オブジェクトの配列を受け取り、ageが第二引数で受け取った数字と一致するオブジェクトを返す関数を作成して実行してください。
// 例) 第一引数: [{ name: '太郎', age: 20 }, { name: '次郎', age: 30 }, { name: '三郎', age: 40 }]
//     第二引数: 30
//     返り値: { name: '次郎', age: 30 }


const nameToAge = (person2: Person2, targetAge: number) => person2.find((person) => person.age === targetAge);
const person2 = [
  { name: "太郎", age: 20 },
  { name: "次郎", age: 30 },
  { name: "三郎", age: 40 },
];
const targetAge = 30;

console.log(nameToAge(person2, targetAge));

// 問題9: 数字の配列を引数として受け取り、偶数のみをフィルタリングし、その後各要素を2倍にした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [4, 8, 12]

const mathToDouble = (array: NumberArray) =>
  array
    .filter((value) => value % 2 === 0) // 偶数のみ取得
    .map((value) => value * 2); // 取得した値を2倍にして新しい配列として返す

console.log(mathToDouble([1, 2, 3, 4, 5, 6]));
// 問題10: 数字の配列を引数として受け取り、各要素に10を足し、その後偶数のみをフィルタリングし、最後に要素を昇順にソートした新しい配列を返す関数を作成して実行してください。
// 例) 引数: [1, 2, 3, 4, 5, 6], 返り値: [12, 14, 16]

const mathToSort = (array: NumberArray) => array
    .map((value) => value + 10) // map関数で引数で受けた要素を取得し+10して返す
    .filter((value) => value % 2 === 0) // 取得した+10にした値（value）が偶数かどうかの絞りこみ
    .sort((num1, num2) => num1 - num2); // sortメソッドを使用して

console.log(mathToSort([1, 2, 3, 4, 5, 6]));
