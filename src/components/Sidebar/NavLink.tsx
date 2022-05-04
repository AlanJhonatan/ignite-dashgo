import { Icon as ChakraIcon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType,
  text: string;
  href: string;
}

export function NavLink ({ icon: Icon, text, href, ...rest }: NavLinkProps) {
  return  (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignContent="center" {...rest}>
        <ChakraIcon as={Icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{text}</Text>
      </ChakraLink>
    </Link>
  )
}