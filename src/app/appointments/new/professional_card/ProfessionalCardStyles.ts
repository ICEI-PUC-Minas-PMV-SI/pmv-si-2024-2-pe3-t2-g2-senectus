import styled from "styled-components";

export const ProfessionalCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 16rem;
    padding: 8px;
    border: 2px solid ${({ theme }) => theme.border.color.default};
`

export const ProfessionalRoleStyle = styled.div`
    background-color: ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.border.radius.md}  ${({ theme }) => theme.border.radius.md}  ${({ theme }) => theme.border.radius.md}  ${({ theme }) => theme.border.radius.md};
    width: 100%;
    padding: 2px;

    font-size: ${({ theme }) => theme.font.base};
    text-align: center;
`

export const ProfessionalItemStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px;
    width: 100%;

    font-size: ${({ theme }) => theme.font.base};

    & p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const ProfessionalItemIconStyle = styled.div`
    width: ${({ theme }) => theme.font.sm};
`

export const ProfessionalsItemsStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    width: 100%;
`