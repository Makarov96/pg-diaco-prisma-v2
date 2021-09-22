export class ComplaitModel {
  title:String
  description: String
  authorization: boolean

  constructor (
    title:String,
    description: String,
    authorization: boolean,
  ){
    this.title=title;
    this.description=description;
    this.authorization=authorization;
  }
}