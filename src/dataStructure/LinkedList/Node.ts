class LNode<T> {
   public  element: T;
   public  next : LNode<T> ;
    constructor(element: T) {
        this.element = element;
        this.next = undefined;
    }
}

export default LNode;