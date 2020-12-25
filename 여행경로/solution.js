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

var answer = []; // resultList

function solution(tickets) {
  var result = new Array(tickets.length + 1);
  var used = new Array(tickets.length + 1);

  for (var i = 0; i < tickets.length; i++) {
    // 최초 출발지는 ICN
    if (tickets[i][0] === "ICN") {
      // 최초 출발지마다 재귀함수 호출 수행
      // 첫 번째 티켓 정보는 미리 담아두고
      result[0] = tickets[i][0];
      result[1] = tickets[i][1];
      // 해당 티켓을 사용한 경우와 사용하지 않았을 경우를 모두 체크해줘야 함
      used[i] = true;
      dfs(tickets, used, 2, tickets[i][1], result);
      used[i] = false;
    }
  }
  // 배열 오름차순 정렬
  answer.sort(function (o1, o2) {
    for (var i = 0; i < o1.length; i++) {
      if (o1[i].localeCompare(o2[i]) > 0) {
        return 1;
      } else if (o1[i].localeCompare(o2[i]) < 0) {
        return -1;
      }
    }
    return 0;
  });
  // 오름차순 정렬된 배열의 첫 번째 리턴
  console.log(answer[0]);
  return answer[0];
}

function dfs(tickets, used, resultIdx, pre, result) {
  // 모든 티켓을 다 썼을 경우
  if (resultIdx === result.length) {
    var tmp = new Array(result.length);

    for (var i = 0; i < result.length; i++) {
      tmp[i] = result[i];
    }
    answer.push(tmp);
    return;
  }

  for (var i = 0; i < tickets.length; i++) {
    // 이전 티켓의 목적지와 현재 티켓의 출발지가 같으면
    if (!used[i] && tickets[i][0] === pre) {
      result[resultIdx] = tickets[i][1]; // 도착지 입력
      // 재귀함수 호출
      used[i] = true; // 티켓 사용
      dfs(tickets, used, resultIdx + 1, tickets[i][1], result);
      used[i] = false; // 티켓 미사용
    }
  }
}
// 코드 실행
solution(tickets);
