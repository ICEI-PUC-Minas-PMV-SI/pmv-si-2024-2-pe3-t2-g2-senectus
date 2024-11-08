import { AppButtonActionRect } from '@components/common/Buttons/AppButtonActionRect'
import {
  ProfessionalCardStyle,
  ProfessionalItemIconStyle,
  ProfessionalItemStyle,
  ProfessionalRoleStyle,
  ProfessionalsItemsStyle
} from './ProfessionalCardStyles'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaCalendarDays } from 'react-icons/fa6'
import ProfessionalEntity from '@core/models/ProfessionalEntity'
import Link from 'next/link'

interface ProfessionalCardProps {
  professional: ProfessionalEntity
}

interface ProfessionalCardItemProps {
  type: ProfessionalCardItemType
  text: string
}

enum ProfessionalCardItemType {
  EMAIL,
  PHONE,
  CITY
}

export default function ProfessionalCard({
  professional
}: ProfessionalCardProps) {
  return (
    <ProfessionalCardStyle>
      <ProfessionalRoleStyle>
        <p style={{ fontSize: '1rem ' }}>{professional.role}</p>
      </ProfessionalRoleStyle>

      <ProfessionalsItemsStyle>
        <h6 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
          {professional.name}
        </h6>

        <ProfessionalCardItem
          type={ProfessionalCardItemType.EMAIL}
          text={professional.email}
        />
        <ProfessionalCardItem
          type={ProfessionalCardItemType.PHONE}
          text={professional.phone}
        />
        <ProfessionalCardItem
          type={ProfessionalCardItemType.CITY}
          text={professional.city}
        />

        <div style={{ marginTop: '8px' }}>
          <Link href={`/appointments/contact/${professional.id}`}>
            <AppButtonActionRect
              fullWidth={true}
              text="Contatar"
              icon={<FaCalendarDays />}
            />
          </Link>
        </div>
      </ProfessionalsItemsStyle>
    </ProfessionalCardStyle>
  )
}

function ProfessionalCardItem({ type, text }: ProfessionalCardItemProps) {
  let icon

  switch (type) {
    case ProfessionalCardItemType.EMAIL:
      icon = <FaEnvelope />
      break
    case ProfessionalCardItemType.PHONE:
      icon = <FaPhone />
      break
    case ProfessionalCardItemType.CITY:
      icon = <FaMapMarkerAlt />
      break
    default:
      icon = null
  }

  return (
    <ProfessionalItemStyle>
      <ProfessionalItemIconStyle>{icon}</ProfessionalItemIconStyle>
      <p style={{ marginLeft: '8px', fontSize: '0.8rem' }}>{text}</p>
    </ProfessionalItemStyle>
  )
}
