import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha" >
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de Cadastro</Th>}
                { isWideVersion && <Th width={8}></Th>}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alan Jhonatan</Text>
                    <Text fontWeight="bold" fontSize="sm" color="gray.300">
                      alan.amorim.franca@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril de 2022</Td>}
                <Td textAlign="end">
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"   />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alan Jhonatan</Text>
                    <Text fontWeight="bold" fontSize="sm" color="gray.300">
                      alan.amorim.franca@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril de 2022</Td>}
                <Td textAlign="end">
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"   />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alan Jhonatan</Text>
                    <Text fontWeight="bold" fontSize="sm" color="gray.300">
                      alan.amorim.franca@gmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril de 2022</Td>}
                <Td textAlign="end">
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"   />}
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>
                <Tr>
                  <Td>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Alan Jhonatan</Text>
                      <Text fontWeight="bold" fontSize="sm" color="gray.300">
                        alan.amorim.franca@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  { isWideVersion && <Td>04 de Abril de 2022</Td>}
                  <Td textAlign="end">
                    {isWideVersion && (
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16"   />}
                      >
                        Editar
                      </Button>
                    )}
                  </Td>
                </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}