import { Skeleton, Spinner } from "native-base";

export const SpinnerComponent = ({ color, size }) => {
  return (
    <Spinner
      size={size || "lg"}
      colorScheme="warning"
      color={color || "orange.600"}
    />
  );
};

export const LoaderComponent = () => {
  return (
    <Skeleton
      w="full"
      h="full"
      startColor="warmGray.800"
      endColor="warmGray.900"
    />
  );
};
