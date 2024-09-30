function callback1(){
    console.log("2 sec completed");
}
function callback2(){
    console.log("5 sec completed");
}
setTimeout(callback2,5000)
setTimeout(callback1,2000)
while(1){
    console.log("Hello")
}