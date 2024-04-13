import { Actionsheet, View } from "native-base";
export const ActionSheetComponent = ({ isOpen, onClose, children }) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <View w="full">{children}</View>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
