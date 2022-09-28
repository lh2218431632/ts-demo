/*
声明一个变量a以及变量a类型的基本结构，同时指定它的类型为number，如果一个变量没有设置类型，
并且对变量进行了初始化，那么ts编译器会对值进行类型推断，并且自动地帮变量设置上类型。
a的类型设置为了number，在以后的使用过程中a的值只能是数字。
 */
let aa: number = 12;


//声明一个函数,函数的参数类型和个数以及函数的返回值是严格规定的，下面是声明一个函数的基本结构。
function sum(a: number, b: number) : number {
    return a + b;
}

/*
如果用字面量的形式声明一个变量， 那么这个变量只能是字面量。

 */
//可以使用 | 来连接多个类型（联合类型）
let gender : "male" | "female";
// gender = "hello"
gender = "male";
gender = "female";

let c : number | string ;
c = 123 ;
c = 'hello';


//any 表示的是任意类型，一个变量设置为any后，相当于对这个变量关闭了ts类型检测。
let da: any;

da = 123;
da = "hello";
da = true;

//隐式转换为any类型
let fa;

fa = 10;
fa = 'hello';

// unknown 表示未知类型的值，其他类型的值可以赋值给unknown，但是unknown类型的值不能直接赋值给其他类型
let e : unknown;

e = 10;
e = true;
e = 'hello';
// d的类型是any, 它可以赋值给任意变量
e = f;

let s: string;

//类型断言，可以用来告诉ts编译器变量的实际类型
s = e as string;
s = <string> e;

console.log(sum(123, 569));

let j: {name: string} & {age: number};
j  = {name: '孙悟空', age: 18};