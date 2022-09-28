/*
   描述一个对象的类型
 */

import {Book} from "../class/basisOfClass";

type myObject = {
    name: string,
    age: number
}

const obj: myObject = {
    name: '林浩',
    age: 18
}

/*
     接口用来定义一个类结构,用来定义一个类包含哪些
     属性和方法。同时接口也可以当成类型声明去使用。
     接口（interface）有聚合的特性，而类型（type）没有该特性。
 */

interface myInterface {
    name: string;
    age: number;
}
interface myInterface {
    gender: string
}

const obj1: myInterface = {
    name: '林浩',
    age: 18,
    gender: '男'
}

/*
   接口和抽象类的区别与联系：
   在接口和抽象类中都可以定义属性和抽象方法。
   在接口中只能有抽象方法和属性，而在抽象类中即可以有抽象方法和属性，又可以又具体的方法和属性。
 */
interface  myClass {
    name: string;
    readBook(book: Book) :void;
}

class  myClassOf  implements myClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    readBook(book: Book) {
        console.log(book);
    }
}