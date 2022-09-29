class MyWindow {
    private static Instance: MyWindow;
    count: number;
    private  constructor(count: number) {
        this.count = count
    }
    static getInstance(): MyWindow {
        if(this.Instance === undefined) {
            this.Instance = new MyWindow(0);
        }
        return this.Instance;
    }
    add(): void {
        this.count++
    }
}

export  default  MyWindow