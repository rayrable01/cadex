import styled from "styled-components"

const Title = styled.h1`
    font-size: 60px;
`
const MainContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 20px;
    background-color: #d3d3d3;
    min-height: 100vh;
`


export const SuccessForm = () => {
    return (
        <MainContainer>
            <Title>Message generated on the server</Title>
        </MainContainer>
    )
}