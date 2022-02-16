import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { TaskForm } from "./TaskForm";
import { Todo } from "./Todo";
import { FcTodoList } from "react-icons/fc";

export const TaskListBox = () => {
  const { currentUser } = useAuth();
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "task", currentUser.email), (doc) => {
      setTaskArray(doc.data().tasks);
    });
  }, []);

  // const fakeData = [
  //   { taskDesc: "Sacar al perro", isCompleted: false },
  //   { taskDesc: "Comprar comida", isCompleted: false },
  //   { taskDesc: "Ir al mar", isCompleted: false },
  //   { taskDesc: "Comprar fruta", isCompleted: false },
  // ];

  return (
    <Box boxShadow={"xl"} w="md" minH={"xs"} rounded="2xl" bg={"white"} p={6}>
      <Flex alignItems={"center"}>
        <Heading fontSize={"2xl"} mr={1}>
          Lista de tareas
        </Heading>{" "}
        <FcTodoList size={20} />
      </Flex>
      <TaskForm />
      {taskArray.map((data) => {
        return <Todo key={data.id} data={data} />;
      })}
    </Box>
  );
};
