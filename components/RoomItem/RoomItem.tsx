import { Box, Flex } from "@chakra-ui/layout";
import { useIntl } from "react-intl";
import { RoomItemProps } from "./RoomItem.type";

const RoomItem: React.FC<RoomItemProps> = ({
  room: { name, _id, owner, createdAt },
  onClick,
}: RoomItemProps) => {
  const intl = useIntl();
  return (
    <Flex flex={1} onClick={() => onClick(_id)}>
      <Box>{name}</Box>
      <Box>
        {`${intl.formatMessage({ id: "room.master" })} - ${owner.name}`}
      </Box>
      <Box>{`${intl.formatMessage({ id: "room.createdAt" })} - ${createdAt}`}</Box>
    </Flex>
  );
};

export default RoomItem;
