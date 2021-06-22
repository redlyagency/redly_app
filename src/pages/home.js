import React from 'react';
import styled from 'styled-components';

import HeroTemplate from '../templates/Home/heroTemplate/heroTemplate';
import AboutTemplate from '../templates/Home/aboutTemplate/aboutTemplate';
import { theme } from '../utils/theme/theme';

const HeroWrapper = styled.div`
    //background-color: green;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    
    @media ${ theme.device.browserzoom } {
        height: 1080px;
        min-height: auto;
    }
`;
const AboutWrapper = styled.div`
    position: relative;
    background-color: white;
    height: 500px;
`;

class Home extends React.Component {
    render() {
        return (
            <>
                <HeroWrapper>
                    <HeroTemplate />
                </HeroWrapper>
                <AboutWrapper>
                    <AboutTemplate />
                </AboutWrapper>
            </>
        );
    }
}

export default Home;