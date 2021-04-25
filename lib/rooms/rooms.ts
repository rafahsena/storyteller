import { rooms } from "../../constants/endpoints";
import { http } from "../http";

export const getAllRooms = async (token: string) => {
  const response = await http.get(rooms, {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};
