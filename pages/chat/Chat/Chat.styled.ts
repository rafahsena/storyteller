import styled from "@emotion/styled";

export const ChatWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 5rem);
  background-color: #eee;
  flex-direction: column;
`;
export const ChatReader = styled.div`
  flex: 1;
  flex-direction: column;
`;
export const ChatInput = styled.input`
  height: 4rem;
  padding: 1rem;
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
