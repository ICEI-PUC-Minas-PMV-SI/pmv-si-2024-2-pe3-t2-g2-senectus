import { ReactNode } from 'react'
import { AppInternalLink } from '../InternalLink/AppInternalLink'
import { AppButtonActionRectOutline } from './AppButtonActionRectOutline'

interface AppButtonLinkRectOutlineProps {
  id?: string
  href: string
  text: string
  icon?: ReactNode
}

export function AppButtonLinkRectOutline(props: AppButtonLinkRectOutlineProps) {
  return (
    <AppInternalLink
      id={props.id ?? ''}
      href={props.href}
      style={{ width: '75vw', maxWidth: '7.44rem' }}
    >
      <AppButtonActionRectOutline
        icon={props.icon}
        fullWidth
        text={props.text}
      />
    </AppInternalLink>
  )
}
