// arrow function - ()=>{}
function functionName() {
    console.log('cos', this)
}
const fnName = () => {
    console.log('cos2', this)
}
// fnName()

const resolve = ()=>{
    console.log('success')
}
const reject = ()=>{
    console.log('error')
}
const timer = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(false){
            resolve(true)
        }
        else{
            reject(false)
        }
    },5000)
})

timer.then((data)=>{
    console.log('wykonało się z success', data)
}).catch((err)=>{
    console.log('wykonało się z error', err)
})



// ajax / fetch
// import / export / modules