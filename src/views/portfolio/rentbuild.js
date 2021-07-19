import React from 'react';
import styled from 'styled-components';

import { postCategory } from '../../utils/data/portfolioData';
import { postPlatform } from '../../utils/data/portfolioData';
import { postDesigner } from '../../utils/data/portfolioData';
import { postTools } from '../../utils/data/portfolioData';
import { RentbuildData } from '../../utils/data/portfolioDetailsData';

import WorksDetailsTemplate from '../../templates/Works-details/worksDetailsTemplate';

import HeromainImg from '../../assets/img/portfolioBannerRentbuild.jpeg';
import MainPortolioImg from '../../assets/img/portfolioGallery/rentbuild/main.png';
import FirstGalleryImg from '../../assets/img/portfolioGallery/rentbuild/1.png';
import SecondGalleryImg from '../../assets/img/portfolioGallery/rentbuild/2.png';
import ThirdGalleryImg from '../../assets/img/portfolioGallery/rentbuild/3.png';

const BakesellWrapper = styled.div`

`;

class Bakesell extends React.Component {
    render() {
        return (
            <BakesellWrapper>
                <WorksDetailsTemplate
                    title={ RentbuildData.Title }
                    category={ postCategory.uiux }
                    backgroundImage={ HeromainImg }
                    backgroundPosition='center center'
                    detailContent={ RentbuildData.DetailContent }
                    platformTitle={ postPlatform.browser }
                    categoryTitle={ postCategory.uiux }
                    designerTitle={ postDesigner.redly }
                    toolsContent={ postTools.photoshop + ' / ' + postTools.illustrator + ' / ' + postTools.xd + ' / ' + postTools.afterEffects }
                    behanceLink={ RentbuildData.BehanceProject }
                    introContent={ RentbuildData.DetailContent }
                    mainPortfolioImage={ MainPortolioImg }
                    FirstGalleryImg={ FirstGalleryImg }
                    SecondGalleryImg={ SecondGalleryImg }
                    ThirdGalleryImg={ ThirdGalleryImg }
                    color1={ RentbuildData.color1 }
                    color2={ RentbuildData.color2 }
                    color3={ RentbuildData.color3 }
                    color4={ RentbuildData.color4 }
                    color5={ RentbuildData.color5 }
                    color6={ RentbuildData.color6 }
                    colorCode='#71adff'
                    WebsiteLink={ RentbuildData.WebsiteLink }
                    WebsiteLinkName={ RentbuildData.WebsiteLinkName }
                />
            </BakesellWrapper>
        )
    }
}

export default Bakesell;