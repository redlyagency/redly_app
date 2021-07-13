import React from 'react';
import { useHistory } from "react-router-dom";
import {
    WorksWrapper,
    HeaderPresetWrapper,
    UnderHeaderContent,
    UnderListWrapper,
    UnderListUnderHeader,
    UnderListUnderHeaderButtonWrapper,
} from './worksTemplate.style';

import { Works } from '../../utils/data/worksPageData';
import { btnPackage } from '../../utils/data/btnPageData';

import HeaderPreset from '../../components/HeaderPreset/headerPreset';
import OurPostList from '../../components/WorksGallery/customizableGalleryComponent';
import UnderListUnderHeaderButton from '../../components/Buttons/ReversemainBtn';

export const WorksTemplate = () => {
    let history = useHistory();
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
                        <div onClick={() => history.goBack()}>
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
                        </div>
                    </UnderListUnderHeaderButtonWrapper>
                </UnderListWrapper>
            </WorksWrapper>
        )
    }

export default WorksTemplate;