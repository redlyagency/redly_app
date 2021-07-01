import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { content } from '../../../utils/data/mainPageData';
import { btnPackage } from '../../../utils/data/btnPageData';
import {
    ContentParagraph,
    H2ContentParagraph,
} from './worksTemplate.style';

import ScrollUpBtn from '../../../components/Buttons/scrollTopBtn';
import HeaderPreset from '../../../components/HeaderPreset/headerPreset';
import PreWorksGallery from '../../../components/PreWorksGallery/PREcustomizableGalleryComponent';
import BiggerBtn from '../../../components/Buttons/biggerBtn';

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
                        <NavLink
                            to="/works"
                            activeClassName="active"
                        >
                            <BiggerBtn
                                name={ btnPackage.BiggerBtn.ViewAllProjects }
                            />
                        </NavLink>
                    </ContentParagraph>
                    <ScrollUpBtn />
                </Container>
            </>
        );
    }
}

export default WorksTemplate;