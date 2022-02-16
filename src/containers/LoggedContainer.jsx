import React from "react";

import { Flex, Link, Text } from "@chakra-ui/react";
import { ProfileData } from "../components/ProfileData";
import { TaskListBox } from "../components/TaskListBox";

export const LoggedContainer = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent={"center"}
      h="100vh"
      bg={"gray.50"}
    >
      <ProfileData />
      <TaskListBox />
      <Flex
        color={"GrayText"}
        alignItems="center"
        justifyContent={"center"}
        mt={4}
      >
        <Text mr={2}>Desarrollado por</Text>
        <Link href="https://www.github.com/nahuerodcast" isExternal>
          <strong>Nahuel Rodriguez</strong>
        </Link>
      </Flex>
    </Flex>
  );
};
