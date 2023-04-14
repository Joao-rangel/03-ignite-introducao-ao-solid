import { v4 as uuidV4 } from "uuid";

interface IUserPayload {
  id?: string;
  name: string;
  email: string;
  admin?: string;
  created_at?: Date;
  updated_at?: Date;
}

class User {
  constructor(payload?: IUserPayload) {
    Object.assign(this, payload);
  }

  id = uuidV4();

  name: string;

  email: string;

  admin = false;

  created_at = new Date();

  updated_at = new Date();
}

export { User };
