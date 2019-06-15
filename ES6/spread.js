//扩展运算符（...）,将一个数组转为用逗号分隔的参数序列。

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

//特殊场景
//1、数组深拷贝
const arr = [1,2,3];
const arr2 = arr;
const arr3 = [...arr];
console.log(arr===arr2); //true, 说明arr和arr2指向同一个数组
console.log(arr===arr3); //false, 说明arr3和arr指向不同数组

//2、处理字符串数组
const str = 'ECMA';
const arr4 = [...str];
console.log(arr5); //['E', 'C', 'M', 'A']

//3、如果扩展运算符后面是一个空数组，则不产生任何效果
[...[],1] //[1]

//应用场景
//1、复制数组（数组是复合的数据类型，直接复制是浅拷贝）
//ES5
const a1 = [1, 2];
const a2 = a1.concat();
a2[0] = 2;
a1 // [1, 2]

//ES6
const a1 = [1, 2];
const a2 = [...a1]; // 写法一
const [...a2] = a1; // 写法二

//2、合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
// ES5 的合并数组
arr1.concat(arr2, arr3); // [ 'a', 'b', 'c', 'd', 'e' ]
// ES6 的合并数组
[...arr1, ...arr2, ...arr3] // [ 'a', 'b', 'c', 'd', 'e' ]

//3、与结构赋值结合
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []

//4、字符串（将字符串转为数组）

//5、实现了 Iterator 接口的对象
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

// 这里怎么理解Iterator呢
// 1、访问各种数据结构
// 2、使数据结构成员按某种次序排列
// 3、为遍历命令for... of 使用
// 这里又需要先了解一下Symbol,因为默认的 Iterator 接口部署在数据结构的Symbol.iterator属性
// ES6新引入的数据类型Symbol,前六种分别是undefined/null/Boolean/String/Number/Object；
// 表示独一无二的属性名
let s = Symbol();
typeof s // "symbol"

let s1 = Symbol('foo');
let s2 = Symbol('bar');
s1 // Symbol(foo)
s2 // Symbol(bar)
s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"

//6、Map 和 Set 结构，Generator 函数