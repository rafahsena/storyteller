import { Room } from "../../pages/rooms/RoomList/RoomList.type";

export type RoomItemProps = {
  onClick: (roomId: string) => void;
  room: Room;
};
