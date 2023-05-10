import { UserType } from './user-types.enum';

export type User = {
  name: string;
  email: string;
  avatarPath: string;
  password: string;
  typeUser: UserType;
}
