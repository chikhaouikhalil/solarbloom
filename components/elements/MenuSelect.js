import { Menu, Pressable, VStack } from "native-base";
import { SortIcon } from "../../assets/svg/Icons";

export const MenuSelect = ({ children, disabled }) => {
  return (
    <Menu
      style={{ backgroundColor: "#1c1917" }}
      _backdrop={{ bg: "black", opacity: 0.6 }}
      placement="bottom"
      bg="dark.900"
      w="190"
      trigger={(triggerProps) => {
        return (
          <Pressable
            disabled={disabled || false}
            px="3"
            accessibilityLabel="More options menu"
            {...triggerProps}
          >
            <VStack w="7" h="7">
              <SortIcon />
            </VStack>
          </Pressable>
        );
      }}
    >
      {children}
    </Menu>
  );
};
