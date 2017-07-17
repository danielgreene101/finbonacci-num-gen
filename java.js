console.log('hello');

let fibo = 1;
let na = 1;
let cci = 0;

do {
    cci = fibo;
    fibo = fibo + na;
    na = cci;
    console.log(fibo);
}while(fibo < 500);