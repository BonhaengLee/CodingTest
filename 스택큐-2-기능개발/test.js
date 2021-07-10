// ! : 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.
// ! : 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
// ! : 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.
// ! : 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
// ! : 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
function solution(progresses, speeds) {
    var answer = [];
    stack = []; // 스택을 배열로 구현함
    // 시간 측정 - 각 기능이 며칠 걸리는지
    for (let i = 0; i < progresses.length; i++) {
        let prg = progresses[i];
        let time = 0;
        while (1) {
            if (prg >= 100) break;
            prg += speeds[i];
            time++;
        }
        answer[i] = time;
    }
    // 값 확인 - 기준값을 잡고 그 다음값을 비교하면서 더 작은 값이 존재할 때 count를 더해준다. 없으면 break;
    for (let i = 0; i < answer.length; i++) {
        let org = answer[i];
        let count = 1;
        if (org < 0) {
            continue;
        }
        for (let j = i + 1; j < answer.length; j++) {
            let compare = answer[j];
            if (org >= compare) {
                // 확인하면 -1로 변경
                answer[j] = -1;
                count++;
            } else {
                // 기준값보다 긴 값이 나타나면 그 뒤로는 확인할 필요가 없음
                break;
            }
        }
        stack.push(count);
    }
    answer = stack;
    return answer;
}
test("solution", () => {
    expect(solution([93, 30, 55], [1, 30, 5])).toStrictEqual([2, 1]);
    expect(
        solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
    ).toStrictEqual([1, 3, 2]);
    // 배열 : toStrictEqual([5, 6, 3]);
});
