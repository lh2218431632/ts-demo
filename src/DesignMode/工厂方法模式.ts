abstract class Plant {
    name: string;
    protected constructor(name: string) {
        this.name = name;
    }
    abstract grow() :void;
}

class Apple extends Plant {
    name: string;
    taste: string;
    constructor(name:string,taste:string) {
        super(name);
        this.taste = taste;
    }
    grow(): void {
        console.log(`苹果正在生长`);
    }
}

class WaterMelon extends Plant {
    name: string;
    taste:string;
    constructor(name:string, taste:string) {
        super(name);
        this.taste = taste;
    }

    grow(): void {
        console.log(`西瓜正在生长`);
    }

}

export  class AppleFactory  {
     static create(): Plant {
        return new Apple('苹果','甜');
    }

}

export class  WaterMelonFactory {
    static create(): Plant {
        return new WaterMelon('西瓜','酸');
    }
}

