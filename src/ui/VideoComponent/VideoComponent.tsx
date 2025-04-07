import { Box } from '@mui/material';
import ReactPlayer from 'react-player';


export const VideoComponent = () => {

    return (
        <Box sx={{width: 450, height: 250}}>
            <ReactPlayer
                width="100%"
                height="100%"
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                controls={true}
            ></ReactPlayer>
        </Box>
    )
}