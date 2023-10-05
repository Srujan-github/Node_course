const express= require('express');
// const morgan=require('morgan');
const app=express();
const mongoose=require('mongoose');
const Blog=require('./models/bolg')
 const dbURI='mongodb+srv://srujan:test123@netninja-project.arviczx.mongodb.net/Netninja-project1?retryWrites=true&w=majority';

 mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology:true})
 .then((result)=>console.log("connected to DB")).catch((err)=>console.log(err));
// register view engine
app.set('view engine','ejs');
app.listen(3000);
// app.use((req,res)=>{
//     console.log();
// })
app.use(express.static('public'));
// app.use(morgan('dev'));
//middleware
// app.use((req,res,next)=>{
//     console.log('new request as made');
//     console.log('host',req.params);
//     console.log('path',req.path);
//     console.log('method',req.method);
//     next();
//     // console.log('new request as made');
// })

app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title: 'new-blog  1',
        snippet: 'about my new blog',
        body: 'more abouyt my blog'
    });

    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
})

app.get('/all-blogs',(req,res)=>{
      Blog.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
})
app.get('/single-blog',(req,res)=>{
      Blog.findById ('651daa1d89f7265b315d5872').then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
})

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