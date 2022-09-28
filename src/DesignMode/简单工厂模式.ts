abstract class Plant {
    name:string;
    protected constructor(name: string) {
        this.name = name;
    }
    abstract grow():void;
}

class Apple extends Plant {
    name: string;
    taste: string;
    constructor(name: string, taste: string) {
        super(name);
        this.taste = taste
    }
    grow(): void {
        console.log(`苹果在生长`)
    }
}

class Orange extends  Plant {
    name: string;
    taste: string;
    constructor(name:string, taste: string) {
        super(name);
        this.taste = taste;
    }
    grow() :void {
        console.log(`橘子在生长`);
    }
}

export default  class Factory {
    static create(type: string):Plant {
        switch (type) {
            case '苹果' :
                return new Apple('苹果', '甜');
            case '橘子' :
                return new Orange('橘子', '酸');
            default: new Error('没有找到您要的水果');
        }
    }
}