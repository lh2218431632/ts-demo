/*
   function add( a: any, b: any) :any
   当参数的类型和返回值的类型一致时，又不知道参数的类型是什么类型的时候，
   就可以使用泛型来解决这个问题。
 */

function add<T> (a: T , b: T) :T {
    return a;
}

add<number>(10,20);

interface  subType {
    length: number;
}

function sub <T extends subType> ( a:T ) : T {
    return a
}

sub<subType>({length: 5});

class Person<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}