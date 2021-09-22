import { Response, Request,NextFunction } from "express"
import HttpException from "../../../../core/exception/http_execption";
import { ComplaitModel } from "../../data/model/complaint_model";
import { ComplaitPrismaRepository } from "../../data/resources/complait_prisma_resource";
import { ComplaitManager } from "../manager/complait_manager";


abstract class ComplaitController {
  indexCreateComplaint = async (req: any, res: any, next: NextFunction) => { }
}

class ComplaitControllerImpl implements ComplaitController {
  private complaitManager: ComplaitManager;
  constructor(){
      this.complaitManager= new ComplaitManager(new ComplaitPrismaRepository());
  }
  indexCreateComplaint= async (req: Request, res: Response, next: NextFunction) =>{
    const complait: ComplaitModel = req.body.data;
    if (!complait) {
      next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido "
      + `${complait}`));
    }
    if (!req.params.id) {
      next(new HttpException(400, "Falta ingresas el id del producto", "Error en los parametros  dato indefinido " + `${req.params.id}`));
    }
    try {
     const result =await this.complaitManager.createCompplait(complait, req.params.id);
     res.json({
       "success":true,
       "payload":{
         "id":result
       }
     }).status(200)
    } catch (error) {
      res.status(400).send({
        "success":false,
      });
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
    }
  }
  
}

export default new ComplaitControllerImpl();