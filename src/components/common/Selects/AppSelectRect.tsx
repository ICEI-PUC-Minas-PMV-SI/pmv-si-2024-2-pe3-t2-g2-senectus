import { Select, SelectItem } from '@nextui-org/select'
import theme from '../../../themes/theme'
import { useEffect, useState } from 'react'
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
  onFilterChange: (value: string) => void
  ariaLabel: string
}

export function AppSelectRect({
  placeholder,
  options,
  onFilterChange,
  ariaLabel
}: AppSelectRectProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [selectedValue, setSelectedValue] = useState('Filtrar')
  const [isTabletScreenOrLess, setIsTabletScreenOrLess] = useState(false)

  useEffect(() => {
    const setSizeOption = () => {
      onClose()
      if (window.innerWidth <= 550) return setIsTabletScreenOrLess(true)
      setIsTabletScreenOrLess(false)
    }

    addEventListener('resize', setSizeOption)
    setSizeOption()
  }, [])

  return (
    <AppSelectRectStyle>
      {isTabletScreenOrLess && (
        <>
          <button className="mobile" onClick={onOpen}>
            {selectedValue}
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
                          setSelectedValue(item)
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
          placeholder={placeholder}
          popover="manual"
          fullWidth
        >
          {options.map((item) => (
            <SelectItem key={item} onClick={() => onFilterChange(item)}>
              {item}
            </SelectItem>
          ))}
        </Select>
      )}
    </AppSelectRectStyle>
  )
}
