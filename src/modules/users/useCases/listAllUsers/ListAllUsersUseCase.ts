import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const auth_user = this.usersRepository.findById(user_id);

    if (!auth_user || !auth_user.admin) throw new Error("invalid auth user");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
