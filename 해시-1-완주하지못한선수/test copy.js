function solution(participant, completion) {
    var answer = '';
    return answer;
}

test("solution", () => {
    expect(
        solution(["leo", "kiki", "eden"], ["eden", "kiki"])
    ).toBe("leo");
    expect(
        solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
    ).toBe("vinko");
    expect(
        solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
    ).toBe("mislav");
});
