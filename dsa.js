// Data Structures and Algorithms

//memoization


//fibbonaci series function 
const fib =(n, memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

console.log(fib(10));


//Grid Traveler , person travels only down or right in the grid, 
// find the no of ways he can get to the goal 

const gridTraveler=(m,n,memo={})=>{
    const key = m + ','  + n;
    if(key in memo) return memo[key];
    if(m === 0 || n === 0) return 0;
    if(m===1 && n===1) return 1;
    memo[key]=gridTraveler(m-1,n) + gridTraveler(m,n-1);
    return memo[key];
}

console.log(gridTraveler(3,4))