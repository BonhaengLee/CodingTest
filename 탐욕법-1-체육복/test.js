// ! : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// ! : 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// ! : 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
// ! : 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
// ! : 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// ! : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// ! : 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
// ! : 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
// ! : 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// ! : 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
// ! : 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
// ! : 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// ! : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// ! : 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
function solution(n, lost, reserve) {
    var answer = 0;
    var uniforms = Array(n).fill(1); // const 자동 변경됐는데 var로 바꾸니까 실패(런타임에러가 사라지네)
    for (let i = 1; i <= n; ++i) {
        if (lost.indexOf(i) !== -1) uniforms[i - 1] -= 1;
        if (reserve.indexOf(i) !== -1) uniforms[i - 1] += 1;
    }
    for (let [index, curr] of uniforms.entries()) {
        if (curr === 0 && uniforms[index + 1] > 1) {
            uniforms[index]++;
            uniforms[index + 1]--;
        }
        if (curr === 0 && uniforms[index - 1] > 1) {
            uniforms[index]++;
            uniforms[index - 1]--;
        }
    }

    answer = uniforms.filter((num) => num >= 1).length;

    return answer;
}
test("solution", () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toBe(5);
    expect(solution(5, [2, 4], [3])).toBe(4);
    expect(solution(3, [3], [1])).toBe(2);
    // 배열 : toStrictEqual([5, 6, 3]);
});
