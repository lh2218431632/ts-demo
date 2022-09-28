//声明一个对象类型
let a: object = {};

a = function () {

}

//age属性是一个可选属性。
let b : {name: string, age?: number};

b = {name: 'Hy', age: 18}

// [proName: string] : any 表示 一个对象可以有任意多个属性。
let ca : {name: string, [propName: string] : any}

ca = {name:'孙悟空', age: 18, gender: '男'}

/*
*   声明一个函数类型
*       语法：(参数：类型，参数：类型，...) => 返回值类型
* */
let d: (a: number, b: number) => number;

d = function (a: number , b: number): number {
    return a + b;
}
//作为函数调用时，this指向的是Window，作为方法调用时，this指向的是调用方法的对象。
function My(this: Window) : number{
    alert(this);
    return  1 + 2 ;
}

let box = document.getElementById('box');
//避免 空对象异常
box?.addEventListener('click',() => alert('我是box'));