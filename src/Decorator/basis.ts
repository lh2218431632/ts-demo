function setProperty(params) {
    params.prototype.size = '50'
}


@setProperty
class Phone {
    constructor(private _name: string) {
    }
    get name() {
        return  this._name
    }
    set name (name:string) {
        this._name = name;
    }
}

export  default  Phone;