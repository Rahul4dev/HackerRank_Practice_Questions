// BirthDay Cake Candles

function birthdayCakeCandles(candles) {
    let x = 0;
    let max = Math.max(...candles);
    for(let i=0;i<candles.length; i++) {
        if(candles[i] == max){
            x++;
        }
    }
    return x;
}

let candles = [3, 2, 1, 3];
console.log(maxCandles(a));  // 2  // 3 candles 2 times.

===========================================================================================================================================================

// Min MAx SUM 

function minMaxSum(arr) {
    let minValue = 0;
    let maxValue = 0;
    let max = 0;
    let min = 0;
    result = [];
    max = Math.min(...arr);
    min = Math.max(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    maxValue = sum - max; 
    minValue = sum - min;
    result.push(maxValue);
    result.push(minValue);
    return result;
}

let a = [1,3,4,56,6];
console.log(minMaxSum(a));  // [69,14]


===========================================================================================================================================================

 // Time Conversion AM-PM to 24hrs System
 
 function timeConversion(s) {
    // Write your code here
    const timeArr = s.slice(0, 8).split(':');
    
    // check if PM or AM
    if(s.includes("PM")) {
        // if PM
        if(timeArr[0] == 12) {
            timeArr[0] = '12'
        } else {
            timeArr[0] = Number(timeArr[0]) + 12
        }
    } else {
        // if AM
       if(timeArr[0] == 12) {
           timeArr[0] = '00'
       }
    }
    return timeArr.join(':')
}

let s = '07:05:45PM';
console.log(timeConversion(s) );  // 19:05:45

===========================================================================================================================================================

// build a Stair Case by #

function staircase(n) {
    // Write your code here
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n - i ; j++){
        process.stdout.write(' ');
        }
        for(let j = 1 ; j <= i ; j++){
        process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

console.log(stairCase(6));  
it will run on HackerRank or Plain JS script.


===========================================================================================================================================================

// Bull or Bear 

function bullOrBear(t) {
   // if(t.length <2) return ;
    while( t.length == 2) {
        if( t[0] < t[1] ) {
        return "Profit";
    }else if(t[0] == t[1]){
        
        return "Neutral";
    }
         return "Loss";
    }   
}

let a = [2,3];
let b = [1];
let c = [3,3];
let d = [4,3];

console.log(bullOrBear(a));  // Profit
console.log(bullOrBear(b));  // 
console.log(bullOrBear(c));  // Neutral
console.log(bullOrBear(d));  // Loss

===========================================================================================================================================================

// Big sum from an Array

function bigSum(arr) {
    let x = BigInt(23);
    for(i=0;i<arr.length-1;i++){
        arr[i+1] += arr[i];
    }
    x = arr[arr.length-1];
    return x;
}

let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(bigSum(a));  // 5000000015


===========================================================================================================================================================

// Compare the Triplet

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let finalResult = [];
    for( i = 0 ; i<a.length ; i++ ){
        if(a[i] > b[i]) {
            alicePoints++;
        } else if (a[i] < b[i]) {
            bobPoints++;            
        }        
    }
    finalResult.push(alicePoints);
    finalResult.push(bobPoints);
    return finalResult;
}

let a = [1, 2, 3];
let b = [3, 2, 1];
console.log(compareTriplets(a,b));  // [1, 1]

===========================================================================================================================================================
// Count Fruits in the vicinity
function countFruits(s,t,a,b,m,n,apples, oranges) {
    let actualDistanceApple = [];
    let actualDistanceOrange = [];
    let countApples = 0;
    let countOranges = 0;
    
    // for apples
    for (let i=0;i<m ; i++){
        actualDistanceApple.push(a + apples[i]);        
    }
    // for oranges
    for (let i=0;i<n ; i++){
        actualDistanceOrange.push(b + oranges[i]);        
    }
    // count apples and oranges
    
    for (let j=0;j<actualDistanceApple.length ; j++){         
        if( s<= actualDistanceApple[j] && (actualDistanceApple[j] <= t))
            countApples++;
                
    }
    for (let l=0;l<actualDistanceOrange.length ; l++){
        if( s<= actualDistanceOrange[l] && actualDistanceOrange[l] <= t)
            countOranges++;
         
    }   
    
    console.log(countApples);
    console.log(countOranges);
}

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let m = 3;
let n = 2;
let apples = [-2,2,1];
let oranges = [5,-6];

console.log(countFruits(s,t,a,b,m,n,apples, oranges));
===========================================================================================================================================================

// Remove duplicate no.

const DuplicateNumbers = [1, 1, 2, 2,3,7, 3, 4, 5, 1];
const DuplicatesRemoved = DuplicateNumbers.filter(
  (number, index, array) => array.indexOf(number) === index
);
console.log(DuplicatesRemoved);
// o/p - [ 1, 2, 3, 4, 5 ]

===========================================================================================================================================================
// Number line Jumps

function kangaroo(x1, v1, x2, v2) {
    // Write your code here   
    while((v2 < v1 && x2 > x1) || v1 < v2 && x1 > x2) {
        x1 += v1;
        x2 += v2;
        if(x1 === x2) {
        return "YES";
        }
    }
    return "NO";

}
===========================================================================================================================================================

===========================================================================================================================================================
// Grading Student: teacher grade student on their marks, if they get 37 and lower, they are failed, but above that they are pass. the marks are averaged on factor of 5 if they lies down +-2 of the factor of 5. eg, if marks 76 => 75, if 78 => 80 
function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {   
        if((grades[i] > 37) && (grades[i] % 5 > 2)){
            grades[i] = (grades[i] - (grades[i] % 5) + 5)
        }     
      }
    return grades;
    
}

===========================================================================================================================================================
// Apple And Oranges

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let actualDistanceApple = [];
    let actualDistanceOrange = [];
    let countApples = 0;
    let countOranges = 0;
    let m = apples.length;
    let n = oranges.length;
    
    // for apples
    for (let i=0;i<m ; i++){
        actualDistanceApple.push(a + apples[i]);        
    }
    // for oranges
    for (let i=0;i<n ; i++){
        actualDistanceOrange.push(b + oranges[i]);        
    }
    // count apples and oranges
    
    for (let j=0;j<actualDistanceApple.length ; j++){         
        if( s<= actualDistanceApple[j] && (actualDistanceApple[j] <= t))
            countApples++;
                
    }
    for (let l=0;l<actualDistanceOrange.length ; l++){
        if( s<= actualDistanceOrange[l] && actualDistanceOrange[l] <= t)
            countOranges++;
         
    }   
    
    console.log(countApples);
    console.log(countOranges);
}


===========================================================================================================================================================
// Number line jumps Kangaroo Question

function kangaroo(x1, v1, x2, v2) {
    // Write your code here   
    while((v2 < v1 && x2 > x1) || v1 < v2 && x1 > x2) {
        x1 += v1;
        x2 += v2;
        if(x1 === x2) {
        return "YES";
        }
    }
    return "NO";

}


===========================================================================================================================================================

// Between two sets:  find that count/ possibilty where from two sets, an element is a factor of first set and another element is factor of other set, and both element are also factor of each other.

function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    for(let i = a[a.length - 1] ; i <= b[0] ; i++){    
    if(a.every((x) => i % x == 0) && b.every((l) => l % i == 0)){
        count++;
    }
}
return count;
}


===========================================================================================================================================================

// Divisible sum pairs: possibility

function divisibleSumPairs(n, k, ar) {
    // Write your code here
var count = 0;
    for(var i = 0; i < n; i++) {
        for(var j = (i+1); j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

// input: ar = [1, 3, 2, 6, 1, 2]  n = 6, k = 3
// ouput: 5
===========================================================================================================================================================

// Breaking the records: 

function breakingRecords(scores) {
    // Write your code here
    let minRecord = 0;
    let maxRecord = 0;
    let valueMax = scores[0];
    let valueMin = scores[0];
    for(let i=0; i< scores.length; i++) {
        if( scores[i] > valueMax ) {
            valueMax = scores[i];                  
            maxRecord++;
        }else if (scores[i] < valueMin){
            valueMin = scores[i];
            minRecord++
        }
    }
  return [maxRecord,minRecord];
}


// input: ar = [10, 5, 20, 20, 4, 5, 2, 25, 1]
// output: 2 4 i.e, maxRecord 2 times(20,25) and minRecord 4 times(5,4,2,1)

===========================================================================================================================================================

// Bill Division
// dividing bill b/t two and charged the amount, if charged extra, return the extra otherwise bon Appetit
function bonAppetit(bill, k, b) {
    let amountCharged = b;
    let actualAmount = 0;
    let tempBill = 0;
    let declined = bill[k];   
    for(let i = 0; i <bill.length ; i++) {
        tempBill += bill[i];       
    }
    actualAmount = (tempBill - declined)/2;
    let extra =  amountCharged-actualAmount; 
    if( amountCharged === actualAmount) {
        console.log( "Bon Appetit");
    } 
    else {
       console.log(extra);
    }
}

let bill = [3,10,2,9];
bonAppetit(bill,1,12);  // 5
