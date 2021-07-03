// @ : 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// @ : 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를
// @ : 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// @ : 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는
// @ : 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// numbers의 요소를 for(반복)하면서 concat
function solution(numbers) {
    var answer = "";
    console.log(numbers.map((num) => num.toString())); // 각 숫자를 이어주기 위해서 문자열로 변경

    // console.log(
    //     numbers
    //         .map((num) => num.toString())
    //         .sort((a, b) => {
    //             console.log(b + a, a + b, b + a - (a + b));
    //             return b + a - (a + b);
    //         })
    // );

    answer = numbers
        .map((num) => num.toString())
        .sort((a, b) => b + a - (a + b));

    // 모든 요소가 0인 경우에는 /^0+/를 이용해 판단하여 "0"만 리턴한다. reduce는 ""를 초깃값으로 요소를 차례대로 이어준다.
    return answer.reduce((acc, curr) => (acc + curr).replace(/^0+/, "0"), "");
}

test("solution", () => {
    expect(solution([6, 10, 2])).toBe("6210");
    expect(solution([3, 30, 34, 5, 9])).toBe("9534330");
    // 배열 : toStrictEqual([5, 6, 3]);
});
