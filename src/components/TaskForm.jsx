import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPlusSquare, BsXLg } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/init-firebase";

export const TaskForm = () => {
  // useAuth hook + useState hooks
  const { currentUser } = useAuth();
  const toast = useToast();
  const [task, setTask] = useState("");
  const [arrayTasks, setArrayTasks] = useState([]);

  // Setting the task from the input to useState variable
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Getting the actual data from firebase and setting to an array
  useEffect(() => {
    const firebaseData = doc(db, "task", currentUser.email);
    onSnapshot(firebaseData, (doc) => {
      setArrayTasks(doc.data().tasks);
    });
  }, []);

  // Creating another array with the task from the input

  const taskArray = [{ taskDesc: task, isCompleted: false }];

  // Setting the new array to firebase
  const setData = async () => {
    if (task === "") {
      toast({
        title: "Atención",
        description: "Tenes que ingresar una tarea",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const update = doc(db, "task", currentUser.email);
    await setDoc(update, {
      tasks: [...arrayTasks, ...taskArray],
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setData();
        setTask("");
      }}
    >
      <FormControl mb={4}>
        <InputGroup my={2}>
          <Input
            value={task}
            placeholder="Agregar tarea"
            onChange={handleChange}
          />
          <InputRightElement>
            <Button
              variant={"ghost"}
              h="1.75rem"
              size="sm"
              colorScheme={"orange"}
              onClick={(e) => {
                e.preventDefault();
                setData();
                setTask("");
              }}
              type="submit"
              mr={0}
            >
              <BsPlusSquare size={20} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};
