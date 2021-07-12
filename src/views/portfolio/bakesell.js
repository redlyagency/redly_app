import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { BakesellData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import bakesell from '../../assets/img/portfolioBannerBakesell.jpeg';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ BakesellData.Title }
                    category={ postCategory.website }
                    backgroundImage={ bakesell }
                    detailContent={ BakesellData.DetailContent }
                    platformTitle={ postPlatform.browser }
                    categoryTitle={ postCategory.website }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects }
                    behanceLink={ BakesellData.BehanceProject }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;