import { Box } from "@mui/material"
import styled from "styled-components"
import { VideoComponent } from "../VideoComponent/VideoComponent"

const MainContainer = styled.div`
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    background-color: #d3d3d3;
    flex: 1
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
`

const TextDescription = styled.p`
    line-height: 25px;
`


export const Hero = () => {
    return (
        <MainContainer>
            <Box sx={{
                width: '500px'
            }}>
            <Title>Most important title on the page</Title>
            <TextDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad dicta non vel, 
                provident corrupti tempora repellat! Corporis molestiae debitis, quae culpa tenetur id et dignissimos deleniti rem, ipsa odio?
            </TextDescription>
            </Box>
            <VideoComponent />
        </MainContainer>
    )
}