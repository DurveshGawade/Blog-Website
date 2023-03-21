
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 10px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">PBL Project 2022 (SEM-5) </Typography>
                <Text variant="h5">18 - ITA - DURVESH GAWADE.<br />
                32 - ITA - VASUDEVA NAND JHA <br/>
                36  - ITA - VINAY SINGH KAINTURA
                   
                </Text>
                
            </Wrapper>
        </Box>
    )
}

export default About;