import styled from "styled-components";

export const ProfessionalCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 16rem;
    padding: 8px;
    border: 4px solid ${({ theme }) => theme.color.onHoverSecondaryBgColor};
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)

    transition: transform 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.color.bgOfPrimaryColor};
        opacity: 0.8;
    }
`

export const ProfessionalRoleStyle = styled.div`
    background-color: ${({ theme }) => theme.color.secondaryColor};
    border-radius: 4rem 4rem 4rem 4rem;
    width: 100%;
    padding: 2px;

    font-size: ${({ theme }) => theme.font.sm};
    text-align: center;
`

export const ProfessionalItemStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px;
    width: 100%;

    font-size: ${({ theme }) => theme.font.sm};
`

export const ProfessionalItemIconStyle = styled.image`
    width: ${({ theme }) => theme.font.sm};
`

export const ProfessionalsItemsStyle = styled.div`
    display: flex;
    flex-direction: column;
    marginTop: 8px;
`