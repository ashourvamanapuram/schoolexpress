
import * as Express from 'express';
const App = Express();
App.get('/',(req,res)=>{
    res.send("Hello World!")
})
export {App};