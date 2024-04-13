import {
  Alert,
  Box,
  CloseIcon,
  Collapse,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";

export const CollapsedAlert = ({ show, setShow, status, title, text }) => {
  // status error, success,info, warning
  return (
    <Box w="full" alignItems="center" mb="2">
      <Collapse isOpen={show}>
        <Alert
          variant="left-accent"
          _
          status={status || "error"}
          bg="warmGray.100"
          borderColor="warmGray.600"
        >
          <VStack space={1} flexShrink={1} w="100%">
            <HStack
              flexShrink={1}
              space={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon color="warmGray.600" />
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  _dark={{
                    color: "warmGray.800",
                  }}
                >
                  {title}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                _focus={{
                  borderWidth: 0,
                }}
                icon={<CloseIcon size="3" />}
                _icon={{
                  color: "warmGray.600",
                }}
                onPress={() => setShow(false)}
              />
            </HStack>
            <Box px="2">
              <Text color="warmGray.900" fontSize="sm">
                {text}
              </Text>
            </Box>
          </VStack>
        </Alert>
      </Collapse>
    </Box>
  );
};
