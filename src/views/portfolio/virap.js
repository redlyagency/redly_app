import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { VirapData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import HeromainImg from '../../assets/img/portfolioBannerVirap.jpg';
import MainPortolioImg from '../../assets/img/portfolioGallery/virap/main.png';
import FirstGalleryImg from '../../assets/img/portfolioGallery/virap/1.png';
import SecondGalleryImg from '../../assets/img/portfolioGallery/virap/2.png';
import ThirdGalleryImg from '../../assets/img/portfolioGallery/virap/3.png';
import { FontsName } from '../../utils/data/staticProjectDetailsData';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ VirapData.Title }
                    category={ postCategory.website }
                    backgroundImage={ HeromainImg }
                    backgroundPosition='center bottom'
                    detailContent={ VirapData.DetailContent }
                    platformTitle={ postPlatform.browser }
                    categoryTitle={ postCategory.website }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects + ' / ' + postTools.vscode }
                    behanceLink={ VirapData.BehanceProject }
                    introContent={ VirapData.DetailContent }
                    mainPortfolioImage={ MainPortolioImg }
                    FirstGalleryImg={ FirstGalleryImg }
                    SecondGalleryImg={ SecondGalleryImg }
                    ThirdGalleryImg={ ThirdGalleryImg }
                    color1={ VirapData.color1 }
                    color2={ VirapData.color2 }
                    color3={ VirapData.color3 }
                    color4={ VirapData.color4 }
                    color5={ VirapData.color5 }
                    color6={ VirapData.color6 }
                    colorCode='#FF5A5A'
                    WebsiteLink={ VirapData.WebsiteLink }
                    WebsiteLinkName={ VirapData.WebsiteLinkName }
                    fontsName={ FontsName.poppins }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;