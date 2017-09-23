import { Message } from "../../models/messages/messages.interface";
import { USERS_LIST } from "../users/users";

const userList = USERS_LIST;
const messageList: Message[] = [];

userList.forEach( ( user ) => {
  messageList.push({
    user: user,
    date: new Date(),
    lastMessage: "Hello"
  });
} );

export const MESSAGE_LIST  = messageList;
