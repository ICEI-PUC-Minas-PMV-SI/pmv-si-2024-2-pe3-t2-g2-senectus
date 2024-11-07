import { Select, SelectItem, SelectProps } from '@nextui-org/select'
import { theme } from '@themes/theme'
import { useEffect, useState, ReactNode } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure
} from '@nextui-org/modal'
import { AppSelectModalStyle } from './AppSelectModalStyle'
import { SelectOutlineStyle } from './SelectOutlineStyle'

interface AppSelectOutlineProps
  extends Omit<SelectProps, 'label' | 'children' | 'onChange' | 'placeholder'> {
  label: string
  icon?: ReactNode
  options: string[]
  onChange: (value: string) => void
}

export function AppSelectOutline({
  label,
  icon,
  options,
  onChange,
  ...props
}: AppSelectOutlineProps) {
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
    <SelectOutlineStyle>
      {isTabletScreenOrLess && (
        <>
          <label className="outline-btn-label">
            <div className="label" role="label">
              {label}
              {props.isRequired && <span>*</span>}
            </div>
            <button type="button" className="mobile" onClick={onOpen}>
              <span className="icon">{icon}</span>
              {value ?? ''}
            </button>
          </label>
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
          color="secondary"
          variant="bordered"
          label={label}
          labelPlacement="outside"
          placeholder=" "
          startContent={<span className="icon">{icon}</span>}
          style={{
            height: '2rem',
            minHeight: '2rem',
            borderRadius: theme.border.radius.md,
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)'
          }}
          onChange={(e) => onChangeValue(e.target.value)}
          popover="manual"
          fullWidth
          {...props}
        >
          {options.map((item) => (
            <SelectItem key={item}>{item}</SelectItem>
          ))}
        </Select>
      )}
    </SelectOutlineStyle>
  )
}
