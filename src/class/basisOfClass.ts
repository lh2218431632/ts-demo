/*
一个类的基本结构:
class 类名 {
      readonly 属性名: 类型; 只读属性
      static 属性名: 类型; 类的属性
      static readonly 属性: 类型 ;
      static 方法 (参数: 类型) {
      }  类的方法
      属性名: 类型;
      ....
      constructor(参数: 类型) {
         this.属性名  =  xxx;
      }
      方法(参数: 类型) : 类型 {

      }
 */
export  class  Book {
    name: string ;
    author: string ;
    date: number;
    constructor(name: string, author: string , date: number) {
        this.name = name;
        this.author = author;
        this.date = date
    }
}

/*
抽象类 定义一个类的结构，子类根据抽象类的结构来实现自己的结构
 */

export abstract  class Person {
   readonly name: string;
    age: number;
    gender: string;
    static readonly  Id = 18;
    protected constructor(name:string, age: number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() : void {
        console.log(`我能吃东西`);
    }
    run() :void {
        console.log(`我能跑`);
        console.log(`${this.name}在跑`)
    }
    abstract readBook(book: Book) :Book;
}

export  class  Student extends  Person {
    Id: number;
    constructor(Id: number, name: string, age: number , gender: string) {
        super(name,age,gender);
        this.Id = Id;
    }
    readBook (book: Book) : Book {
        super.run();
        console.log(`${this.name}在读书`);
        console.log(super.name,this.age);
        console.log(book);
        return book;
    }
}



