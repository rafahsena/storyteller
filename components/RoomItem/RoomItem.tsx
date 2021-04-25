import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useIntl } from "react-intl";
import { RoomItemProps } from "./RoomItem.type";

import { theme } from "../../theme";

const RoomItem: React.FC<RoomItemProps> = ({
  room: { name, _id, owner, createdAt },
  onClick,
}: RoomItemProps) => {
  const intl = useIntl();
  return (
    <Flex
      flex={1}
      flexDirection="column"
      paddingX={8}
      paddingY={4}
      cursor="pointer"
      onClick={() => onClick(_id)}
      _hover={{ bg: theme.colors.card.hover }}
    >
      <Heading size="lg">{name}</Heading>
      <Heading size="sm">
        {`${intl.formatMessage({ id: "room.master" })} - ${owner.name}`}
      </Heading>
      <Text size="xs">{`${intl.formatMessage({
        id: "room.createdAt",
      })} - ${new Date(createdAt).toLocaleString()}`}</Text>
    </Flex>
  );
};

export default RoomItem;
