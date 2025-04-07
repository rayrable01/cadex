import styled from "styled-components"
import { CardList } from "../CardList/CardList"
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
`
const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    margin: 0 auto;
`


export const ContentSection = () => {
    return (
        <MainContainer>
            <Title>Also very important title</Title>
            <CardList />
            <ContactButton />
        </MainContainer>
    )
}