import Link from 'next/link'
import { InternalLinkStyle } from './InternalLinkStyle'
import { ReactNode } from 'react'

interface IInternalLinkProps {
  href: string
  children: ReactNode
}

export function InternalLink(props: IInternalLinkProps) {
  return (
    <InternalLinkStyle>
      <Link href={props.href}>{props.children}</Link>
    </InternalLinkStyle>
  )
}
