import { ComponentProps, ReactNode } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from '@nextui-org/modal'

export interface ModalControllerProps {
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
  onClose: () => void
}

interface AppModalProps extends ComponentProps<'div'> {
  title: string
  children: ReactNode
  modalBody: ReactNode
  controller?: ModalControllerProps
}

function AppInternalModal({
  title,
  children,
  modalBody,
  controller,
  ...props
}: Replace<AppModalProps, { controller: ModalControllerProps }>) {
  return (
    <>
      <div role="button" onClick={controller.onOpen} {...props}>
        {children}
      </div>
      <Modal
        isOpen={controller.isOpen}
        onOpenChange={controller.onOpenChange}
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

export function AppModal({
  title,
  children,
  modalBody,
  controller,
  ...props
}: AppModalProps) {
  const disclosure = useDisclosure()
  if (!controller)
    return (
      <AppInternalModal
        title={title}
        modalBody={modalBody}
        controller={disclosure}
        {...props}
      >
        {children}
      </AppInternalModal>
    )
  return (
    <AppInternalModal
      title={title}
      modalBody={modalBody}
      controller={controller}
      {...props}
    >
      {children}
    </AppInternalModal>
  )
}
