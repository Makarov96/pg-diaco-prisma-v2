import { Complaint, PrismaClient } from '@prisma/client'
import { ComplaitInterface } from '../../adapter/interfaces/complaint_interface'
import { ComplaitRepository } from '../contracts/complaint_repository'
const prisma = new PrismaClient();


export class ComplaitPrismaRepository implements ComplaitRepository {
  async createComplaitUser(newcomplait: ComplaitInterface, id: string): Promise<String> {
  
    const anonymousCount = await prisma.anonymous.count({
      where: {
        id: id
      },
    });
  
     let complaitCreated: Complaint;
     if (anonymousCount == 0) {
     
       complaitCreated = await prisma.complaint.create({
         data: {
           title: newcomplait.title.toString(),
           description: newcomplait.description.toString(),
           authorization: newcomplait.authorization,
           author: {
             connect: {
               id: id
             }
           }
         },
       });
     }else{
        complaitCreated = await prisma.complaint.create({
          data: {
            title: newcomplait.title.toString(),
            description: newcomplait.description.toString(),
            authorization: newcomplait.authorization,
            anonymousAuthor: {
              connect: {
                id: id
              }
            }
          },
        });
     }
    return complaitCreated.id.toString();
  }
}