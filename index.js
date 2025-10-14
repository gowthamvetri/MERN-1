// let arr = [1,2,3,4,5,6,8,9,10]

// arr.map((ele)=>{
//     console.log(ele)
// })

// arr.map(ele=>{
//     console.log(ele*3)
// })

// arr = arr.filter((ele)=>{
//     return ele > 3
// })

// let re = arr.reduce((acc,ele)=>{
//     return acc+ele
// })

// console.log("Result "+re)

// let array = [13,15,20,35,27]

// let filter = array.filter((ele)=>{
//     return ele %5==0
// })

// console.log(filter)

// let res = arr.reduce((ini,ele)=>{
//     console.log(ele)
//     // return ele%2==0
// },0)


// let num = [1,2,3,4,5,6,7,8,9]

// num = num.map(ele=>ele*3)

// num = num.filter(ele=>ele%2==0)

// let fin = num.reduce((pre,curr)=>{return pre+curr},0)

// console.log("Result "+ fin)

// console.log(num)

// let [one,...two] = num

// console.log(two)

// let obj = {
//     x:10,y:20
// }

// let obj1 = {
//     y:10,z:20
// }

// let fi = {...obj,...obj1}

// console.log(fi)

// console.log("Today's date is")
// const fun = setTimeout(()=>{
//     let date  = new Date()
//     console.log(date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear())
// },5000)

// let promis = new Promise((res,rej)=>{
//     let num = Math.floor(Math.random()*10)
//     setTimeout(()=>{
//         if(num>5){
//             res("The program gives number greater than 5 is "+num)
//         }
//         rej("The program gives number less than 5 is "+num)
//     },2000)
// })

// console.log("Before creating promises")

// promis.then(res=>{
//     console.log(res)
// }).catch(err=>console.log(res)).finally(()=>console.log("Program completed"))



// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then((res)=>res.map((ele)=>{
//     console.log(ele.name)
// })).catch(err=>console.log(err)).finally(()=>console.log("Finally finished"))


// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json()
// }).then((res)=>{
//     let hero = Math.floor(Math.random()*10)
//     let villan = Math.floor(Math.random()*10)

//     let hob = res[hero]
//     let vob = res[villan] 

//     console.log("There are two friend working on a factory whose cooli numbers are "+hob.id+" and "+vob.id+" among them one is very good and kind hearted person whose name is "+hob.name+" and another one is very cunning fello not help any one and always disturb eachother whose name is "+vob.name+" once the factory manager asked mail id from "+vob.name+" he refused to give his id insted he gave "+hob.email+" the work get assigned to "+hob.name+" at his home town "+hob.address.city+" so which make "+hob.name+" very happy .But the next work was for "+vob.address.city+" but "+vob.name+" refused that offer to and stayed in "+vob.company.name
//     )
    
// }).catch(err=>console.log(err))

