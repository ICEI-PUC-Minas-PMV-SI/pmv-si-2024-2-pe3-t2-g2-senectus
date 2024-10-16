import Link from 'next/link'
import Image from 'next/image'
import { HeaderStyle } from './HeaderStyle'
import { AppInternalLink } from '../InternalLink/AppInternalLink'
import { MenuButtonStyle } from './MenuButtonStyle'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { AppButtonLinkRect } from '../Buttons/AppButtonLinkRect'

export function AppHeader() {
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
        <li
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
        >
          <AppInternalLink href="/appointments">Consultas</AppInternalLink>
        </li>
        <li
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
        >
          <AppInternalLink href="/exercises">Exercícios</AppInternalLink>
        </li>
        <li
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
        >
          <AppInternalLink href="/events">Eventos</AppInternalLink>
        </li>
        <li
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
        >
          <AppInternalLink href="/blogs">Blog</AppInternalLink>
        </li>

        <li
          id="menu-btn-connect"
          className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
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
