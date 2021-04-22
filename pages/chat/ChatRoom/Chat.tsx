import { useEffect, useState } from "react";
import Image from "next/image";

import { useIntl } from "react-intl";
import { Controller, useForm } from "react-hook-form";

import {
  connectToServer,
  onMessageReceived,
  disconnect,
  sendMessageToRoom,
} from "../../../lib/chat/messages";

import {
  ChatInput,
  ChatReader,
  ChatWrapper,
  ChatMessage,
  ChatMessageWrapper,
  ChatMessageHeader,
  ChatUserName,
  ChatForm,
} from "./Chat.styled";

import { ChatProps } from "./Chat.type";

const Chat: React.FC<ChatProps> = ({ roomId }: ChatProps) => {
  const [chat, setChat] = useState([]);
  const { handleSubmit, control, reset } = useForm();

  const intl = useIntl();

  useEffect(() => {
    connectToServer(roomId);
    onMessageReceived(roomId, (chat: Array<any>) => setChat(chat));
    return () => {
      disconnect();
    };
  }, []);

  const sendMessage = ({ message }) => {
    sendMessageToRoom(roomId, {
      name: "Teste",
      message,
      picture:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHyrofPqnXJUg/profile-displayphoto-shrink_200_200/0/1566586231227?e=1619654400&v=beta&t=GeAE0644covWXo1ESZTLwZD43B9QrEXcklLDfDOreoc",
    });
    reset();
  };

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
      <ChatForm onSubmit={handleSubmit(sendMessage)}>
        <Controller
          control={control}
          name="message"
          render={({
            field,
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <ChatInput
              placeholder={intl.formatMessage({ id: "chat.placeholder" })}
              {...field}
            />
          )}
        />
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;
