// H-Index
// 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 H-Index
// citations: 어떤 과학자가 발표한 논문의 인용횟수를 담은 배열

const citations = [3, 0, 6, 1, 5];

function solution(citations) {
    var answer = 0;
    // 0 1 3 5 6
    // 뺄셈 연산 함수를 인자로 넘겨 크기비교를 하여 리턴되는 값의 음수, 양수를 통해 위치를 판단하게 할
    citations.sort(function (f, s) {
        return f - s;
    });
    // n편 중 h번 이상 인용된 논문이 h편 이상 일때 h의 최댓값이 h-index
    var h;
    for (var i = 0; i < citations.length; i++) {
        // i일때 가장 큰 h값(논문 편수)
        h = citations.length - i;

        // 논문 인용횟수가 h 이상인지 확인
        if (citations[i] >= h) {
            answer = h;
            break;
        }
    }

    return answer;
}

console.log(solution(citations));
