function job1 (callback){
    setTimeout(function(){
        callback("test 1");
    },2000);
}
function job2 (callback){
    setTimeout(function(){
        callback("test 2");
    },10000);
}
job1(function(data){
    console.log(data);
    job2(function(data){
        console.log(data);
    });
});
