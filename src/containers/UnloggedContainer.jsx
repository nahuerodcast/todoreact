import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext";

export const UnloggedContainer = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <Flex
      flexDir={"column"}
      justifyContent="center"
      alignItems={"center"}
      h="95vh"
    >
      <Flex>
        <Heading mb={4} mr={2} fontSize="3em" color={"orange"}>
          Todos
        </Heading>
        <Heading mb={4} fontSize="3em">
          app
        </Heading>
      </Flex>
      <Button leftIcon={<FcGoogle />} onClick={() => signInWithGoogle()}>
        Iniciar sesión con Google
      </Button>
    </Flex>
  );
};
