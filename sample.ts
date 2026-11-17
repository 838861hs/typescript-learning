//普通の型宣言
const message: string = "Hello typescript";

//変数が代入可能でもリテラル型
let age: 24 = 24;
let greet: "Hello" = "Hello";

//ユニオン型　複数の型を設定できる
let id: number | string;
id = "test";
//console.log(id);

//型エイリアスの宣言
//組み合わせて６個のユニオン型のように使える
type Animal = cat | dog;
type cat = "mike" | "dora" | "persian";
type dog = "shiba" | "poodle" | "pug";
let pet: Animal = "shiba";

//console.log(greet);
//console.log(pet);

//オブジェクト型
const person = {
  name: "alice",
  age: 30,
};
//オブジェクトに型エイリアスの設定
type Book = {
  title: string;
  author: string;
  publishedIn: number;
};
const book: Book = {
  title: "cocoro",
  author: "夏目漱石",
  publishedIn: 1914,
};
//オブジェクトのプロパティに対して型エイリアスを設定した場合、
//プロパティが一つでもかけているとエラーになるので注意
//console.log(book);

//arry型
//これも他と同じくconstで変数宣言すると型推論が動く

const num = [1, 2, 3, 4];
const personName = ["Alice", "bob", "Charlie"];
//複数の型も入れられる
const nums = [1, 2, 3, 4, 5, "six"];

//Tuple型
//配列の内容それぞれに型を決める
const TuplePerson: [string, number] = ["alice", 30];
//console.log(TuplePerson);

//インターセクション型
//複数の型ｗ設定しaかつbのような表現をする
//合わせたプロパティの型設定はすべてそろって使わないとエラーになる
type Engine = {
  enginType: string;
  volume: number;
};

type Wheels = {
  wheelCount: number;
};

type Car = Engine & Wheels;

const myCar: Car = {
  enginType: "v8",
  volume: 3000,
  wheelCount: 4,
};

console.log(myCar.wheelCount);

//any型；型チェックを無効にする。原則避ける。
//unknown型：型が不明。型を確認してから使う
//
//any型
let a: any = 123;
//a.toUpperCase(); //型エラーなし（実行時エラー）

//unknown型
let b: unknown = "hello";

if (typeof b === "string") {
  console.log(b.toUpperCase());
} //関数

addNumbers(10, 20);
//undefind型
//値が未設定で入ってくることを表す値　ユニオンで書くことが多い
//
//値がないと明治するために自分で入れる値

//関数
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(10, 20);
console.log(result);
