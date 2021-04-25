import { GetServerSideProps } from "next";
import getAllRooms from "../../lib/rooms";
import RoomList from "./RoomList";
import { TOKEN_KEY } from "../../lib/auth/auth.types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const rooms = await getAllRooms(context.req.cookies[TOKEN_KEY]);
  return { props: { rooms } };
};
export default RoomList;
