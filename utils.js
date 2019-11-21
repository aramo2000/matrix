function multiplyMatrix(m1, m2) {
    if(m1.length > 0 && m1[0].length !== m2.length) {
        return null;
    }
    let result = [];   
    for(let i = 0; i < m1.length; i++) {
        let temp = [];        
        for(let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for(let k = 0; k < m2.length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            temp.push(sum);
        }
        result.push(temp);
    }
    return result;
}

function printMatrix(mat) {
    let result = "";
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[row].length; col++) {
            result += mat[row][col] + "\t";
        }
        result += "\n";
    }
    console.log(result);
}

module.exports = {
    multiplyMatrix,
    printMatrix,
}