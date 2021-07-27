import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { BakesellData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import HeromainImg from '../../assets/img/portfolioBannerBakesell.jpeg';
import MainPortolioImg from '../../assets/img/portfolioGallery/bakesell/main.png';
import FirstGalleryImg from '../../assets/img/portfolioGallery/bakesell/1.png';
import SecondGalleryImg from '../../assets/img/portfolioGallery/bakesell/2.png';
import ThirdGalleryImg from '../../assets/img/portfolioGallery/bakesell/3.png';
import FourthGalleryImg from '../../assets/img/portfolioGallery/bakesell/4.png';
import { FontsName } from '../../utils/data/staticProjectDetailsData';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ BakesellData.Title }
                    category={ postCategory.website }
                    backgroundImage={ HeromainImg }
                    backgroundPosition='center center'
                    detailContent={ BakesellData.DetailContent }
                    platformTitle={ postPlatform.browser }
                    categoryTitle={ postCategory.advertisment }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects + ' / ' + postTools.vscode }
                    behanceLink={ BakesellData.BehanceProject }
                    introContent={ BakesellData.DetailContent }
                    mainPortfolioImage={ MainPortolioImg }
                    FirstGalleryImg={ FirstGalleryImg }
                    SecondGalleryImg={ SecondGalleryImg }
                    ThirdGalleryImg={ ThirdGalleryImg }
                    FourthGalleryImg={ FourthGalleryImg }
                    color1={ BakesellData.color1 }
                    color2={ BakesellData.color2 }
                    color3={ BakesellData.color3 }
                    color4={ BakesellData.color4 }
                    color5={ BakesellData.color5 }
                    color6={ BakesellData.color6 }
                    colorCode='#FF77A0'
                    WebsiteLink={ BakesellData.WebsiteLink }
                    WebsiteLinkName={ BakesellData.WebsiteLinkName }
                    fontsName={ FontsName.poppins }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;