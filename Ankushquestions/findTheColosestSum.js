function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let [N,K]=input[line++].trim().split(" ").map(Number);
     let arr =input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
     main(arr,N,K);
    }
  }
  function main(arr,N,K){
let i=N-3;
let j = N-1;
let min=null;
let minimum=0;
let sum =0;;
for(let k=i;k<=j;k++){
sum=sum+arr[k];
}

min=Math.abs(sum-K);
minimum=sum;
// console.log(arr)
//  console.log(sum);
while(i>=0){
if(sum>K){
j--;
i++;
}
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    6 5
    -4 1 -5 3 2 -5
`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }