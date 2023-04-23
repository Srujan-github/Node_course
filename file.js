const fs=require('fs');
//reading file  
// fs.readFile('./docs/blog1.txt',(err,data)=>{
// if(err){
//     console.log(err)
// }
// else console.log(data.toString())
// })
// console.log('last line')

//writing into file

// fs.writeFile('./docs/blog1.txt','Hello, World',()=>{
//     console.log('file is written')
// })
// fs.writeFile('./docs/blog2.txt','Hello, Srujan',()=>{
//     console.log('file is written')
// })

//directories
// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder created')
// })}else{
//      to delete folder    
// fs.rmdir('./assets',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('folder Deleted')
// })}

//deleteing files
 
var v='blog2.txt';
if(fs.existsSync(`./docs/${v}`)){
    fs.unlink(`./docs/${v}`,(err)=>{
        if(err)console.log(err);else console.log('file is deleted')
    })
}else{
    fs.writeFile(`./docs/${v}`,"hello srujan",(err)=>{
        if(err) console.log(err);else  console.log('file is created')
    })
   
}