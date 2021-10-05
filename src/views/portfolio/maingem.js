import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { MaingemData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import HeromainImg from '../../assets/img/portfolioBannerMaingem.png';
import MainPortolioImg from '../../assets/img/portfolioGallery/maingem/main.png';
import FirstGalleryImg from '../../assets/img/portfolioGallery/maingem/1.png';
import SecondGalleryImg from '../../assets/img/portfolioGallery/maingem/2.png';
import ThirdGalleryImg from '../../assets/img/portfolioGallery/maingem/3.png';
import { FontsName } from '../../utils/data/staticProjectDetailsData';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ MaingemData.Title }
                    category={ postCategory.app }
                    backgroundImage={ HeromainImg }
                    backgroundPosition='center bottom'
                    detailContent={ MaingemData.DetailContent }
                    platformTitle={ postPlatform.browser }
                    categoryTitle={ postCategory.website }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects + ' / ' + postTools.vscode }
                    behanceLink={ MaingemData.BehanceProject }
                    introContent={ MaingemData.DetailContent }
                    mainPortfolioImage={ MainPortolioImg }
                    FirstGalleryImg={ FirstGalleryImg }
                    SecondGalleryImg={ SecondGalleryImg }
                    ThirdGalleryImg={ ThirdGalleryImg }
                    color1={ MaingemData.color1 }
                    color2={ MaingemData.color2 }
                    color3={ MaingemData.color3 }
                    color4={ MaingemData.color4 }
                    color5={ MaingemData.color5 }
                    color6={ MaingemData.color6 }
                    colorCode='#2F0042'
                    WebsiteLink={ MaingemData.WebsiteLink }
                    WebsiteLinkName={ MaingemData.WebsiteLinkName }
                    fontsName={ FontsName.nunito }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;