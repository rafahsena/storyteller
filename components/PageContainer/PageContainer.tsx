import { Box, Flex } from "@chakra-ui/layout";
import Header from "../Header";

const PageContainer: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" height="100vh" minWidth="full">
      <Header />
      {children}
    </Flex>
  );
};

export default PageContainer;
