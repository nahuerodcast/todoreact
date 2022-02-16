import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../utils/init-firebase";

export const Todo = ({ data }) => {
  const { currentUser } = useAuth();

  const update = doc(db, "task", currentUser.email);

  const updateData = async () => {
    if (data.isCompleted) {
      await updateDoc(update, {
        tasks: arrayRemove({
          taskDesc: data.taskDesc,
          isCompleted: true,
        }),
      });
      await updateDoc(update, {
        tasks: arrayUnion({
          taskDesc: data.taskDesc,
          isCompleted: false,
        }),
      });
    } else {
      await updateDoc(update, {
        tasks: arrayRemove({
          taskDesc: data.taskDesc,
          isCompleted: false,
        }),
      });
      await updateDoc(update, {
        tasks: arrayUnion({
          taskDesc: data.taskDesc,
          isCompleted: true,
        }),
      });
    }
  };

  const deleteTask = async () => {
    if (data.isCompleted) {
      await updateDoc(update, {
        tasks: arrayRemove({
          taskDesc: data.taskDesc,
          isCompleted: true,
        }),
      });
    } else {
      await updateDoc(update, {
        tasks: arrayRemove({
          taskDesc: data.taskDesc,
          isCompleted: false,
        }),
      });
    }
  };

  return (
    <>
      <Flex flexDir={"row"} justifyContent="space-between" mb={1}>
        <Flex>
          <Checkbox
            mr={2}
            isChecked={data.isCompleted ? true : false}
            colorScheme="green"
            onChange={() => {
              updateData();
            }}
          />
          <Text
            as={data.isCompleted ? "del" : ""}
            color={data.isCompleted ? "GrayText" : ""}
          >
            {data.taskDesc}
          </Text>
        </Flex>
        <Button
          size={"xs"}
          variant="ghost"
          borderRadius={20}
          onClick={() => {
            deleteTask();
          }}
        >
          <MdDeleteOutline size={16} />
        </Button>
      </Flex>
    </>
  );
};
