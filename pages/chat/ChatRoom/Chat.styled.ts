import styled from "@emotion/styled";

export const ChatWrapper = styled.div`
  display: flex;
  background-color: #eee;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
`;
export const ChatReader = styled.div`
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
`;
export const ChatInput = styled.input`
  height: 4rem;
  padding: 1rem;
  width: 100%;
`;

export const ChatMessage = styled.div`
  margin-left: 3.5rem;
`;

export const ChatMessageWrapper = styled.div`
  padding: 0.5rem;
  flex: 1;
  &:hover {
    background-color: ${({ theme }) => theme.colors.card.hover};
  }
`;
export const ChatMessageHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const ChatUserName = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const ChatForm = styled.form`
  width: 100%;
`;