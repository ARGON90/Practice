class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");

a.next = b;


const insertNode = (head, value, index) => {
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    let current = head;
    let newNode = new Node(value)
    let count = 0;

    if (index === 0) {
        newNode.next = head;
        head = newNode
    }

    while (current) {
        let targetTail = current.next;
        if (count === index - 1) {
            current.next = newNode;
            newNode.next = targetTail
        }
        count++
        current = current.next;
    }
    while (head) {
        console.log(head.val)
        head = head.next;
    }
};

insertNode(a, 'z', 0);
// a -> b -> x -> c -> d


let a = b
b = 3
console.log(a, b)
//test push
