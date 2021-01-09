let Edge = [];
class Queue {
    constructor() {
        this.store = [];
    }

    enqueue(item) {
        this.store.push(item);
    }

    dequeue() {
        return this.store.shift();
    }

    length() {
        return this.store.length;
    }

    isEmpty() {
        return this.store.length === 0 ? true : false;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue(); // 1

let check = [];
let answer = 0;
const solution = (n, edge) => {
    Edge = new Array(n + 1);
    // console.log(Edge);
    for (let i = 1; i <= n; i++) {
        Edge[i] = new Array();
    }

    console.log(Edge);

    for (let i = 0; i < edge.length; i++) {
        let u = edge[i][0];
        let v = edge[i][1];

        Edge[u].push(v); // ArrayList에서의 add는 Array.push?
        Edge[v].push(u);
    }

    console.log(Edge);

    let q = new Queue();
    q.enqueue(1);
    check = new Array(n + 1);
    check[1] = true;

    let time = 0;
    let answer = 0;
    while (!q.isEmpty()) {
        let size = q.length();

        let tmp = 0;
        for (let s = 0; s < size; s++) {
            let cur = q.dequeue();
            for (let next in Edge[cur]) {
                if (check[next]) continue;
                check[next] = true;
                tmp++;
                q.enqueue(next);
            }
        }
        if (tmp != 0) answer = tmp;
        ++time;
    }
    return answer;
};

test("solution", () => {
    expect(
        solution(6, [
            [3, 6],
            [4, 3],
            [3, 2],
            [1, 3],
            [1, 2],
            [2, 4],
            [5, 2],
        ])
    ).toBe(3);
    expect(
        solution(7, [
            [3, 6],
            [4, 3],
            [3, 2],
            [1, 3],
            [1, 2],
            [2, 4],
            [5, 2],
            [5, 7],
        ])
    ).toBe(1);
    expect(
        solution(7, [
            [1, 2],
            [2, 5],
            [5, 7],
            [4, 7],
            [2, 7],
            [1, 4],
            [1, 3],
            [3, 6],
            [3, 4],
        ])
    ).toBe(30);
});
