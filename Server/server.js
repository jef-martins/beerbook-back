const app = require("./service");
const cerveja = require("../Routes/cerveja");
const cors = require('cors');

/*******************************/
const corsOptions = {
   origin: '*',
   optionsSuccessStatus: 200 
 }

app.use(cors(corsOptions));
/*******************************/

//app.use(cerveja);
 
/******************************/
app.listen(8081, () => {
   console.log("Server On in port 8081 at", new Date().toLocaleString());
});