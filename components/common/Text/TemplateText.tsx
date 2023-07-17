import { Text, TextProps } from "@chakra-ui/react";
import useModeTheme from "hooks/colorDarkMode";

interface Props extends TextProps {
  txt: string;
}
const TemplateText = ({
  txt,
  fontSize = 14,
  fontWeight = 500,
  color,
  ...props
}: Props) => {
  const { darkModeColors } = useModeTheme();

  return (
    <Text
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color || "text.100"}
      dangerouslySetInnerHTML={{ __html: txt }}
    />
  );
};

export default TemplateText;
