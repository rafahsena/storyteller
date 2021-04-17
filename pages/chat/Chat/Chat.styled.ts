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
  height: 4em;
  padding: 1em;
`;

export const ChatMessage = styled.div`
  padding: 1em;
  flex: 1;
  &:hover {
    background-color: #f5f5f5;
  }
`;