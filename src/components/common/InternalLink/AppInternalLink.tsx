import Link from 'next/link'
import { InternalLinkStyle } from './InternalLinkStyle'
import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components';

interface IInternalLinkProps {
  id?: string;
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function AppInternalLink(props: IInternalLinkProps) {
  return (
    <InternalLinkStyle id={props.id ?? ""} style={props.style}>
      <Link href={props.href}>{props.children}</Link>
    </InternalLinkStyle>
  )
}
