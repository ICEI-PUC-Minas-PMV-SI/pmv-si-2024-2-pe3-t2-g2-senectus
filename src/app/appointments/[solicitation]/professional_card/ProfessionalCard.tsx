import { ProfessionalCardStyle, ProfessionalItemIconStyle, ProfessionalItemStyle, ProfessionalRoleStyle } from "./ProfessionalCardStyles"
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
                <p style={{fontWeight: 'bold'}}>{professional.role}</p>
            </ProfessionalRoleStyle>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '8px'
            }}>
                <h6>{professional.name}</h6>

                <ProfessionalCardItem
                    icon="/img/common/ic_email.svg"
                    text={professional.email}
                />
            </div>
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

            <p style={{marginLeft: '8px'}}>{text}</p>
        </ProfessionalItemStyle>
    )
}