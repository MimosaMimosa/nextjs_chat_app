import { styled } from '@mui/system';
import BgImage from '@public/images/auth-bg.jpg';
const Background = styled('div')(
    () => `   
    min-height:100vh;
    width:100%;
    background-image:url(${BgImage.src});
    bakground-position:center;
    background-size:cover;
    background-repeat:no-repeat`
);

export default Background;
