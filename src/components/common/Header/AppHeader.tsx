import Link from 'next/link'
import Image from 'next/image'
import { HeaderStyle } from './HeaderStyle'
import { AppInternalLink } from '../InternalLink/AppInternalLink'
import { MenuButtonStyle } from './MenuButtonStyle'
import { FaBars, FaGear, FaXmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { AppButtonLinkRect } from '../Buttons/AppButtonLinkRect'
import { v4 as uuid } from 'uuid'
import { GetUserInfoService } from '@core/services/users/GetUserInfoService'
import { UserEntity, UserEntityTypeEnum } from '@core/models/UserEntity'

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
  const [user, setUser] = useState<UserEntity | undefined>()

  useEffect(() => {
    addEventListener('resize', () => {
      setIsOpen(null)
    })
    setUser(GetUserInfoService.exec())
  }, [])

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll')
    else document.body.classList.remove('no-scroll')

    return () => document.body.classList.remove('no-scroll')
  }, [isOpen, setIsOpen])

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
        {(!user ||
          (user.type === UserEntityTypeEnum.CLIENT && !props.isProfessional)) &&
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

        {user &&
          (user.type === UserEntityTypeEnum.PROFESSIONAL ||
            props.isProfessional) &&
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

        {user && (
          <li
            id="menu-btn-config"
            className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
            style={!isOpen ? { display: 'none' } : {}}
          >
            <AppInternalLink href="/configuration">
              <span className="icon">
                <FaGear />
              </span>
              {`Olá, ${user.formattedName}!`}
            </AppInternalLink>
          </li>
        )}
        {!user && (
          <li
            id="menu-btn-connect"
            className={`${isOpen ? 'appear-animation' : isOpen === false ? 'disappear-animation' : ''}`}
            style={!isOpen ? { display: 'none' } : {}}
          >
            <AppButtonLinkRect href="/login" text="Conectar" />
          </li>
        )}
      </ul>

      <MenuButtonStyle
        id="btn-menu"
        className={`${isOpen ? 'open' : 'closed'}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaBars id="btn-menu-open" />
        <FaXmark id="btn-menu-close" />
      </MenuButtonStyle>

      {user && (
        <AppInternalLink href="/configuration" id="btn-config">
          <span className="icon">
            <FaGear />
          </span>
          {`Olá, ${user.formattedName}!`}
        </AppInternalLink>
      )}
      {!user && (
        <AppButtonLinkRect id="btn-connect" href="/login" text="Conectar" />
      )}
    </HeaderStyle>
  )
}
