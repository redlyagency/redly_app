import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { theme } from '../../utils/theme/theme';
import { Works } from '../../utils/data/worksPageData';
import { btnPackage } from '../../utils/data/btnPageData';

import HeaderPreset from '../../components/HeaderPreset/headerPreset';
import OurPostList from '../../components/WorksGallery/customizableGalleryComponent';
import UnderListUnderHeaderButton from '../../components/Buttons/ReversemainBtn';

const WorksWrapper = styled(Container)`

`;
const HeaderPresetWrapper = styled.div`
    padding-top: 70px;
`;
const UnderHeaderContent = styled.p`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    color: ${ theme.colors.gray };
    margin-top: -5px;
`;
const UnderListWrapper = styled.div`

`;
const UnderListUnderHeader = styled.h6`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    color: ${ theme.colors.gray };
`;
const UnderListUnderHeaderButtonWrapper = styled.div`
    margin: 25px 0 0 20px;
    padding-bottom: 50px;
`;

class WorksTemplate extends React.Component {
    render() {
        return (
            <WorksWrapper>
                <HeaderPresetWrapper>
                    <HeaderPreset
                        name={ Works.WorksHeaderName }
                    />
                    <UnderHeaderContent>
                        { Works.WorksUnderHeaderName }
                    </UnderHeaderContent>
                </HeaderPresetWrapper>
                <OurPostList />
                <UnderListWrapper>
                    <HeaderPreset
                        name={ Works.WorksEndPortfolioHeader }
                    />
                    <UnderListUnderHeader>
                        { Works.WorksUnderEndPortfolioHeader }
                    </UnderListUnderHeader>
                    <UnderListUnderHeaderButtonWrapper>
                        <UnderListUnderHeaderButton
                            style={{
                                width: '175px',
                            }}
                            styleCircle={{
                                right: '20px'
                            }}
                            styleArrow={{
                                transform: 'translateY(-50%) rotate(180deg)',
                            }}
                            name={ btnPackage.MainBtn.GoBack }
                        />
                    </UnderListUnderHeaderButtonWrapper>
                </UnderListWrapper>
            </WorksWrapper>
        )
    }
}

export default WorksTemplate;