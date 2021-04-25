import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import RoomItem from "../../../components/RoomItem/RoomItem";
import { CHAT_ROOM } from "../../../constants/routes";
import { RoomListProps } from "./RoomList.type";

const RoomList: React.FC<RoomListProps> = ({ rooms }: RoomListProps) => {
  const router = useRouter();
  const onRoomClick = (roomId: string) => router.push(`${CHAT_ROOM}/${roomId}`);

  return (
    <Box>
      {rooms.map((room) => (
        <RoomItem room={room} key={room._id} onClick={onRoomClick} />
      ))}
    </Box>
  );
};

export default RoomList;
