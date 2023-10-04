const express= require('express');

const app=express();
// register view engine
app.set('view engine','ejs');
app.listen(3000);
// app.use((req,res)=>{
//     console.log();
// })
app.use(express.static('public'));

//middleware
// app.use((req,res,next)=>{
//     console.log('new request as made');
//     console.log('host',req.params);
//     console.log('path',req.path);
//     console.log('method',req.method);
//     next();
//     // console.log('new request as made');
// })
app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: ' How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
  res.render('index',{title:'Home',blogs});
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})
app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a Blog'})
} )
//404 page  
app.use((req,res)=>{
   res.status(404).render('404',{title:'404 Error'})
   
})