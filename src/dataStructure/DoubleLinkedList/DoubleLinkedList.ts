import LinkedList from "../LinkedList/LinkedList";
import DoubleNode from "./DoubleNode";
class DoubleLinkedList<T> extends  LinkedList <T> {
    protected  count: number;
    head: DoubleNode<T>;
    tail: DoubleNode<T>;
    compared: Function;
    constructor(compared: Function) {
        super(compared);
        this.tail = null;
        this.head = null;
    }
    push(element: T): void {
        if(this.head === null) {
            this.head = new DoubleNode<T>(element);
            this.tail = this.head;
            console.log(this.tail)
        }
        else {
            let newNode = new DoubleNode<T>(element);
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.count ++;
    }
    remove(element:T) :boolean {
        if(this.head == null) {
            return true;
        }
        else {
            let currentNode: DoubleNode<T> = this.head;
            if(this.compared(this.head.element,element)) {
                this.head = this.head.next;
                this.head.pre = null ;
                this.count --;
                return true;
            }
            else if(this.compared(this.tail.element,element)) {
                this.tail  = this.tail.pre;
                this.tail.next = null;
                this.count --;
                return true;
            }
            else {
                while (currentNode != null) {
                    if(this.compared(currentNode.element,element)) {
                        currentNode.pre.next =  currentNode.next;
                        currentNode.next.pre = currentNode.pre;
                        this.count --;
                        return true;
                    }
                    currentNode = currentNode.next;
                }
            }
        }
        return false;
    }
    insert(element: T, index: number): number {
        if(index > this.count) return -1;
        let newNode = new DoubleNode<T>(element);
        if(index ==0) {
            if(this.isEmpty()) {
                this.head = newNode;
                this.tail = newNode;
                return 1;
            }
            else {
                this.head.pre = newNode;
                newNode.next = this.head;
                this.head = newNode;
                return 1;
            }
        }
        else if(index == this.count-1) {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
            return 1;
        }
        else {
            let currentNode = this.head;
            for(let i =0 ; i < index ; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode;
            newNode.pre  = currentNode.pre;
            currentNode.pre.next = newNode;
            currentNode.pre = newNode;
            return 1;
        }
        return -1;
    }
}

export  default  DoubleLinkedList