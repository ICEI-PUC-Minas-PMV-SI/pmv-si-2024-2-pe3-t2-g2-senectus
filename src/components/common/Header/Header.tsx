import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { HeaderStyle } from './HeaderStyle'
import { InternalLink } from '../InternalLink/InternalLink'

export function Header() {
  return (
    <HeaderStyle>
      <Link href="#">
        <Image
          src="/img/logo-tipo.png"
          alt="Logotipo do Senectus"
          height={90}
          width={110}
        />
      </Link>

      <ul>
        <li>
          <InternalLink href="/appointments">Consultas</InternalLink>
        </li>
        <li>
          <InternalLink href="/exercises">Exercícios</InternalLink>
        </li>
        <li>
          <InternalLink href="/events">Eventos</InternalLink>
        </li>
        <li>
          <InternalLink href="/blogs">Blog</InternalLink>
        </li>
      </ul>

      <Button id="btn-connect" color="primary" size="sm">
        Conectar
      </Button>
    </HeaderStyle>
  )
}
