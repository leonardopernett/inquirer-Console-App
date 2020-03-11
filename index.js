const {prompt} = require("inquirer");

// prompt([
// {
//     name:"color",
//     message:"what is your favorite color",
//     default:"red"
//  },
//  {
//   name:"website",
//   message:"what is your favorite website"

// }])
// .then(answers =>{
//     console.log('answers:' , answers)
// })

// prompt({
//     type:'rawlist',
//     name:'colors',
//     message:'which is your favorite color',
//     choices:['red', 'blue', 'yellow']
// }).then(res=>{
//     console.log(res);
// })

// prompt({
//     type:'expand',
//     name:'colors',
//     message:'which is your favorite color',
//     choices:[{
//         key:'a',
//         value:'red'
//     }]
// }).then(res=>{
//     console.log(res);
// })

// prompt({
//     type:'checkbox',
//     name:'colors',
//     message:'which is your favorite color',
//     choices:['red', 'yellowe','blue']
// }).then(res=>{
//     console.log(res);
// })

// prompt({
//     type:'confirm',
//     name:'colors',
//     message:'which is your favorite color',
    
// }).then(res=>{
//     console.log(res);
// })

// prompt({
//     type:'password',
//     name:'secret',
//     message:'password:',
//     mask:'*'
// }).then(res=>{
//     console.log(res);
// })

prompt({
    type:'editor',
    name:'code',
    message:'write some of yur code'
}).then(res=>console.log(res))