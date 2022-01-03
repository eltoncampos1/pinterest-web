import { api } from "./api";

type ICreateUser = {
  email: string;
  password: string;
  age: number;
};

type IUser = {
  id: string;
  name: string;
  email: string;
};

export const UserService = {
  createUser: async (payload: ICreateUser): Promise<IUser> => {
    const { data } = await api.post("/users/create", payload);

    return data;
  },
};
