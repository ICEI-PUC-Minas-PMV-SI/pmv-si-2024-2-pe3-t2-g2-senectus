import Link from 'next/link'
import Image from 'next/image'
import { HeaderStyle } from './HeaderStyle'
import { InternalLink } from '../InternalLink/InternalLink'
import AppButtonActionRect from '../Buttons/AppButtonActionRect'

export function Header() {
  const onClick = () => {
    console.log('Clicou')
  }

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

      <AppButtonActionRect
        id="btn-connect"
        title="Conectar"
        loading={true}
        onClick={onClick}
      />
    </HeaderStyle>
  )
}
