import { uuid } from "uuidv4";

export class IUser {
  public readonly id!: string;
  public name: string;
  public email: string;
  public password: string;

  // todos os campos menos o id
  constructor(props: Omit<IUser, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
