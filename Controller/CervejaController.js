//const CervejaModel = require("../Model/Cerveja");
const collection = require("../Model/bd");


class CervejaController {

   async list() {
      const res = await collection.find({}).toArray();

      return { "status": 200, data: res };
   }

   async add(req) {
      const res = await collection.insertOne({
         idCerveja: new Date().getTime(),
         cervejearia: req.body.cervejearia,
         foto: req.body.foto,
         marca: req.body.marca,
         estilo: req.body.estilo,
         copo: req.body.copo,
         abv: req.body.abv,
         ibu: req.body.ibu,
         temperatura: req.body.temperatura,
         harmonizacao: req.body.harmonizacao,
         espuma: req.body.espuma,
         coloracao: req.body.coloracao,
         brilho: req.body.brilho,
         aroma: req.body.aroma,
         sabor: req.body.sabor,
         nota: req.body.nota
      });

      return { "status": 201, "data": res }
   }

   async select(id) {
      const response = await collection.find({ idCerveja: id }).toArray();
      const [res] = response;
      return { "status": 200, data: res };
   }

   async update(req, id) {
      const res = await collection.updateOne({ idCerveja: id }, {
         $set: {
            cervejearia: req.body.cervejearia,
            foto: req.body.foto,
            marca: req.body.marca,
            estilo: req.body.estilo,
            copo: req.body.copo,
            abv: req.body.abv,
            ibu: req.body.ibu,
            temperatura: req.body.temperatura,
            harmonizacao: req.body.harmonizacao,
            espuma: req.body.espuma,
            coloracao: req.body.coloracao,
            brilho: req.body.brilho,
            aroma: req.body.aroma,
            sabor: req.body.sabor,
            nota: req.body.nota
         }
      });

      return { "status": 200, data: res };
   }

   async delete(id) {
      const res = await collection.deleteMany({ idCerveja: id });

      return { "status": 204, data: res };
   }
}



module.exports = CervejaController;