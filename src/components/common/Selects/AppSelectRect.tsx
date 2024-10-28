import { Select, SelectItem } from '@nextui-org/select'
import { theme } from '@themes/theme'
import {
  useEffect,
  useState,
  ComponentProps,
  SetStateAction,
  Dispatch
} from 'react'
import { AppSelectRectStyle } from './AppSelectRectStyle'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from '@nextui-org/modal'
import { AppSelectModalStyle } from './AppSelectModalStyle'

export interface AppSelectRectProps {
  placeholder: string
  options: string[]
  ariaLabel: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  divWrapperProps?: ComponentProps<'div'>
}

export function AppSelectRect({
  divWrapperProps,
  placeholder,
  options,
  ariaLabel,
  value,
  setValue
}: AppSelectRectProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [isTabletScreenOrLess, setIsTabletScreenOrLess] = useState(false)

  useEffect(() => {
    const setSizeOption = () => {
      onClose()
      if (window.innerWidth <= 550) return setIsTabletScreenOrLess(true)
      setIsTabletScreenOrLess(false)
    }

    addEventListener('resize', setSizeOption)
    setSizeOption()
  }, [onClose])

  return (
    <AppSelectRectStyle {...divWrapperProps}>
      {isTabletScreenOrLess && (
        <>
          <button className="mobile" onClick={onOpen}>
            {value.length <= 0 ? 'Filtrar' : value}
          </button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom">
            <ModalContent>
              <ModalHeader>Escolha o filtro</ModalHeader>
              <ModalBody>
                <AppSelectModalStyle>
                  <p>Selecione o filtro para realizar a sua pesquisa:</p>

                  <div className="options">
                    {options.map((item) => (
                      <button
                        onClick={() => {
                          setValue(item)
                          onClose()
                        }}
                        className="modal-option-btn"
                        key={item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </AppSelectModalStyle>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
      {!isTabletScreenOrLess && (
        <Select
          color="primary"
          aria-label={ariaLabel}
          style={{
            height: '2rem',
            minHeight: '2rem',
            borderRadius: theme.border.radius.md,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)'
          }}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          popover="manual"
          fullWidth
        >
          {options.map((item) => (
            <SelectItem key={item}>{item}</SelectItem>
          ))}
        </Select>
      )}
    </AppSelectRectStyle>
  )
}
