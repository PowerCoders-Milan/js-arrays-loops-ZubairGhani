// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random()*200);
let n1 = 0, n2 = 1, nextTerm;

function getFibonacciSequence(maxNumber){
    let fibArray = []
    fibArray [0] = 0;
    fibArray [1] = 1;
    for (let i = 2; i < maxNumber; i++){
        fibArray [i] = fibArray[i-1] + fibArray [i-2];
    }
    return fibArray;
}
 console.log(getFibonacciSequence(maxNumber));

