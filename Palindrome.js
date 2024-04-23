function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindrome("Civic")); 
console.log(isPalindrome("Cod"));   
console.log(isPalindrome("Radar"));  
console.log(isPalindrome("DID"));


// MIN MAX
function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { min, max };
}

// Test cases
console.log(findMinMax([1, 3, 5, 7, 9]));      
console.log(findMinMax([-1, 0, 10, 100, 50])); 
console.log(findMinMax([5, 2, 8, 4]));        
console.log(findMinMax([100]));             


// FindMissing
function findMissingNumber(numbers) {
    const n = numbers.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return totalSum - sum;
}

// Test case
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20]));