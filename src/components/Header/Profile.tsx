import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alan Jhonatan</Text>
          <Text color="gray.300">alan.amorim.franca@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alan Jhonatan"
        src="https://github.com/alanjhonatan.png"
      />
    </Flex>
  )
}