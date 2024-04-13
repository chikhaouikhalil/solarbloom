import { Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { AlertDialog, Button, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SERVER } from "../firebase";
import { setUserData } from "../redux/Actions";

const DeletePlant = ({ isOpen, closeHandler, plantToDelete }) => {
  const [deleteLoader, setDeleteLoader] = useState(false);
  const { _id } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const onClose = () => {
    if (!deleteLoader) {
      closeHandler();
    }
  };

  const deleteHandler = async () => {
    if (!deleteLoader) {
      setDeleteLoader(true);
      axios
        .delete(
          `${SERVER}/delete-section?user=${_id}&plant=${plantToDelete._id}`
        )
        .then(async () => {
          await dispatch(setUserData());
          setDeleteLoader(false);
          closeHandler();
        });
    }
  };

  return (
    <AlertDialog
      size="xl"
      _backdrop={{ backgroundColor: "#000000", opacity: 0.7 }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Delete Plant</AlertDialog.Header>
        <AlertDialog.Body>
          <Image
            style={{ width: 80, height: 80, alignSelf: "center" }}
            source={{ uri: plantToDelete.plantData.image }}
          />
          <Text>This will remove all data relating to this section.</Text>
          <Text mt="1">
            This action cannot be reversed. Deleted data can not be recovered.
          </Text>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={deleteLoader}
              isLoadingText="Deleting ..."
              colorScheme="danger"
              onPress={deleteHandler}
            >
              Delete
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default DeletePlant;

const styles = StyleSheet.create({});
