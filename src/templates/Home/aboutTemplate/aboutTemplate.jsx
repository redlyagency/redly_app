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
                    <NavLink to="/about" activeClassName="active">
                        <WorksBtn style={{ marginTop: '20px', width: '17%' }} name={ btnPackage.MainBtn.ReadMore } />
                    </NavLink>
                </AboutWrapper>
            </>
        );
    }
}

export default AboutTemplate;