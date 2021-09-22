import { ConsumerType, CountryIformation, Gender, PersonalDocumentation, Phone, PrismaClient, User } from "@prisma/client";
import { UserRepository } from "../contracts/user_repository";

const prisma = new PrismaClient();

export class UserPrismaRepository implements UserRepository {
  async createAnonymousUser(): Promise<string> {
    let result= await prisma.anonymous.create(
      {data:{}}
    );
    return result.id;
  }
  async createUser(user: UserModel, countryInfo: CountryModel, consumerType: ConsumerTypeModel, gender: GenderModel, phone: PhoneModel, personalDoc: PersonalDocumentationModel): Promise<string> {
    let result: User
      const userEmail: any = user?.email;

      result = await prisma.user.upsert({
        where: {
         email: userEmail,
        },
        create:{
          firstName: user.firstName,
          secondName: user.secondName,
          fisrtLastName: user.fisrtLastName,
          secondLastName: user.secondLastName,
          marriedName: user.marriedName,
          email: user.email,
          countryInformation: {
            create: {
              nationality: countryInfo.nationality,
              municipality: countryInfo.municipality,
              zone: countryInfo.zone,
              departament: countryInfo.departament,
              nearbyHeadquarters: countryInfo.nearbyHeadquarters,
              direction: countryInfo.direction,
            }
          },
          consumerType: {
            create: {
              consumer: consumerType.consumer
            }
          },
          gender: {
            create: {
              genderType: gender.genderType
            }
          },
          phone: {
            create: {
              docimicilioPhone: phone.docimicilioPhone,
              phoneNumber: phone.phoneNumber,
              phoneAddress: phone.phoneAddress,
              mobile: phone.mobile
            }
          },
          personalDocuments: {
            create: {
              identificationDocument: personalDoc.identificationDocument,
              nit: personalDoc.nit,
            }
          }
        },
        update:{
          firstName: user.firstName,
          secondName: user.secondName,
          fisrtLastName: user.fisrtLastName,
          secondLastName: user.secondLastName,
          marriedName: user.marriedName,
          email: user.email,
          countryInformation: {
            update: {
              nationality: countryInfo.nationality,
              municipality: countryInfo.municipality,
              zone: countryInfo.zone,
              departament: countryInfo.departament,
              nearbyHeadquarters: countryInfo.nearbyHeadquarters,
              direction: countryInfo.direction,
            }
          },
          consumerType: {
            update: {
              consumer: consumerType.consumer
            }
          },
          gender: {
            update: {
              genderType: gender.genderType
            }
          },
          phone: {
            update: {
              docimicilioPhone: phone.docimicilioPhone,
              phoneNumber: phone.phoneNumber,
              phoneAddress: phone.phoneAddress,
              mobile: phone.mobile
            }
          },
          personalDocuments: {
            update: {
              identificationDocument: personalDoc.identificationDocument,
              nit: personalDoc.nit,
            }
          }
        },
      },);
     
    return result.id;
  }

}