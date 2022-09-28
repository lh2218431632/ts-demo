import  math  from  './math'
import {Book, Person, Student} from "./class/basisOfClass";
import Phone from "./Decorator/basis";
import Factory from "./DesignMode/简单工厂模式";
import {WaterMelonFactory,AppleFactory} from "./DesignMode/工厂方法模式";
import LinkedList from "./dataStructure/LinkedList/LinkedList";

function  add (a: number, b: number) :number {
    return a + b;
}
function comparedStudent(student1: Student, student2: Student) :boolean {
    if(student1.Id === student2.Id) {
        return true;
    }
    else {
        return false;
    }
}
let a: number = 50
console.log(a);
console.log(math(5, 6));

console.log(add(5, 6));


let book = new Book('水浒传','xxx', 2018);

let student = new Student(2018, '林浩', 18,'男');
let student1 = new Student(2019, '林浩1', 19,'男');
let student2 = new Student(2020, '林浩2', 20,'男');
let student3 = new Student(2021, '林浩3', 21,'男');
let student4 = new Student(2021, '林浩4', 21,'男');
student.readBook(book);

let iphone = new Phone('iphone');
let Hphone = new Phone('华为');
let apple = Factory.create('苹果');
let orange = Factory.create('橘子');
let xi = Factory.create('西瓜');
console.log(apple);
console.log(orange);
console.log(xi);

let apple1 = AppleFactory.create();
console.log(apple1);
let w = WaterMelonFactory.create();
console.log(w);

let linkedList = new LinkedList<Student>(comparedStudent);

linkedList.push(student);
linkedList.push(student1);
linkedList.push(student2);
linkedList.push(student3);
linkedList.insert(student4,2);
console.log(linkedList.indexOf(student3));
linkedList.removeAt(2);
console.log(linkedList);

