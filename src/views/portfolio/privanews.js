import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { PrivaNewsData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import HeromainImg from '../../assets/img/portfolioBannerPrivaNews.png';
import MainPortolioImg from '../../assets/img/portfolioGallery/privanews/main.png';
import FirstGalleryImg from '../../assets/img/portfolioGallery/privanews/1.png';
import SecondGalleryImg from '../../assets/img/portfolioGallery/privanews/2.png';
import ThirdGalleryImg from '../../assets/img/portfolioGallery/privanews/3.png';
import FourthGalleryImg from '../../assets/img/portfolioGallery/privanews/4.png';
import FifthGalleryImg from '../../assets/img/portfolioGallery/privanews/5.png';
import { FontsName } from '../../utils/data/staticProjectDetailsData';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ PrivaNewsData.Title }
                    category={ postCategory.app }
                    backgroundImage={ HeromainImg }
                    backgroundPosition='center bottom'
                    detailContent={ PrivaNewsData.DetailContent }
                    platformTitle={ postPlatform.ios }
                    categoryTitle={ postCategory.app }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects + ' / ' + postTools.vscode }
                    behanceLink={ PrivaNewsData.BehanceProject }
                    introContent={ PrivaNewsData.DetailContent }
                    mainPortfolioImage={ MainPortolioImg }
                    FirstGalleryImg={ FirstGalleryImg }
                    SecondGalleryImg={ SecondGalleryImg }
                    ThirdGalleryImg={ ThirdGalleryImg }
                    FourthGalleryImg={ FourthGalleryImg }
                    FifthGalleryImg={ FifthGalleryImg }
                    color1={ PrivaNewsData.color1 }
                    color2={ PrivaNewsData.color2 }
                    color3={ PrivaNewsData.color3 }
                    color4={ PrivaNewsData.color4 }
                    color5={ PrivaNewsData.color5 }
                    color6={ PrivaNewsData.color6 }
                    colorCode='#48CAE4'
                    WebsiteLink={ PrivaNewsData.WebsiteLink }
                    WebsiteLinkName={ PrivaNewsData.WebsiteLinkName }
                    fontsName={ FontsName.sfpro }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;