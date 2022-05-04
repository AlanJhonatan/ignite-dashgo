import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Profile() {
  return (
    <Flex align="center" ml="auto" >
        <HStack 
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine}></Icon>
          <Icon as={RiUserAddLine}></Icon>
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Alan Jhonatan</Text>
            <Text color="gray.300">alan.amorim.franca@gmail.com</Text>
          </Box>

          <Avatar
            size="md"
            name="Alan Jhonatan"
            src="https://github.com/alanjhonatan.png"
          />
        </Flex>
      </Flex>   
  )
}