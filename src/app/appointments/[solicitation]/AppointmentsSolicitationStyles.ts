import styled from "styled-components"

export const ProfessionalsListStyle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 16px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 460px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const AppointmentSolicitationPaginationStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`