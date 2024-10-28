import Link from 'next/link'
import Image from 'next/image'
import { HeaderStyle } from './HeaderStyle'
import { AppInternalLink } from '../InternalLink/AppInternalLink'
import { MenuButtonStyle } from './MenuButtonStyle'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { AppButtonLinkRect } from '../Buttons/AppButtonLinkRect'
import { v4 as uuid } from 'uuid'

const options = {
  client: [
    { href: '/appointments', title: 'Consultas' },
    { href: '/exercises', title: 'Exercícios' },
    { href: '/events', title: 'Eventos' },
    { href: '/blogs', title: 'Blog' }
  ],
  professional: [
    { href: '/clients', title: 'Clientes' },
    { href: '/events', title: 'Eventos' },
    { href: '/blogs', title: 'Blog' }
  ]
}

interface AppHeaderProps {
  isProfessional?: boolean
}

export function AppHeader(props: AppHeaderProps) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  useEffect(() => {
    addEventListener('resize', () => {
      setIsOpen(null)
    })
  }, [])

  return (
    <HeaderStyle>
      <Link href="/" id="header-logo">
        <Image
          src="/img/common/logo-tipo.png"
          alt="Logotipo do Senectus"
          height={90}
          width={110}
          style={{ width: 'auto', height: 'auto' }}
        />
      </Link>

      <ul
        className={`${isOpen ? 'open grow-animation' : isOpen === false ? 'closed shrink-animation' : ''}`}
      >
        {!props.isProfessional &&
          options.client.map((option) => (
            <li
              key={uuid()}
              className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
            >
              <AppInternalLink href={option.href}>
                {option.title}
              </AppInternalLink>
            </li>
          ))}

        {props.isProfessional &&
          options.professional.map((option) => (
            <li
              key={uuid()}
              className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
            >
              <AppInternalLink href={option.href}>
                {option.title}
              </AppInternalLink>
            </li>
          ))}

        <li
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
        >
          <AppInternalLink href="/configuration">Configurações</AppInternalLink>
        </li>

        <li
          id="menu-btn-connect"
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
          style={!isOpen ? { display: 'none' } : {}}
        >
          <AppButtonLinkRect href="/sigin" text="Conectar" />
        </li>
      </ul>

      <MenuButtonStyle
        id="btn-menu"
        className={`${isOpen ? 'open' : 'closed'}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaBars id="btn-menu-open" />
        <FaXmark id="btn-menu-close" />
      </MenuButtonStyle>

      <AppButtonLinkRect id="btn-connect" href="/sigin" text="Conectar" />
    </HeaderStyle>
  )
}
