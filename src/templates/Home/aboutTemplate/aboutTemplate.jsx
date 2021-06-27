import React from 'react';
import { Container } from 'react-bootstrap';
//import { content } from '../../../utils/data/mainPageData';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { btnPackage } from '../../../utils/data/btnPageData';
import { content } from '../../../utils/data/mainPageData';
import { theme } from '../../../utils/theme/theme';

import WorksBtn from '../../../components/Buttons/mainBtn';
import HeaderPreset from '../../../components/HeaderPreset/headerPreset';

const AboutWrapper = styled(Container)`
    padding-bottom: 25px;
`;
const ContentParagraph = styled.h2`
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.gray };
    width: 60%;

    @media ${ theme.device.laptop } {
        width: 100%;
    }
`;
const BtnWrapperMediaClass = styled.div`
    width: 20%;
    margin-top: 30px;

    @media ${ theme.device.laptop } {
        width: 22%;
        margin-top: 25px;
    }
    @media ${ theme.device.tablet } {
        width: 28%;
        margin-top: 15px;
    }
    @media ${ theme.device.mobileL } {
        width: 55%;
    }
    @media ${ theme.device.mobileM } {
        width: 55%;
    }
    @media ${ theme.device.mobileS } {
        width: 70%;
    }
`;

class AboutTemplate extends React.Component {
    render() {
        return (
            <>
                <AboutWrapper id="downBtnTriggerHandle">
                    <HeaderPreset name={ content.About.TitleAbout } />
                    <ContentParagraph>
                        { content.About.AboutContent }
                    </ContentParagraph>
                    <BtnWrapperMediaClass>
                        <NavLink to="/about" activeClassName="active">
                            <WorksBtn
                                name={ btnPackage.MainBtn.ReadMore }
                            />
                        </NavLink>
                    </BtnWrapperMediaClass>
                </AboutWrapper>
            </>
        );
    }
}

export default AboutTemplate;