import { Button, Flex, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { Input } from "../components/Form/Input"

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />
        </Stack>
        <Link href='/dashboard' passHref>
          <Button type="submit" mt="6" colorScheme="pink">
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
