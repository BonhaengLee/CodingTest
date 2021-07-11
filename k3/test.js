// ! :
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
function addEdge(v, w) {
    // console.log("ad", v, w, this.adj[v], this.adj[w]);
    this.adj[v].push(w);
    this.adj[w].push(v);
    // console.log("after ad", v, w, this.adj[v], this.adj[w]);
    this.edges++;
}
function showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
        console.log(i, "=> ");
        for (let j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + " ");
            }
        }
    }
}
function dfs(k, coloring) {
    color[k] = coloring;
    for (let i = 0; i < vtx[k].length; i++) {
        let next = vtx[k][i];
        if (color[next] === 0) {
            dif(next, 3 - coloring);
        }
    }
}
function isBigraph(g, v, color) {
    for (let i = 0; i <= v; i++) {
        for (let j = 0; j < g.adj.length; j++) {
            let next = g.adj[i][j];
            if (color[i] === color[next]) return false;
        }
    }
    return true;
}
function solution(num, wires) {
    var answer = -1;
    let color = Array(num + 1).fill(1);
    g = new Graph(num + 1);

    for (let i = 0; i < wires.length; i++) {
        // console.log(wires[i][0], wires[i][1]);
        g.addEdge(wires[i][0], wires[i][1]);
    }
    for (let i = 0; i <= num + 1; i++) {
        if (color[i] === 0) dfs(i, 1);
    }
    if (isBigraph(g, num + 1, color)) console.log("yes");
    else console.log("no");

    // g.showGraph();

    return answer;
}

test("solution", () => {
    expect(
        solution(9, [
            [1, 3],
            [2, 3],
            [3, 4],
            [4, 5],
            [4, 6],
            [4, 7],
            [7, 8],
            [7, 9],
        ])
    ).toBe(3);
    expect(
        solution(4, [
            [1, 2],
            [2, 3],
            [3, 4],
        ])
    ).toBe(0);
    expect(
        solution(7, [
            [1, 2],
            [2, 7],
            [3, 7],
            [3, 4],
            [4, 5],
            [6, 7],
        ])
    ).toBe(1);
});
