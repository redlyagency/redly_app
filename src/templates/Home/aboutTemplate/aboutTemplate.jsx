import React from 'react';
import { NavLink } from 'react-router-dom';
import { btnPackage } from '../../../utils/data/btnPageData';
import { content } from '../../../utils/data/mainPageData';
import {
    AboutWrapper,
    ContentParagraph,
    BtnWrapperMediaClass,
} from './aboutTemplate.style';

import WorksBtn from '../../../components/Buttons/mainBtn';
import HeaderPreset from '../../../components/HeaderPreset/headerPreset';

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