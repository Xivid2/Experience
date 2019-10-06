// 1. Print an Array with a given Delimiter
function main(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    let result = "";

    for ( let i = 0; i < input.length; i ++ ) {
        if ( i == 0 ) {
            result += input[i];
        } else {
            result += delimiter + input[i];
        }
    }
    console.log(result);
}

// 2. Print every N-th Element from an Array
function printEveryNthElementFromAnArray(input) {
    let step = Number(input.pop());
    let newArr = [];
    for ( let i = 0; i < input.length; i = i + step ) {
        console.log(input[i]);
    }
}

// 3. Add and Remove Elements from Array
function addAndRemoveElementsFromArray(input) {
    let newArr = [1];
    for ( let i = 1; i <= input.length; i ++ ) {
        switch ( input[i] ) {
            case 'add': newArr.push(+[i + 1]);
                break;
            case 'remove':  newArr.pop();
                break;
        }
    }
    if ( newArr.length === 0 ) {
        console.log('Empty');
    }
    else {
        for ( let i = 0; i < newArr.length; i ++ ) {
            console.log(newArr[i]);
        }
    }
}

// 4. Rotate Array
function rotateArray(input) {
    let step = input.pop();
    if ( Number.isInteger(Number(step))) {
        for ( let i = 0; i < step; i ++ ) {
            let rotationStep = input.pop();
            input.unshift(rotationStep);
        }
        console.log(input.join(" "));
    }
    else {
        console.log('Empty');
    }
}

// 5. Extract an Non-Decreasing Subsequence from an Array
function extractFromArray(input) {
    let max = Number.MIN_VALUE;
    let newArr = [];
    for ( let i = 0; i < input.length; i++ ) {
        if ( Number(input[i]) > max ) {
            max = input[i];
            console.log(max);
        }
    }
}

// 6. Sort By Two Criteria
function sortTwoCriteria(input) {
    let newArr = input.slice(0);
    newArr.sort(function(a,b) {
        if ( a.length < b.length ) {
            return a.length - b.length;
        }
        else if ( a.length === b.length ) {
            return a > b;
        }
        else if ( a.length > b.length ) {
            return a.length - b.length;
        }
    });
    for ( let i = 0; i < newArr.length; i ++ ) {
        console.log(newArr[i]);
    }
}

// 7. Magic Matrices
function magicMatrices(input) {
    let rowSum = 0;
    let someBool = true;
    for ( let i = 0; i < input[0].length; i ++ ) {
        rowSum += input[0][i];
    }
    for ( let row = 0; row < input.length; row ++ ) {
        let sum = 0;
        for ( let col = 0; col < input[row].length; col ++ ) {
            sum += input[row][col];
        }
        if ( sum !== rowSum ) {
            someBool = false;
        }
    }
    for ( let col = 0; col < input[0].length; col ++ ) {
        let mus = 0;
        for ( let row = 0; row < input.length; row ++ ) {
            mus += input[row][col];
        }
        if ( mus !== rowSum ) {
            someBool = false;
        }
    }
    if ( someBool === false ) {
        console.log('false');
    }
    else {
        console.log('true');
    }
}

// 8. Spiral Matrix
function generateSpiralMatrix(input) {
    let rows = Number(input);
    let cols = Number(input);

    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    let index = 1;
    let direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

// 9. Diagonal Attack
function diagonalsAttack(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
 
    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length-1-j];
    }
 
    if (sumFirstDiagonal == sumSecondDiagonal){
        for (var q = 0; q < matrix.length; q++) {
            for (var z = 0; z < matrix.length; z++) {
                if( q != z && q != matrix.length-1-z)  {
                    matrix[q][z] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    }
    else
    {
        printMatrix(matrix);
    }
 
    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

// 10. Orbit
function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}