
import  express  from "express";
import {PORT} from "./core/utils/config"
import * as http from "http";
import { router} from  './routes/routes';

import  morgan from "morgan";



const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(router);
app.use(morgan("prod"));



app.set( "ipaddr", "127.0.0.1" ); 
app.set( "port", PORT || 3000);

server.listen(PORT|| 3000, () => {console.log('server is running on port http://localhost:'+`${PORT|| 3000}`,) });
