// @ : 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// @ : 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
// @ : J를 대기목록의 가장 마지막에 넣습니다.
// @ : 3. 그렇지 않으면 J를 인쇄합니다.
// ! : 예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고
// ! : 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
// ! : 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다.
// ! : 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
// ! : 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가
// ! : 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때,
// ! : 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

// @ : stack을 따로 사용하지 않음
// @ : 우선순위가 제일 높다면 인쇄를 하고 카운트를 올려준다.
// @ : 아니라면 꺼낸 문서를 맨 뒤에 집어 넣는다.
function solution(priorities, location) {
    var answer = 0;
    //var stack = [];
    //var p = [];
    var cnt = 0;
    // for (let i = 0; i < priorities.length; ++i) {
    while (1) {
        if (priorities.length === 0) break;
        let org = priorities.shift(); //let org = priorities[i];
        // console.log("org", org);
        // for (let j = i + 1; j < priorities.length; ++j) {
        //     console.log("pj", priorities[j]);
        console.log(
            "더 큰 게 존재하는지 - 0보다 크면 존재",
            priorities.filter((e) => e > org).length
        );

        if (priorities.filter((e) => e > org).length > 0) {
            priorities.push(org); //stack.push(priorities[j]); //stack.push(i);
            console.log("priorities", priorities);
            // priorities[i] = -1;
            // break;
        } else {
            // 인쇄횟수
            cnt++;
            console.log("cnt", cnt);

            if (location === 0) {
                console.log("lc", location);
                return (answer = cnt);
            }
        }

        location--;
        console.log("loc", location);
        // 문서가 뒤로 이동하면 맨뒤인덱스로 변경
        if (location === -1) location = priorities.length - 1;
    }
    return answer;
}
test("solution", () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
    // 배열 : toStrictEqual([5, 6, 3]);
});
