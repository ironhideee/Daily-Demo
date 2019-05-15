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