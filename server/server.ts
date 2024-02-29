import express from 'express';
import {connection} from './database/config'
import UserRouter from './routes/UserRouter';


const app = express()
const port = 3000;

app.use('./users', UserRouter); 


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});