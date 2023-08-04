import {
  CloseButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  type ModalContentProps,
  ModalOverlay,
} from "@chakra-ui/react";
import { type ReactNode } from "react";

interface PopoverItemProps extends ModalContentProps {
  title?: string;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onCloseOtherModal?: () => void;
  children?: ReactNode;
  p?: string;
  pHeader?: string;
  pBody?: string;
  bg?: string;
  top?: string;
  right?: string;
  isFixIcon?: boolean;
}

export default function ModalItem({
  children,
  isOpen = false,
  onClose = () => ({}),
  bg,
  onCloseOtherModal = () => ({}),
  p = "16px",
  pBody,
  top,
  right,
  isFixIcon,
  ...props
}: PopoverItemProps) {
  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={() => {
        onClose();
        onCloseOtherModal();
      }}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent
        bg={bg ?? "transparent"}
        borderRadius="16px"
        {...props}
        p={p}
        position="relative"
        boxShadow="unset"
      >
        <ModalCloseButton
          boxShadow="none !important"
          position={isFixIcon ? "sticky" : "absolute"}
          top={top ?? "16px"}
          left={isFixIcon ? "100%" : "unset"}
          right={right ?? "16px"}
        >
          <CloseButton />
        </ModalCloseButton>

        <ModalBody p={pBody}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
