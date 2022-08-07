// Homework: Write a function to get the lowest number in an array

function maxInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', lower);