// ! : 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// ! : 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이
// ! : 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
function solution(a, b, c) {
    var answer;
    let res = String(a * b * c);
    console.log(res);

    for (let x of res) {
        console.log(!isNaN(x));
    }
    return (answer = res);
}

test("solution", () => {
    expect(solution(150, 266, 427)).toBe((3, 1, 0, 2, 0, 0, 0, 2, 0, 0));
    // expect(
    //     solution([
    //         ["crowmask", "face"],
    //         ["bluesunglasses", "face"],
    //         ["smoky_makeup", "face"],
    //     ])
    // ).toBe(3);
});
