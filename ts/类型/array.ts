/*
声明一个字符串数组
let 变量: 类型[]
 */
let ea: string[];

ea = ['a','b','c'];

/*
   数组的声明 类型[] 或者
   Array<类型>
 */
let f: Array<number>;

f = [1,2,3];

/*
元组，元组就是固定长度的数组
语法: [类型,....]
 */

let h: [string, string];

h = ['hello', 'world'];

/*
enum 枚举
 */

enum Gender {
    Male,
    Female
}

let i: {name: string, gender: Gender}

i = {
    name: '孙悟空',
    gender: Gender.Male
}

console.log(i.gender);

/*
类型的别名，可以复用类型
 */
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;