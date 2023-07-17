import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { ReactNode } from "react";

import FlexBox from "../FlexBox";

interface Props {
  onClose: () => void;
  onCloseRightSideBar?: () => void;
  isOpen: boolean;
  txt?: string;
  children?: ReactNode;
  mb?: string;
  pbody?: string;
  mt?: string;
  logo?: string;
}

export default function DrawerItem({
  onClose,
  onCloseRightSideBar,
  isOpen = false,
  txt,
  children,
  mb,
  pbody,
  mt,
  logo,
}: Props) {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay zIndex={20} />
      <DrawerContent zIndex={20} p="18px 0" bg="bg.100">
        <DrawerBody zIndex={20} mt={mt} p={pbody}>
          <FlexBox
            justifyContent="space-between"
            p="0 0 16px 24px"
            alignItems="center"
            mb={mb}
          >
            <DrawerCloseButton
              m="10px 8px 0 0"
              onClick={onCloseRightSideBar}
              _focusVisible={{ boxShadow: "none !important" }}
            >
              <CloseButton color="text.100" />
            </DrawerCloseButton>
            {txt && <TemplateText txt={txt} fontSize={20} fontWeight={700} />}
            {logo && <Image src={logo} w="140px" />}
          </FlexBox>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
