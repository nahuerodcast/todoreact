import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { TaskForm } from "./TaskForm";
import { Todo } from "./Todo";
import { FcTodoList } from "react-icons/fc";

export const TaskListBox = () => {
  const { currentUser } = useAuth();
  const [taskArray, setTaskArray] = useState([]);

  // Setting the data from firebase to an array
  useEffect(() => {
    const firebaseData = doc(db, "task", currentUser.email);
    onSnapshot(firebaseData, (doc) => {
      setTaskArray(doc.data().tasks);
    });
  }, []);

  return (
    <Box boxShadow={"xl"} w="md" minH={"xs"} rounded="2xl" bg={"white"} p={6}>
      <Flex alignItems={"center"}>
        <Heading fontSize={"2xl"} mr={1}>
          Lista de tareas
        </Heading>
        <FcTodoList size={20} />
      </Flex>
      <TaskForm />
      {taskArray.map((data, id) => {
        return <Todo key={id} data={data} />;
      })}
    </Box>
  );
};
