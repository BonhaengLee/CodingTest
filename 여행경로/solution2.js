// 테스트 케이스
// const tickets = [
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"],
// ];
const tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

const answer = []; // resultList

function solution(tickets) {
  let result = new Array(tickets.length + 1);
  let used = new Array(tickets.length + 1);

  for (let i = 0; i < tickets.length; i++) {
    // 최초 출발지는 ICN
    if (tickets[i][0] === "ICN") {
      // 최초 출발지마다 재귀함수 호출 수행
      // 첫 번째 티켓 정보는 미리 담아두고
      //   console.log("rst0", tickets[i][0]);
      //   console.log("rst1", tickets[i][1]);
      result[0] = tickets[i][0];
      result[1] = tickets[i][1];
      console.log("출발", result);
      // 해당 티켓을 사용한 경우와 사용하지 않았을 경우를 모두 체크해줘야 함
      used[i] = true;
      dfs(tickets, used, 2, tickets[i][1], result);
      used[i] = false;
    }
  }
  console.log("정렬 전 리턴 전체", answer);
  // 배열 오름차순 정렬
  answer.sort(function (o1, o2) {
    for (let i = 0; i < o1.length; i++) {
      console.log("1", o1);
      console.log("2", o2);
      if (o1[i].localeCompare(o2[i]) > 0) {
        console.log("사전반대", o1[i]);
        console.log("사전반대", o2[i]);
        return 1; // o2가 먼저 오게 한다. 원래 앞에 위치함.
      } else if (o1[i].localeCompare(o2[i]) < 0) {
        console.log("사전순", o1[i]);
        console.log("사전순", o2[i]);
        return -1; // o1이 먼저 오게 한다. 순서가 뒤집힌다? 여기서 o1은 [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]
      }
    }
    return 0;
  });
  // 오름차순 정렬된 배열의 첫 번째 리턴
  console.log("리턴 전체", answer);
  console.log("리턴", answer[0]);
  return answer[0];
}

function dfs(tickets, used, resultIdx, pre, result) {
  // 모든 티켓을 다 썼을 경우
  if (resultIdx === result.length) {
    let tmp = new Array(result.length);

    tmp = result.slice(); // 얕은 복사 for문 속도 차이

    answer.push(tmp);
    return;
  }

  for (let i = 0; i < tickets.length; i++) {
    // 이전 티켓의 목적지와 현재 티켓의 출발지가 같으면
    if (!used[i] && tickets[i][0] === pre) {
      result[resultIdx] = tickets[i][1]; // 도착지 입력
      //   console.log("현재 result 배열", result);
      // 재귀함수 호출
      used[i] = true; // 티켓 사용
      dfs(tickets, used, resultIdx + 1, tickets[i][1], result);
      used[i] = false; // 티켓 미사용
    }
  }
}
// 코드 실행
solution(tickets);
