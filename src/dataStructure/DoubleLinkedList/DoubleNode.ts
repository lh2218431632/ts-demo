import LNode from "../LinkedList/Node";

class DoubleNode<T> extends LNode<T> {
    public  element: T;
    public  next : DoubleNode<T> ;
    public  pre: DoubleNode<T>;
    constructor(element : T) {
        super(element);
        this.pre = null;
        this.next = null;
    }
}

export default  DoubleNode