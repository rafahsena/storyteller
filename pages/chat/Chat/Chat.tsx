import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import {
  connectToServer,
  onMessageReceived,
} from "../../../lib/chat/socket";
import { ChatInput, ChatReader, ChatWrapper, ChatMessage } from "./Chat.styled";
import { ChatProps } from "./Chat.type";

const Chat: React.FC<ChatProps> = ({ roomId }: ChatProps) => {
  const [chat, setChat] = useState([]);

  const intl = useIntl();

  useEffect(() => {
    connectToServer(roomId);
    onMessageReceived(roomId, (chat: Array<any>) => setChat(chat));
  }, []);

  return (
    <ChatWrapper>
      <ChatReader>
        {chat.map(({ message, name }, index) => (
          <ChatMessage key={`${name}-${index}`}>{message}</ChatMessage>
        ))}
      </ChatReader>
      <ChatInput placeholder={intl.formatMessage({id: "chat.placeholder"})} />
    </ChatWrapper>
  );
};

export default Chat;
