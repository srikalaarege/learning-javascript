var userinput = 1793;
var c = 0;
for (var i=0;i<=userinput;i++){
    if(userinput%i==0){
        c+=1
    }
}
if(c==2){
    console.log(userinput+" is a prime number")
}
else{
    console.log(userinput+" is not a prime number")
}
