import { User } from "../../models/user/user.interface";

const userList: User[] = [
  { firstName: "Paul", lastName: 'Halliday', email: 'paul@paul.com', avatar: 'assets/img/avatar.png' },
  { firstName: "John", lastName: 'Doe', email: 'john@doe.com', avatar: 'assets/img/avatar.png' },
  { firstName: "Sarah", lastName: 'Smith', email: 'sarah@smith.com', avatar: 'assets/img/avatar.png' },
  { firstName: "Roger", lastName: 'Reynolds', email: 'roger@reynolds.com', avatar: 'assets/img/avatar.png' }
];

export const USERS_LIST  = userList;
