// ! :
function solution(deposit) {
    var answer = [];
    let hist = [];
    for (let i = 0; i < deposit.length; i++) {
        let minus = 0;
        if (deposit[i] > 0) {
            // console.log("입금");
            hist.push(deposit[i]);
        } else {
            minus = deposit[i];
            // console.log("출금,m", minus);

            while (1) {
                let temp = hist.pop();
                let rest = temp + minus;
                // console.log("내역에서 하나 뽑음", temp, "잔액", rest);

                if (rest > 0) {
                    hist.push(rest);
                    // console.log("잔액남음, 입금", rest, hist);
                    break;
                } else {
                    if (rest === 0) break;
                    minus = rest;
                    // console.log("잔액부족, 한번더", minus);
                }
            }
        }
    }
    // console.log("hist", hist);

    answer = hist;
    return answer;
}

test("solution", () => {
    expect(solution([500, 1000, -300, 200, -400, 100, -100])).toStrictEqual([
        500, 500,
    ]);
    expect(solution([500, 1000, 2000, -1000, -1500, 500])).toStrictEqual([
        500, 500, 500,
    ]);
});
