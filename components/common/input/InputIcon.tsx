import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { ChakraType } from "constants/types";
import useModeTheme from "hooks/colorDarkMode";
import { parse } from "utils/number";

interface SearchInputProps {
  h?: ChakraType;
  w?: ChakraType;
  type: string;
  value?: string;
  border?: ChakraType;
  borderColor?: string;
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  isFocus?: boolean;
  borderRadius?: string;
  icon?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onChangeText?: (value: string) => void;
}

export default function InputIcon({
  h,
  w,
  type,
  className,
  placeholder,
  borderColor,
  border,
  isFocus = false,
  borderRadius,
  onChange,
  onChangeText,
  icon,
  defaultValue,
  ...rest
}: SearchInputProps) {
  const { isLightMode } = useModeTheme();
  return (
    <InputGroup w={w} h={h}>
      <InputRightElement
        h={h}
        cursor="pointer"
        borderLeft="1px solid #DFDCDC"
        w="50px"
      >
        {icon && <Image src={icon} w="25px" />}
      </InputRightElement>

      {type == "number" && (
        <NumberInput
          value={defaultValue}
          onChange={(e) => onChange?.(parse(e))}
          w={w}
        >
          <NumberInputField
            _focus={{ boxShadow: "none" }}
            pl="18px"
            h={h}
            border={border}
            borderColor={borderColor}
            fontSize="14px"
            value={defaultValue}
            fontWeight={500}
            color={isLightMode ? "#171924" : "#F6F7F9"}
            className={className}
            placeholder={placeholder}
            borderRadius={borderRadius ? borderRadius : "8px"}
            {...rest}
          />
        </NumberInput>
      )}

      {type === "text" && (
        <Input
          w={w}
          h={h}
          border={border}
          borderColor={borderColor}
          type={type}
          fontSize="14px"
          value={defaultValue}
          color={isLightMode ? "#171924" : "#F6F7F9"}
          className={className}
          placeholder={placeholder}
          bg={isLightMode ? "#F6F7F9" : "#171924"}
          onChange={(e) => onChangeText?.(e.target.value)}
          borderRadius={borderRadius ? borderRadius : "8px"}
          {...rest}
        />
      )}
    </InputGroup>
  );
}
