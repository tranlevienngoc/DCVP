import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChakraType } from 'constants/types';
import Search from './icon/Search';



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
  onChange?: (value: string) => void;
  isFocus?: boolean;
  borderRadius?: string;
}

export default function SearchInput({
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
  ...rest
}: SearchInputProps) {
  const focusUsernameInputField = (input: HTMLInputElement | null) => {
    if (input && isFocus) {
      setTimeout(() => {
        input.focus();
      }, 100);
    }
  };
  return (
      <InputGroup w={w} h={h}>
          {value === '' && (
              <InputLeftElement h={h} cursor='pointer'>
                  <Search />
              </InputLeftElement>
          )}
          {isVisible && (
              <Input
                  w={w}
                  h={h}
                  border={border}
                  borderColor={borderColor}
                  type='text'
                  fontSize='14px'
                  value={value}
                  // color={isLightMode ? '#171924' : '#F6F7F9'}
                  color={'#171924'}
                  className={className}
                  placeholder={placeholder}
                  // bg={isLightMode ? '#F6F7F9' : '#171924'}
                  bg={'#F6F7F9'}
                  onChange={(e) => onChange && onChange(e.target.value)}
                  ref={focusUsernameInputField}
                  borderRadius={borderRadius ? borderRadius : '8px'}
                  {...rest}
              />
          )}
      </InputGroup>
  );
}
