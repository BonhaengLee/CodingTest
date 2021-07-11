// ! :
function solution(d, m) {
    var answer = 0;
    let box = 1; // 보내는 상자 수
    let cnt = 0; // 사용한 보트 수 ( 부서진 거 포함 )
    for (let i = 0; i < d.length; ++i) {
        if (d[i] >= box) {
            // console.log("배송완료", box, "추가전", cnt);
            m -= box;
            box = box * 2;
            cnt++;
        } else {
            // console.log("보트 부서짐", "추가전", cnt);
            box = 1;
            cnt++;
        }
        if (m <= 0) {
            // console.log("성공", m, cnt);
            return cnt;
        }
    }
    answer = -1;
    return answer;
}

test("solution", () => {
    expect(solution([1, 3, 2, 5, 4], 6)).toBe(5);
    expect(solution([2, 2, 4, 3], 6)).toBe(3);
    expect(solution([2, 2, 4, 3], 8)).toBe(-1);
});
