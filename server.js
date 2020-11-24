const express =require('express');
const app = express();
//var fs = require('fs')
//var rp = require('fs.realpath')

app.use('/myviews',express.static(__dirname +'/views'));

const PORT=process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/calcu.html');
})



app.listen(PORT,()=>{
    console.log(`App is started on port ${PORT}`);
});