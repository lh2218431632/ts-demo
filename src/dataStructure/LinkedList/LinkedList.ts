import LNode from "./Node";

class LinkedList<T> {
    protected count: number;
    head: LNode<T>;
    compared: Function;

    constructor(compared: Function) {
        this.count = 0;
        this.head = undefined;
        this.compared = compared;
    }

    push(element: T): void {
        this.count++;
        let node = new LNode<T>(element);
        if (this.head === undefined) {
            this.head = node;
            return;
        } else {
            let currentNode: LNode<T> = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

    insert(element: T, index: number): number {
        if (index > this.count) {
            return -1;
        } else {
            let insertNode: LNode<T> = new LNode<T>(element);
            let preNode: LNode<T> = undefined;
            let currentNode: LNode<T> = this.head;
            this.count++;
            for (let i = 0; i < index; i++) {
                preNode = currentNode;
                currentNode = currentNode.next;
            }
            insertNode.next = preNode.next;
            preNode.next = insertNode;
            return 1;
        }
    }

    getElementAt(index: number): LNode<T> {
        if (index > this.count) {
            return undefined;
        } else {
            let currentNode: LNode<T> = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    indexOf(element: T): number {
        if (this.head == null) {
            return -1;
        } else {
            let currentNode: LNode<T> = this.head;
            let index = 0;
            while (currentNode != null) {
                if (this.compared(currentNode.element, element)) {
                    return index;
                } else {
                    currentNode = currentNode.next;
                    index++;
                }
            }
            return -1;
        }
    }

    remove(element: T): boolean {
        if (this.head === null) {
            return true;
        } else if (this.compared(this.head.element, element)) {
            this.head = this.head.next ;
            this.count --;
            return false;
        } else {
            let currentNode: LNode<T> = this.head.next;
            let preNode: LNode<T> = this.head;
            while (currentNode != null) {
                if (this.compared(currentNode.element, element)) {
                    preNode.next = currentNode.next;
                    this.count--;
                    return true;
                }
                preNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    isEmpty() :boolean {
       return  this.count === 0 ? true :false;
    }
    removeAt(index: number) :boolean {
        if(index > this.count) return  false;
        else if(index ==0) {
            this.head = this.head.next;
            this.count --;
            return true;
        }
        else {
            let currentNode : LNode<T> = this.head;
            let preNode : LNode<T> = undefined;
            for(let i = 0 ; i < index ;i++) {
                preNode = currentNode;
                currentNode = currentNode.next;
            }
            preNode.next = currentNode.next;
            this.count --;
            return true;
        }
    }
    getAll(node: LNode<T>): void {
        if(node === null) {
            return;
        }
        this.getAll(node.next);
        console.log(node.element);
    }
    get size()  {
        return this.count;
    }
}

export  default  LinkedList