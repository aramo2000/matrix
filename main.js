let matrix1 = [ [1 , 2 , 3],
                [4 , 5 , 6],
                [7 , 8 , 9],
                [1 , 2 , 3],
                [3 , 4 , 5]
            ]
let matrix2 = [ [1 , 2 , 3 , 1],   
                [4 , 5 , 6 , 4],
                [7 , 8 , 9 , 7]   
            ]
const util = require("./utils.js");
const result = util.multiplyMatrix(matrix1, matrix2);

util.printMatrix(result);