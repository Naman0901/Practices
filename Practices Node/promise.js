

let promise = new Promise((resolve,rejects)=>{
    setTimeout(() => {
        resolve("Run Before")
    }, 1000);
});

promise.then(
    result=>{
        console.log(result);
        getAfter()
    }, error=>console.log(error)
)

function getAfter(){
    console.log("Print After");
}