import SocketIOClient from "socket.io-client";
import { API_URL } from "../../constants/urls";
import { http } from "../http";
import { GET_CHAT_MESSAGES, GET_ROOM_CHAT_MESSAGE } from "./socket.commands";
import { SEND_MESSAGE } from "../../constants/endpoints";

export const socket = SocketIOClient(API_URL);

export const connectToServer = (roomId: string) => {
  socket.emit(GET_CHAT_MESSAGES, { _id: roomId });
};

export const sendMessageToRoom = (roomId: string, message: any) => {
  const token = localStorage.getItem("token");
  http.post(`${SEND_MESSAGE}/${roomId}`, message, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const onMessageReceived = (
  roomId,
  callback: (chatMessages: Array<any>) => void
) => {
  socket.on(GET_ROOM_CHAT_MESSAGE(roomId), callback);
};

export const disconnect = () => socket.disconnect();
