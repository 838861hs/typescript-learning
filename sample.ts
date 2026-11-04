//普通の型宣言
const message: string = "Hello typescript";

//変数が代入可能でもリテラル型
let age: 24 = 24;
let greet: "Hello" = "Hello";

//ユニオン型　複数の型を設定できる
let id: number | string;
id = "test";
console.log(id);

//型エイリアスの宣言
//組み合わせて６個のユニオン型のように使える
type Animal = cat | dog;
type cat = "mike" | "dora" | "persian";
type dog = "shiba" | "poodle" | "pug";
let pet: Animal = "shiba";

console.log(greet);
console.log(pet);
