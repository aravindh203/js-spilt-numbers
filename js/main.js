let a=parseInt(prompt("enter the number"));
let length=a.toString().length
for(i=1;i<=length;i++){
    b=a%10;
    a=a/10
    document.write(Math.floor(b)+"<br>")
}



