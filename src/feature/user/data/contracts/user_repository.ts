import { ConsumerType, CountryIformation, User } from ".prisma/client";
import { Gender, PersonalDocumentation, Phone } from "@prisma/client";

export interface UserRepository {
  createUser(user: UserModel, countryInfo: CountryModel, consumerType: ConsumerTypeModel,gender:GenderModel,phone: PhoneModel,personalDoc: PersonalDocumentationModel): Promise<string>;
  createAnonymousUser(): Promise<string>;
}