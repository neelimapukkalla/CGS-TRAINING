const prm = new Promise(function(resolve,reject){
    var age= 20
    if (age > 18){
        resolve("can watch a movie")
    }else{
        reject("too young")
    }
});
prm.then(function(result){
    console.log(result)
})
prm.catch(function(err){
    console.log("can not watch a movie,reason:"+err)
})