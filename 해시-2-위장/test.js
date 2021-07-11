// ! : 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// ! : 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이
// ! : 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
function solution(clothes) {
    var answer = 1;
    let obj = {};

    for (let i = 0; i < clothes.length; i++) {
        // 최소 2 지정(이 의상을 입지 않을 경우까지), (undefined || 1 = 1) + 1 = 2
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
        // console.log("for", obj[clothes[i][1]]);
        // console.log("obj", obj);
    }

    for (let key in obj) {
        // 조합의 경우의 수는 각 경우의 수를 곱한 것 계산 후 -1(모두 안입은 상태)
        answer *= obj[key];
    }
    return answer - 1;
}

test("solution", () => {
    expect(
        solution([
            ["yellowhat", "headgear"],
            ["bluesunglasses", "eyewear"],
            ["green_turban", "headgear"],
        ])
    ).toBe(5);
    expect(
        solution([
            ["crowmask", "face"],
            ["bluesunglasses", "face"],
            ["smoky_makeup", "face"],
        ])
    ).toBe(3);
});
