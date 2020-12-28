// 테스트 케이스
const files = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
// const files = ['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'];

function solution(files) {
  // var answer = [];
  let answerWrap = files.map((file, index) => ({ file, index }));
  console.log(answerWrap);

  // 파일명 구분 H, N, T
  // H - 사전순. 대소문자 구별X
  // N - 맨앞 0 무시
  // #: T 고려하지 않고 원래 순서대로 정렬 - 어차피 T무시니까 소문자 통일 가능

  var compare = (a, b) => {
    var regexNum = /[0-9]/g;
    // console.log('a', a);
    // console.log('b', b.match(regexNum));
    // regex에 매치되는 첫 Index 찾기
    var numIndexA = a.indexOf(a.match(regexNum)[0]);
    var numIndexB = b.indexOf(b.match(regexNum)[0]);
    // console.log(a.indexOf(a.match(regexNum)[0]));
    // Head 기준 정렬
    var sortByHead = a
      .substring(0, numIndexA)
      .toLowerCase()
      .localeCompare(b.substring(0, numIndexB).toLowerCase());
    // console.log((a.substring(0, numIndexA)).toLowerCase());

    //1, -1, 0
    // NOTE: head로 b를 그대로 둘지(1) b를 a와 바꿀지(-1) sortByHead로 판단한다. 같으면(=) num기준
    if (sortByHead === 0) {
      // Num기준 정렬
      var subStrA = parseInt(a.substring(numIndexA));
      // console.log(a.substring(numIndexA));
      var subStrB = parseInt(b.substring(numIndexB));
      if (subStrA < subStrB) {
        return -1;
      } else if (subStrA > subStrB) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortByHead === -1) {
      return -1;
    } else {
      return 1;
    }
  };

  answerWrap.sort((a, b) => {
    console.log('a', a);
    console.log(b);
    var result = compare(a.file, b.file);
    console.log();
    console.log('res', result);
    return result === 0 ? a.index - b.index : result;
  });
  return answerWrap.map(answer => answer.file);
}

console.log(solution(files));
