import { Avatar, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export const ProfileData = () => {
  const { currentUser, logout } = useAuth();
  return (
    <Flex flexDir={"column"} alignItems="center" mb={4}>
      <Avatar src={currentUser.photoURL} />
      <Heading fontSize={"2xl"} mt={2}>
        {currentUser.displayName}
      </Heading>
      <Button
        variant={"link"}
        color={"GrayText"}
        leftIcon={<FiLogOut />}
        mr={5}
        fontSize="sm"
        onClick={() => logout()}
      >
        Cerrar sesión
      </Button>
    </Flex>
  );
};
