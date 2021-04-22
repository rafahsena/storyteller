import { GetServerSideProps } from "next";
import Chat from "./ChatRoom";


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { roomId } = context.query;
  return { props: { roomId } };
};

export default Chat;