import { ConsumerType, CountryIformation, Gender, PersonalDocumentation, Phone, User } from ".prisma/client";
import { Response, Request,NextFunction } from "express"
import HttpException from "../../../../core/exception/http_execption";
import { UserPrismaRepository } from "../../data/resoruces/user_prisma_repository";
import { UserManager } from "../manager/user_manager"

abstract class  UserController {
  indexCreateUser = async (req: any, res: any, next: NextFunction) => { }
  indexCreateAnonymousUser = async (req: any, res: any, next: NextFunction) => { }
}

class  UserControllerImpl implements UserController{
    private userManager: UserManager;
  constructor() {
    this.userManager= new UserManager(new UserPrismaRepository());
  }
  indexCreateUser= async(req: Request, res: Response, next: NextFunction) => {
    const user:UserModel= req.body.data["user"];
    const countryInfo:CountryModel = req.body.data.user["countryInfo"];
    const consumerType:ConsumerTypeModel= req.body.data.user["consumerType"];
    const gender:GenderModel=req.body.data.user["gender"]; 
    const phone:PhoneModel=req.body.data.user["phone"]; 
    const personalDoc:PersonalDocumentationModel=req.body.data.user["personalDoc"]; 

    if (!user || !countryInfo || !gender || !phone || !consumerType) {
      next(new HttpException(400, "Falta informacion en el json", "Error en el json un dato viene indefinido "
      + `${user} ${countryInfo} ${gender} ${phone}`));
    }
    try {
      
      const result =await this.userManager.createUser(user,countryInfo,consumerType,gender,phone,personalDoc);
     res.json({
       "success":true,
       "payload":{
         "id":result
       }
     }).status(200)
    } catch (error) {
      next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
   
    }
  }
  indexCreateAnonymousUser= async (req: Request, res: Response, next: NextFunction) => {
      try {
      const result = await this.userManager.createAnonymousUser();
      res.json({
        "success":true,
        "payload":{
          "id":result
        }
      }).status(200)
      } catch (error) {
        next(new HttpException(400, "Error interno vuelve a intentar mas tarde", error));
   
      }
  }
}

export default new UserControllerImpl();