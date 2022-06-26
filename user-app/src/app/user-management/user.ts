export class User {
  constructor(
    public id: number,
    public email: string,
    public userName:string,
    public password: string
  ) {}
}
export interface UserResolved {
  user: User;
  error?: any;
}