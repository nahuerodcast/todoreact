import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/init-firebase";

export const TaskForm = () => {
  const { currentUser } = useAuth();
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const array = [
    { taskDesc: "Sacar al perro", isCompleted: true },
    { taskDesc: "Comprar comida", isCompleted: false },
    { taskDesc: "Ir al mar", isCompleted: false },
    { taskDesc: "Comprar fruta", isCompleted: false },
  ];

  const arrayDos = [{ taskDesc: task, isCompleted: true }];
  const [object, setObject] = useState(array);

  const setData = async () => {
    const update = doc(db, "task", currentUser.email);
    //   console.log(update);
    //    await setDoc(update, {
    //     tasks: taskArray,
    //  });
    //   if (task === "") {
    //     return;
    //   }
    //   await updateDoc(update, {
    //     tasks: arrayUnion({ taskDesc: task, isCompleted: false }),
    //   });

    await updateDoc(update, {
      array,
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
              onClick={() => {
                setData();
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
