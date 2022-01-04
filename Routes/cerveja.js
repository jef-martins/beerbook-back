const cerveja = require('../Server/service');
const CervejaController = require('../Controller/CervejaController');
const cors = require('cors');

cerveja.use(cors());

c = new CervejaController;

//-----------Rotas-------------//

//list
cerveja.get("/",cors(), async (req, res) => {
   const response = await c.list();
   res.status(response.status).send(response.data)
})
//select
cerveja.get("/:id",cors(), async (req, res) => {
   const response = await c.select(+req.params.id);

   res.status(response.status).send(response.data);
})
//add
cerveja.post("/",cors(), async (req, res) => {
   response = await c.add(req);
   
   res.status(response.status).send(response.data);
})
//update
cerveja.put("/:id",cors(), async (req, res) => {
   const response = await c.update(req, +req.params.id);
   res.status(response.status).send(response.data);
})
//delete
cerveja.delete("/:id",cors(), async (req, res) => {
   const response = await c.delete(+req.params.id);
   res.status(response.status).send(response.data);
})

module.exports = cerveja