function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
      let N=+input[line++];
      find(N)
    }
    
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    4`);
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
  function  find(input){
      now=(n)=>{
        if(n<0){
            return 0;

        }
        if(n==0){
            return 1;
        }
        return now(n-1)+now(n-2)+now(n-5)
      }
      
      console.log( now(input))
  }
 
 


