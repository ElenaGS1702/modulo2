const maxNum = numbers => {
    if (numbers.length === 1) {
        return numbers[0];
    }

    const mid = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, mid);
    const right = numbers.slice(mid);

    const left_max = maxNum(left);
    const right_max = maxNum(right);

    if (left_max > right_max) {
        return left_max;
    }
    return right_max;
};

numeros = [9, 5, 6, 3, 2, 1, 4, 7, 8, 5, 4, 9, 30, 35, 24, 1];
console.log(maxNum(numeros));
