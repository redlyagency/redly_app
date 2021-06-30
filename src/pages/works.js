import React from 'react';
import styled from 'styled-components';

import HeroTemplate from '../templates/Home/heroTemplate/heroTemplate';
import AboutTemplate from '../templates/Home/aboutTemplate/aboutTemplate';
import WorksTemplate from '../templates/Home/worksTemplate/worksTemplate';
import FooterTemplate from '../templates/Footer/footerTemplate'

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
`;
const WorksWrapper = styled.div`
    position: relative;
    background-color: transparent;
`;
const FooterWrapper = styled.div`
    position: relative;
    background-color: ${ theme.colors.darkergray };
    height: 500px;
`;

class Works extends React.Component {
    render() {
        return (
            <>

                <FooterWrapper>
                    <FooterTemplate />
                </FooterWrapper>
            </>
        );
    }
}

export default Works;