import { ComplaitRepository } from "../../data/contracts/complaint_repository";
import { ComplaitInterface } from "../interfaces/complaint_interface";

export class  ComplaitManager {
  private complaintRepository:ComplaitRepository;
  constructor(complaintRepository:ComplaitRepository) {
    this.complaintRepository= complaintRepository;
  }

  async createCompplait(newcomplait: ComplaitInterface, id: string):Promise<String>{
    const complaitId= await this.complaintRepository.createComplaitUser(newcomplait,id);
    return complaitId;
  }
}