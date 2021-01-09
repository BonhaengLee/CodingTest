// 테스트 케이스
// const files = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
const results = [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
];

let answer = []; // resultList

function solution(n, results) {
    const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));
    let answer = 0;

    for (let i = 0; i < graph.length; i++) {
        graph[i][i] = 0;
    }

    for (let i = 0; i < results.length; i++) {
        const [win, lose] = results[i];
        graph[win - 1][lose - 1] = 0;
    }

    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            if (graph[i][k] === Infinity) {
                continue;
            }
            for (let j = 0; j < graph.length; j++) {
                if (i === k || j === k || graph[k][j] === Infinity) {
                    continue;
                }
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    graph.map((row, idx) => {
        let degree = 0;
        row.map((v) => (v === 0 ? degree++ : null));

        for (let i = 0; i < n; i++) {
            if (i === idx) {
                continue;
            }
            graph[i][idx] === 0 ? degree++ : null;
        }
        if (degree === n) answer++;
    });

    return answer;
}

console.log(solution(5, results));
