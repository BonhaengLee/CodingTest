function solution(array, commands) {
    var answer = [];
    return answer;
}

test("solution", () => {
    expect(
        solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
    ).toBe([5, 6, 3]);
    // expect(
    //     solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
    // ).toBe("vinko");
    // expect(
    //     solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
    // ).toBe("mislav");
});
