function primenum(N){
count=0
 for(let i=0;i<=N;i++){
  if(N%i==0){
count++
}if(count==1){
    console.log("prime")
  }else{
    console.log("Not prime")
 }
}
primenum(13)