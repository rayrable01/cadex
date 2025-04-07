import styled from "styled-components"
import { ContactButton } from "../ContactButton/ContactButton"

const MainContainer = styled.div`
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 50px 20px;
    gap: 40px;
    background-color: #b3b3b3;
`
const Title = styled.h3`
    font-size: 35px;
    font-weight: bold;
    margin: 0 auto;
`


export const LessSection = () => {
    return (
        <MainContainer>
            <Title>Less important title</Title>
            <ContactButton />
        </MainContainer>
    )
}