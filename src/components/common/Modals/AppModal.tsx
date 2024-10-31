import { ComponentProps, ReactNode } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from '@nextui-org/modal'

interface AppModalProps extends ComponentProps<'div'> {
  title: string
  children: ReactNode
  modalBody: ReactNode
}

export function AppModal({
  title,
  children,
  modalBody,
  ...props
}: AppModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div role="button" onClick={onOpen} {...props}>
        {children}
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        size="xs"
      >
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
