import { AntDesign } from "@expo/vector-icons";
import { Button, Fab, Icon, IconButton } from "native-base";

export const SolidButton = ({
  children,
  size,
  isLoading,
  isLoadingText,
  leftIcon,
  endIcon,
  onPress,
  disabled,
  bg,
  pressedBg,
  textColor,
  style,
  h,
  w,
  rounded,
}) => {
  // size : "xs", "sm", "md", "lg"
  // variant : "ghost","link","outline","solid","subtle","unstyled"
  // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  // endIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  return (
    <Button
      borderRadius={rounded ? "full" : "sm"}
      style={{ ...style }}
      w={w || "full"}
      h={h || "12"}
      opacity={disabled ? 0.5 : 1}
      bg={disabled ? "warmGray.300" : bg || "teal.600"}
      _pressed={{ bg: pressedBg || "teal.700" }}
      disabled={disabled || false}
      isLoading={isLoading || false}
      _loading={{ bg: "teal.700", opacity: 1 }}
      isLoadingText={isLoadingText}
      size={size || "lg"}
      leftIcon={leftIcon || null}
      endIcon={endIcon || null}
      justifyContent="center"
      onPress={onPress}
      _text={{
        fontFamily: "body",
        fontWeight: 300,
        fontSize: 14,
        color: disabled ? "warmGray.500" : textColor || "white",
      }}
    >
      {children}
    </Button>
  );
};
export const OutlineButton = ({
  children,
  size,
  isLoading,
  isLoadingText,
  leftIcon,
  endIcon,
  onPress,
  disabled,
  colorText,
  borderColor,
  style,
  w,
  h,
}) => {
  // size : "xs", "sm", "md", "lg"
  // variant : "ghost","link","outline","solid","subtle","unstyled"
  // leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  // endIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
  return (
    <Button
      style={{ ...style }}
      w={w || "full"}
      h={h || "12"}
      bg="transparent"
      opacity={disabled ? 0.5 : 1}
      borderColor={borderColor || "teal.600"}
      variant="outline"
      _pressed={{ bg: "transparent" }}
      disabled={disabled || false}
      isLoading={isLoading || false}
      _loading={{ bg: "transparent", opacity: 1 }}
      _spinner={{
        color: "teal.600",
      }}
      isLoadingText={isLoadingText}
      size={size || "md"}
      leftIcon={leftIcon || null}
      endIcon={endIcon || null}
      justifyContent="center"
      onPress={onPress}
      _text={{
        fontFamily: "body",
        fontWeight: 300,
        fontSize: 14,
        color: colorText || "teal.600",
      }}
    >
      {children}
    </Button>
  );
};

export const ButtonIcon = ({
  icon,
  bg,
  pressedBg,
  style,
  iconColor,
  onPress,
  rounded,
  h,
  w,
  borderColor,
}) => {
  return (
    <IconButton
      style={style}
      onPress={onPress}
      variant="solid"
      bg={bg || "transparent"}
      icon={icon}
      px={rounded ? "0" : "3"}
      w={w ? w : rounded ? "12" : "container"}
      h={h ? h : rounded ? "12" : "container"}
      borderRadius={rounded ? "full" : "0"}
      borderColor={borderColor ? borderColor : bg ? bg : "transparent"}
      borderWidth={1}
      _icon={{
        color: iconColor || "white",
        size: "lg",
      }}
      _pressed={{
        bg: pressedBg || "warmGray.800",
        borderColor: "transparent",
        _ios: {
          _icon: {
            size: "2xl",
          },
        },
      }}
      _ios={{
        _icon: {
          size: "2xl",
        },
      }}
    />
  );
};

export const FabButton = ({ onPress }) => {
  return (
    <Fab
      onPress={onPress || null}
      renderInPortal={false}
      shadow={2}
      bg="warmGray.500:alpha.90"
      _pressed={{ bg: "warmGray.900" }}
      icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />}
    />
  );
};
