
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const CustomBox = styled.div`
    width: 450px;
    height: 250px;
    
    @media(max-width: 660px) {
        width: 100%
    }
`


export const VideoComponent = () => {

    return (
        <CustomBox>
            <ReactPlayer
                width="100%"
                height="100%"
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                controls={true}
            ></ReactPlayer>
        </CustomBox>
    )
}