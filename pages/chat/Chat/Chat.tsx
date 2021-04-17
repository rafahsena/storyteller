import { useEffect, useState } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import {
  connectToServer,
  onMessageReceived,
  socket,
} from "../../../lib/chat/socket";
import {
  ChatInput,
  ChatReader,
  ChatWrapper,
  ChatMessage,
  ChatMessageWrapper,
  ChatMessageHeader,
  ChatUserName,
} from "./Chat.styled";
import { ChatProps } from "./Chat.type";

const Chat: React.FC<ChatProps> = ({ roomId }: ChatProps) => {
  const [chat, setChat] = useState([]);

  const intl = useIntl();

  useEffect(() => {
    connectToServer(roomId);
    onMessageReceived(roomId, (chat: Array<any>) => setChat(chat));
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ChatWrapper>
      <ChatReader>
        {chat.map(({ message, name, picture }, index) => (
          <ChatMessageWrapper key={`${name}-${index}`}>
            <ChatMessageHeader>
              <Image src={picture} alt={name} width={40} height={40} />
              <ChatUserName>{name}</ChatUserName>
            </ChatMessageHeader>
            <ChatMessage>{message}</ChatMessage>
          </ChatMessageWrapper>
        ))}
      </ChatReader>
      <ChatInput placeholder={intl.formatMessage({ id: "chat.placeholder" })} />
    </ChatWrapper>
  );
};

export default Chat;
