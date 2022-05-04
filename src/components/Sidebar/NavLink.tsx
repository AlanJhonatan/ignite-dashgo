import { Icon as ChakraIcon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType,
  text: string;
}

export function NavLink ({ icon: Icon, text, ...rest }: NavLinkProps) {
  return  (
    <Link display="flex" alignContent="center" {...rest}>
      <ChakraIcon as={Icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{text}</Text>
    </Link>
  )
}