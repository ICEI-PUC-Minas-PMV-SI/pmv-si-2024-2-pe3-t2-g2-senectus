import { Select, SelectItem } from '@nextui-org/select'
import { theme } from '@themes/theme'
import { useEffect, useState, ComponentProps } from 'react'
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
  onChange: (value: string) => void
  divWrapperProps?: ComponentProps<'div'>
}

export function AppSelectRect({
  divWrapperProps,
  placeholder,
  options,
  onChange,
  ariaLabel
}: AppSelectRectProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [isTabletScreenOrLess, setIsTabletScreenOrLess] = useState(false)
  const [value, setValue] = useState('')

  const onChangeValue = (value: string) => {
    setValue(value)
    onChange(value)
  }

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
            {!Boolean(value.length) ? 'Filtrar' : value}
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
                          onChangeValue(item)
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
          onChange={(e) => onChangeValue(e.target.value)}
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
