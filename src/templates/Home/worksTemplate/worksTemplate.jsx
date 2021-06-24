import React from 'react';
import { Container } from 'react-bootstrap';
//import { content } from '../../../utils/data/mainPageData';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
//import { btnPackage } from '../../../utils/data/btnPageData';
import { content } from '../../../utils/data/mainPageData';
import { theme } from '../../../utils/theme/theme';
import { btnPackage } from '../../../utils/data/btnPageData';

import ScrollUpBtn from '../../../components/Buttons/scrollTopBtn';
import HeaderPreset from '../../../components/HeaderPreset/headerPreset';
import PreWorksGallery from '../../../components/PreWorksGallery/preWorksGallery';
import BiggerBtn from '../../../components/Buttons/biggerBtn';

const ContentParagraph = styled.div`

`;
const H2ContentParagraph = styled.h2`
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.gray };
    width: 60%;
    padding: 0 0 10px 0;
`;
const Blank70px = styled.div`
    height: 70px;
`;

class WorksTemplate extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <HeaderPreset name={ content.Works.TitleWorks } />
                    <ContentParagraph>
                        <H2ContentParagraph>
                            { content.Works.WorksUnderTitle }
                        </H2ContentParagraph>
                        <PreWorksGallery />
                        <H2ContentParagraph>
                            { content.Works.ContentUnderGallery }
                        </H2ContentParagraph>
                        <NavLink to="/works" activeClassName="active">
                            <BiggerBtn name={ btnPackage.BiggerBtn.ViewAllProjects } />
                        </NavLink>
                        <Blank70px />
                    </ContentParagraph>
                    <ScrollUpBtn />
                </Container>
            </>
        );
    }
}

export default WorksTemplate;