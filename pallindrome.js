function pallindrome(str){
bag="
 for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i]
 }if(str[i]==bag){
   console.log(bag)
 }
}
 str = "sanjay"
pallindrome(str)
 