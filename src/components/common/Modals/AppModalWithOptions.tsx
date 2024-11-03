import { v4 as uuid } from 'uuid'
import { AppButtonActionRectOutline } from '../Buttons/AppButtonActionRectOutline'
import { AppButtonActionRect } from '../Buttons/AppButtonActionRect'
import { ModalWithOptionsStyle } from './ModalWithOptionsStyle'
import { AppModal, ModalControllerProps } from './AppModal'
import { ReactNode } from 'react'

interface AppModalWithOptions {
  title: string
  text: string
  children: ReactNode
  id?: string
  className?: string
  controller?: ModalControllerProps
  options: Array<{
    text: string
    onClick: () => void
    isOutlinedButton?: boolean
  }>
}

function AppModalBody(props: AppModalWithOptions) {
  return (
    <ModalWithOptionsStyle>
      <p>{props.text}</p>
      <div className="options">
        {props.options.map((option) => {
          if (option.isOutlinedButton)
            return (
              <AppButtonActionRectOutline
                key={uuid()}
                className="outline-btn"
                text={option.text}
                onClick={option.onClick}
                fullWidth
              />
            )
          return (
            <AppButtonActionRect
              key={uuid()}
              className="common-btn"
              text={option.text}
              onClick={option.onClick}
              fullWidth
            />
          )
        })}
      </div>
    </ModalWithOptionsStyle>
  )
}

export function AppModalWithOptions(props: AppModalWithOptions) {
  return (
    <AppModal
      title={props.title}
      id={props.id ?? ''}
      className={props.className ?? ''}
      modalBody={<AppModalBody {...props} />}
      controller={props.controller}
    >
      {props.children}
    </AppModal>
  )
}
