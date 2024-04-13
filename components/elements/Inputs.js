import {
  Checkbox,
  CheckIcon,
  FormControl,
  Input,
  Radio,
  Select,
  TextArea,
} from "native-base";
import { Platform } from "react-native";

export const CheckBoxComponent = ({ value, setValue, children, size }) => {
  // size :"sm",md","lg"
  return (
    <Checkbox
      width={"100%"}
      size={size || "sm"}
      focusable={false}
      value={value}
      style={{ borderColor: "transparent" }}
      _text={{ fontSize: 13, flex: 1, color: "dark.100" }}
      _icon={{ color: "white" }}
      bg="warmGray.400"
      _checked={{ bg: "teal.600" }}
      onChange={setValue}
    >
      {children}
    </Checkbox>
  );
};

export const InputText = ({
  value,
  setValue,
  isInvalid,
  isDisabled,
  placeholder,
  label,
  helper,
  keyboardType,
  secureTextEntry,
  InputLeftElement,
  InputRightElement,
  style,
  onSubmitEditing,
  onBlur,
  bg,
  autoFocus,
  returnKeyType,
  center,
  autoComplete,
}) => {
  // size xs,sm,md,lg,xl,2xl
  // keyboardType : default, phone-pad, number-pad
  return (
    <FormControl
      style={{ ...style }}
      isInvalid={isInvalid || false}
      bg={bg ? bg : "transparent"}
      isDisabled={isDisabled || false}
      isReadOnly={isDisabled || false}
    >
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        isDisabled={isDisabled || false}
        onBlur={onBlur ? onBlur : null}
        autoFocus={autoFocus || false}
        onSubmitEditing={onSubmitEditing || null}
        secureTextEntry={secureTextEntry || false}
        returnKeyType={returnKeyType ? returnKeyType : "go"}
        autoComplete={autoComplete || "off"}
        InputLeftElement={InputLeftElement || null}
        InputRightElement={InputRightElement || null}
        value={value}
        onChangeText={(txt) => setValue(txt)}
        keyboardType={keyboardType || "default"}
        size={Platform.OS == "android" ? "md" : "lg"}
        fontWeight="300"
        color="dark.100"
        _input={{ textAlign: center ? "center" : "auto", height: 46 }}
        fontSize="xs"
        placeholder={placeholder}
        _focus={{ bg: bg ? bg : "transparent", borderColor: "teal.600" }}
      />
      {helper && <FormControl.HelperText>{helper}</FormControl.HelperText>}
    </FormControl>
  );
};

export const RadioButtons = ({ value, setValue, options }) => {
  // size :"sm",md","lg"
  return (
    <Radio.Group
      name="myRadioGroup"
      colorScheme="info"
      accessibilityLabel="favorite number"
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
      }}
    >
      {options.map((option) => {
        return (
          <Radio
            size="sm"
            _text={{ fontSize: "sm", color: "indigo.700" }}
            key={option.value}
            value={option.value}
            my={1}
          >
            {option.label}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export const SelectInput = ({
  value,
  setValue,
  options,
  label,
  placeholder,
}) => {
  return (
    <Select
      selectedValue={value}
      _item={{
        bg: "bg.50",
        _text: { fontSize: "sm", color: "indigo.700" },
        _pressed: { bg: "gray.100" },
      }}
      onValueChange={(val) => {
        setValue(val);
      }}
      accessibilityLabel={label}
      placeholder={placeholder}
      _selectedItem={{
        bg: "indigo.500",
        _text: { color: "white", fontSize: "sm" },
        endIcon: <CheckIcon color="white" size={5} />,
        _pressed: { bg: "indigo.400" },
      }}
      mt="1"
    >
      {options.map((option) => (
        <Select.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Select>
  );
};

export const MultipleLineInput = ({
  value,
  setValue,
  placeholder,
  disabled,
  numberOfLines,
  InputLeftElement,
  style,
  onBlur,
}) => {
  return (
    <TextArea
      p="3"
      mt="2"
      onBlur={onBlur || null}
      leftElement={InputLeftElement || null}
      style={{ ...style }}
      numberOfLines={numberOfLines}
      totalLines={numberOfLines}
      isDisabled={disabled || false}
      placeholder={placeholder}
      value={value}
      fontWeight="300"
      onChangeText={(text) => setValue(text)} // for android and ios
      w="full"
      bg="transparent"
      _input={{ fontSize: "sm", color: "warmGray.100", fontWeight: "100" }}
      _focus={{ bg: "transparent", borderColor: "warmGray.100" }}
    />
  );
};
