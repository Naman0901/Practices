function clown() {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('done');
        }, 2000);
    })
}

async function msg(callback) {
    const msg = await clown()
    console.log(msg)
    callback();
}
msg(getResult)

function getResult() {
    console.log("Excute After")
}
