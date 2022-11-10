const fiveSort = (nums) => {

    let count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i], i)
        if ( nums[i] === 5) {
            nums.splice(i, 1)
            count++
        }
    }

    console.log(count, 'count')

    while (count > 0 ) {
        nums.push(5);
        count--
    }

    return nums

}

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]))
