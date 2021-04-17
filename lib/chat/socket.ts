import SocketIOClient from "socket.io-client";
import { API_URL } from "../../constants/urls";
import { GET_CHAT_MESSAGES, GET_ROOM_CHAT_MESSAGE } from "./socket.commands";

export const socket = SocketIOClient(API_URL);

export const connectToServer = (roomId: string) => {
  socket.emit(GET_CHAT_MESSAGES, { _id: roomId });
};

export const onMessageReceived = (
  roomId,
  callback: (chatMessages: Array<any>) => void
) => {
  socket.on(GET_ROOM_CHAT_MESSAGE(roomId), callback);
};
