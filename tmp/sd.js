let x = 8;
let ans = 0;

function func(x, ans) {
  while (x != 0) {
    // 자바에서 x/2는 소숫점 없는 정수가 나오므로 0에서 끝나지만 
    // 자바스크립트에서는 x/2가 소수로 계산되어 결과값이 달랐음 => parseInt 이용
    x = parseInt(x / 2); 
    // 8 4 2 1 0이므로 4번 반복 후 break됨. => 4
    // console.log(x);
    ans++;
  }

  return ans;
}

console.log(func(x, ans));
