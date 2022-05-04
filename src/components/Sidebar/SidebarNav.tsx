import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

interface SidebarNavProps {
  
}

export function SidebarNav({}: SidebarNavProps) {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} text="Dashboard" href="/dashboard" />
        <NavLink icon={RiContactsLine} text="Usuários" href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} text="Formulários" href="/users/create" />
        <NavLink icon={RiGitMergeLine} text="Automação" href="/automation" />
      </NavSection>
    </Stack>
  )
}