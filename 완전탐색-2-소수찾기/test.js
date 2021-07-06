// ! : 한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
// ! : 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// ! : 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때,
// ! : 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
function primality(n) {
    // 1은 소수도 합성수도 아니므로 이 알고리즘은 n≥2 를 만족하는 경우에만
    let i = 2;
    if (n <= 1) return false;
    if (n === 2) return true; //*
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i += 1;
    }
    return true;
}
// # : 완전탐색이고 모든 경우의 수에 대해서 조건에 성립하는지 알아봐야 한다. 특히 이 문제는 이를 위해 순열과 조합 사용
// # : 조합 먼저 구현한다. 여기에서 한줄만 바꾸면 순열이 된다. 그 차이는 순서의 여부다.
// # : 조합의 순서는 상관 없다. [1, 2, 3] = [3, 2, 1]가 나오면 같은 구성이므로 하나의 조합으로 취급한다.
// 시작
//   1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
//   [1, 2, 3] [1, 2, 4] [1, 3, 4]
//   2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
//   [2, 3, 4]
//   3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다.
//   []
//   4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
//   []
// 종료 >> 재귀로 구현
// const getCombinations = (arr, selectNum) => {
//     const res = [];
//     if (selectNum === 1) return arr.map((item) => [item]); // 1개 택할 때는 모든 배열 리턴
//     arr.forEach((fixed, idx, org) => {
//         const rest = org.slice(idx + 1);
//         const combinations = getCombinations(rest, selectNum - 1); // 나머지에 대해 조합
//         const combAttaced = combinations.map((comb) => [fixed, ...comb]);
//         res.push(...combAttaced);
//     });
//     return res;
// }; >> 순열로 확장
const getPermutations = (arr, selectNum) => {
    const res = [];
    if (selectNum == 1) return arr.map((item) => [item]); // 1개 택할 때는 모든 배열 리턴
    arr.forEach((fixed, idx, org) => {
        const rest = [...org.slice(0, idx), ...org.slice(idx + 1)];
        const permutations = getPermutations(rest, selectNum - 1); // 나머지에 대해 조합
        const combAttaced = permutations.map((perm) =>
            [fixed, ...perm].join("")
        );
        res.push(...combAttaced);
    });
    return res;
};
function solution(numbers) {
    var answer = 0;
    let list = [];

    for (let i = 1; i < numbers.length + 1; i++) {
        getPermutations(numbers.split(""), i).forEach(
            (item) => primality(Number(item)) && list.push(Number(item))
        );
    }
    // set 객체로 중복 없는 데이터 표현
    const set = new Set(list);
    const uniqueArr = [...set];
    answer = uniqueArr.length;

    return answer;
}
test("solution", () => {
    expect(solution("17")).toBe(3);
    expect(solution("011")).toBe(2);
    // 배열 : toStrictEqual([5, 6, 3]);
});
