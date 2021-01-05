// ❤ : Example: Input: [0,1,0,3,12] -> Output: [1,3,12,0,0]
// ❤ : 1. You must do this in-place without making a copy of the array.
// ❤ : 2. Minimize the total number of operations.
nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
    var count = 0;
    // nums = [0, 1, 0, 3, 12];
    // console.log(nums);
    for (var i = 0; i < nums.length; ++i) {
        // 0을 발견하면 count를 1번 더해주고 nums배열에서 그 값을 삭제
        if (nums[i] == 0) {
            ++count;
            // 배열의 index i부터 1개의 요소 삭제
            nums.splice(i, 1);
            // index값은 한칸 앞으로 당겨짐
            --i;
        }
    }
    // 배열의 뒤에 발견한 0의 개수만큼 더해줌
    for (var i = 0; i < count; ++i) {
        nums.push(0);
    }

    // console.log(nums);
};

moveZeroes();
