import { ConsumerType, CountryIformation, Gender, PersonalDocumentation, Phone, User } from "@prisma/client";
import { UserRepository } from "../../data/contracts/user_repository";


export class UserManager{

  private userRepository: UserRepository;
  constructor(userRepository: UserRepository){
    this.userRepository= userRepository;
  }

  async createUser(user: UserModel, countryInfo: CountryModel, consumerType: ConsumerTypeModel,gender:GenderModel,phone: PhoneModel,personalDoc: PersonalDocumentationModel): Promise<string>{
    const userID= await this.userRepository.createUser(user,countryInfo,consumerType,gender,phone,personalDoc);
    return userID;
  }
  async createAnonymousUser(): Promise<string>{
    const userID= await this.userRepository.createAnonymousUser();
    return userID;
  }
}