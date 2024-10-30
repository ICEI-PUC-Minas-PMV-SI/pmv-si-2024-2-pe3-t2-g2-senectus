import { AppButtonActionRect } from "@components/common/Buttons/AppButtonActionRect";
import { ProfessionalCardStyle, ProfessionalItemIconStyle, ProfessionalItemStyle, ProfessionalRoleStyle, ProfessionalsItemsStyle } from "./ProfessionalCardStyles"
import { Image } from "@nextui-org/image";

interface ProfessionalCardProps {
    professional: ProfessionalEntity
}

interface ProfessionalCardItemProps {
    icon: string
    text: string
}

export default function ProfessionalCard(
    { professional }: ProfessionalCardProps
) {
    return (
        <ProfessionalCardStyle>
            <ProfessionalRoleStyle>
                <p style={{ fontWeight: 'bold' }}>{professional.role}</p>
            </ProfessionalRoleStyle>

            <ProfessionalsItemsStyle>
                <h6 style={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginBottom: '4px'
                }}>{professional.name}</h6>

                <ProfessionalCardItem
                    icon="/img/common/ic_email.svg"
                    text={professional.email}
                />

                <ProfessionalCardItem
                    icon="/img/common/ic_phone.svg"
                    text={professional.phone}
                />

                <ProfessionalCardItem
                    icon="/img/common/ic_location.svg"
                    text={professional.city}
                />

                <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <AppButtonActionRect
                        text="Contatar"
                        icon="/img/common/ic_calendar.svg"
                    />
                </div>
            </ProfessionalsItemsStyle>
        </ProfessionalCardStyle>
    )
}

function ProfessionalCardItem({
    icon, text
}: ProfessionalCardItemProps) {
    return (
        <ProfessionalItemStyle>
            <ProfessionalItemIconStyle>
                <Image src={icon} />
            </ProfessionalItemIconStyle>

            <p style={{ marginLeft: '8px' }}>{text}</p>
        </ProfessionalItemStyle>
    )
}