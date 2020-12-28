// 테스트 케이스
const files = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG'];
// const files = ['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'];

function solution(files) {
  let answer = check(files);
  let tmpanswer = answer;
  let chk = false;
  console.log(files);

  // 배열 내림차순 정렬
  tmpanswer.sort(function (o1, o2) {
    for (var i = 0; i < o1.length; i++) {
      console.log('o1[i]', o1[i]);
      // NOTE: 해당 문자열이 영어 대소문자인 경우 일반적인 사전식 비교 정렬
      // console.log('o1', o1[i]);
      // console.log('o2', o2[i]);
      if (!(o1[i] >= 48 && o1[i] <= 57) && chk === false) {
        console.log('숫자가 아니다.', o1[i].toLowerCase(), o2[i].toLowerCase());
        if (
          !(o1[i].toLowerCase() === o2[i].toLowerCase()) &&
          o1[i].toLowerCase().localeCompare(o2[i]) < 0
        ) {
          console.log(o2[i].toLowerCase(), '와 바꾸자');
          console.log();
          return -1; // 바꾼다.
        } else if (o1[i].toLowerCase().localeCompare(o2[i]) > 0) {
          return 1; // 원래 앞에 있던 걸(o2) 그대로 둔다.
        } else {
          console.log('숫자임');
          //   console.log('o1', o1[1]);
          //   console.log('o2', o2[1]);
          if (parseInt(o1[1]) === parseInt(o2[1])) {
            console.log('같다');
            // if (o1[1].length < o2[1].length) {
            //   return -1;
            // } else {
            //   return 1;
            // }
          }
          if (parseInt(o1[1]) < parseInt(o2[1])) {
            // if (o1[1].length > o2[1].length) {
            console.log(o1[1], '는 ', o2[1], '보다 작다');
            return -1; // 바꾼다.
            // } else {
            //   return 1;
            // }
          } else {
            console.log(o1[1], '는 ', o2[1], '보다 크다');
            return 1;
          }
        }
      }
    }
    return 0;
  });

  // NOTE: HEAD, NUMBER, TAIL 연결
  answer.map((x, i) => {
    var str = '';
    console.log(x);
    x.map((item, i) => {
      console.log(item);
      str += item;
    });
    x[i] = str;
    str = '';
    // console.log(x[i]);
    answer[i] = x[i];
  });

  console.log('Hanswer', answer);

  return answer;
}

// NOTE: 1. HEAD, NUMBER, TAIL 분리
function check(files) {
  let str = '';
  let num = '';
  let rem = '';
  let tmp = [];
  let result = [];
  let chk = false;

  for (let i = 0; i < files.length; i++) {
    let input = files[i].toUpperCase();
    for (let j = 0; j < input.length; j++) {
      let tempCh = input.charCodeAt(j);
      /* HEAD : tempCh가 영어 대소문자인 경우 */
      if ((tempCh < 48 || tempCh > 57) && chk === false) {
        str += files[i].charAt(j);
        // console.log('str', str);
      } else if (tempCh >= 48 && tempCh <= 57) {
        /* NUMBNER : tempCh가 숫자인 경우 */
        num += files[i].charAt(j);
        // console.log('num', num);
        chk = true;
      } else {
        /* TAIL */
        rem += files[i].charAt(j);
        // console.log('rem', rem);
      }
    }
    tmp = [];
    tmp.push(str);
    tmp.push(num);
    tmp.push(rem);
    result[i] = tmp;
    str = '';
    num = '';
    rem = '';
    chk = false;
  }
  return result;
}

solution(files);
