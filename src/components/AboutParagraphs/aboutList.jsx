import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import { About } from '../../utils/data/aboutPageData';

const AboutListWrapper = styled.div`
    font-size: ${ theme.fontSize.DB_17 };
`;

class AboutList extends React.Component {
    render() {
        return (
            <AboutListWrapper>
                { About.ListContent.CreativeDesignParagraph }
                { About.ListContent.CreativeDesignList }
                { About.ListContent.WebDevelopmentParagraph }
                { About.ListContent.WebDevelopmentList }
            </AboutListWrapper>
        )
    }
}

export default AboutList;