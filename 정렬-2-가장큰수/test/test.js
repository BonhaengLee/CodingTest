// 커맨드 배열의 요소만큼 for(반복)
// 첫 요소를 받으면 array를 커맨드요소1,2로 slice > sort > 커맨드요소 3 + 1번째 요소를 리턴

function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        const arr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b)
        
        answer.push(arr[commands[i][2]-1]);
    }
    console.log(answer);
    
    return answer;
}

test("solution", () => {
    expect(
        solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])
    ).toStrictEqual([5, 6, 3]);
    // expect(
    //     solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])
    // ).toBe("vinko");
    // expect(
    //     solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
    // ).toBe("mislav");
});
