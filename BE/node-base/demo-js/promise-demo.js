
let promise = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('성공!'), 3000); 
}).then(
    function(result){
        console.log(result);
    }, 
    function(error){} 
);

