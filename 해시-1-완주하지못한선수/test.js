// ! : 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// ! : 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이
// ! : 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
function solution(participant, completion) {
    var answer = "";
    participant = participant.sort();
    completion = completion.sort();
    for (let i = 0; i < participant.length; ++i) {
        console.log(participant, completion);
        if (participant[i] !== completion[i]) return participant[i];
    }
    return answer;
}

test("solution", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
    expect(
        solution(
            ["marina", "josipa", "nikola", "vinko", "filipa"],
            ["josipa", "filipa", "marina", "nikola"]
        )
    ).toBe("vinko");
    expect(
        solution(
            ["mislav", "stanko", "mislav", "ana"],
            ["stanko", "ana", "mislav"]
        )
    ).toBe("mislav");
});
