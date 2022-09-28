class LNode<T> {
   public  element: T;
   public  next : LNode<T> ;
    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}

export default LNode;