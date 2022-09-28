/*
    被public 修饰符修饰的属性可以在类的内部 、子类、实例对象 直接访问。
    被private 修饰符修饰的属性 只能在类的内部直接访问。
    被protect 修饰符修饰的属性 只能在类的内部或者子类的内部直接访问，不能被实例对象访问。
 */
class Car {
    protected  _name: string;
    private  _size: number;
    constructor(name:string , size: number) {
        this._name = name;
        this._size = size;
    }
    getSize() :number {
        return this._size;
    }
    setSize(size: number) :void {
        this._size = size;
    }
}

class Bus extends  Car {
    constructor(name:string ,size: number) {
        super(name,size);
    }
    getName () {
        return super._name;
    }
}

const car = new Car('法拉利' , 20);

