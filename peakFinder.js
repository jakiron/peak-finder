const getDimensions = input => {
    if(!input.length) return 0;
    else if(input.length && !input[0].length) return 1;
    else if(input.length && input[0].length) return 2;
}

const findPeakInArray = array => {
    try {
        let start = 0;
        let end = array.length - 1;
        let peak = -1;
        let index = -1;
        while(start <= end) {
            const middle = Math.floor((start + end) / 2);
            if(middle - 1 > -1 && array[middle] < array[middle - 1]) end = middle - 1;
            else if (middle + 1 < array.length && array[middle] < array[middle + 1]) start = middle + 1;
            else{
                peak = array[middle];
                index = middle;
                break;
            }
        }

        return [peak, index];
    }
    catch(error) {
        return [-1, -1];
    }
};

const findGlobalMaximumInCol = (matrix, rows, col) => {
    let max = matrix[0][col];
    let index = 0;
    for(let i = 1; i < rows; ++i) {
        if(matrix[i][col] >= max){
            max = matrix[i][col];
            index = i;
        }
    }

    return [max, index];
};

const findPeakInMatrix = matrix => {
    try {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let start = 0;
        let end = cols - 1;
        let peak = -1;
        let index = [-1, -1];

        while(start <= end) {
            const middle = Math.floor((start + end) / 2);
            const [colMax, rowIndex] = findGlobalMaximumInCol(matrix, rows, middle);
            if(middle - 1 > -1 && colMax < matrix[rowIndex][middle - 1]) end = middle - 1;
            else if(middle + 1 < cols && colMax < matrix[rowIndex][middle + 1]) start = middle + 1;
            else {
                peak = colMax;
                index = [rowIndex, middle];
                break;
            }
        }

        return [peak, index];
    }
    catch(error) {
        return [-1,-1];
    }
};

const peakFinder = input => {
    const dimensions = getDimensions(input);
    console.log(dimensions);
    if(!dimensions) return -1;
    else if(dimensions === 1) return findPeakInArray(input);
    return findPeakInMatrix(input);
};

export default peakFinder;