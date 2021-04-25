export type Room = {
  password: string;
  _id: string;
  name: string;
  owner: Owner;
  createdAt: string;
};

export type Owner = {
  name: string;
};

export type RoomListProps = {
  rooms: Array<Room>;
};