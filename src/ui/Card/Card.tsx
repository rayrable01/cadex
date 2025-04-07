import { Box } from "@mui/material"
import styled from "styled-components"

const Title = styled.h4`
    font-size: 25px;
`

export const CardContent = () => {
    return (
        <Box>
            <Title>Title</Title>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum esse dolores nemo. Eaque beatae culpa doloremque nesciunt itaque voluptatibus libero repellat, alias animi nulla accusamus voluptas nemo sunt corporis exercitationem?</p>
        </Box>
    )
}