// ! : 한자리 숫자가 적힌 종이 조각이 흩어져있습니다.
// ! : 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// ! : 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때,
// ! : 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    var answer = 0;

    console.log(numbers.split(""));

    let a = 2;
    let i = 2;
    let j = a - 1;
    if (a === 1) {
        console.log("소수아님");
        return;
    }
    while (1) {
        if (i <= j) {
            if (a % i === 0) {
                console.log("소수아님");
                break;
            } else {
                i++;
            }
        } else {
            console.log("소수");
            break;
        }
    }
    return answer;
}
test("solution", () => {
    expect(solution("17")).toBe(3);
    expect(solution("011")).toBe(2);
    // 배열 : toStrictEqual([5, 6, 3]);
});
