// numbers의 요소를 for(반복)하면서 concat

function solution(numbers) {
    var answer = '';
    return answer;
}

test("solution", () => {
    expect(
        solution([6, 10, 2])
    ).toBe("6210")
    expect(
        solution([3, 30, 34, 5, 9])
    ).toBe("9534330")
    // 배열 : toStrictEqual([5, 6, 3]);
});
