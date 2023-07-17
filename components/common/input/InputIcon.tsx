import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ChakraType } from "constants/types";
import useModeTheme from "hooks/colorDarkMode";

interface SearchInputProps {
  h?: ChakraType;
  w?: ChakraType;
  value?: string;
  isVisible?: boolean;
  border?: ChakraType;
  borderColor?: string;
  className?: string;
  placeholder?: string;
  paddingRight?: string;
  backgroundColor?: string;
  onChange: (value: string) => void;
  isFocus?: boolean;
  borderRadius?: string;
  icon?: string;
  type: string;
}

export default function InputIcon({
  h,
  w,
  value,
  className,
  placeholder,
  isVisible,
  onChange,
  borderColor,
  border,
  isFocus = false,
  borderRadius,
  icon,
  type,
  ...rest
}: SearchInputProps) {
  const focusUsernameInputField = (input: HTMLInputElement | null) => {
    if (input && isFocus) {
      setTimeout(() => {
        input.focus();
      }, 100);
    }
  };
  const { isLightMode } = useModeTheme();
  return (
    <InputGroup w={w} h={h}>
      {value === "" && (
        <InputRightElement h={h} cursor="pointer">
          {icon && <Image src={icon} w="25px" />}
        </InputRightElement>
      )}
      {isVisible && (
        <Input
          w={w}
          h={h}
          border={border}
          borderColor={borderColor}
          type={type}
          fontSize="14px"
          value={value}
          color={isLightMode ? "#171924" : "#F6F7F9"}
          className={className}
          placeholder={placeholder}
          bg={isLightMode ? "#F6F7F9" : "#171924"}
          onChange={(e) => onChange(e.target.value)}
          ref={focusUsernameInputField}
          borderRadius={borderRadius ? borderRadius : "8px"}
          {...rest}
        />
      )}
    </InputGroup>
  );
}
