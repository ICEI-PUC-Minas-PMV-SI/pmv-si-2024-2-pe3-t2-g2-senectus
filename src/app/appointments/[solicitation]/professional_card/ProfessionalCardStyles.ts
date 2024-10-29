import styled from "styled-components";

export const ProfessionalCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 4px;
    border: 10px solid ${({ theme }) => theme.color.primaryBgColorOp};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

    transition: transform 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.color.secondaryColor};
        opacity: 0.8;
        padding: 0px
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
    justify-content: space-between;
    padding: 4px;
    width: 100%;

    font-size: ${({ theme }) => theme.font.sm};
`

export const ProfessionalItemIconStyle = styled.image`
    width: ${({ theme }) => theme.font.sm};
`