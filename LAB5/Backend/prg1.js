import express from 'express' 

const app = express();

app.get("/" , ( req, res) => {
    res.send("Hello Express") ; 
}) ;


// this line must be last line ✅
app.listen(4444 , () => console.log('prg1 i runnit at 4444')) ;
