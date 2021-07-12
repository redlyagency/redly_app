import React from 'react';
import {
    FooterWrapper,
    WorksDetailsWrapper,
    ImgHeroPortfolioDetails,
    ImgHeroPortfolioDetailsBackdrop,
    TitlePortfolioDetailsWrapper,
    TitleTextAll,
    BodyDetailsProjectWrapper,
    AboutHeaderWrapper,
    AboutDetailContent,
    AboutRowDetails,
    ColStyledAbout,
    MainPortfolioGalleryImg,
    RowDetailsDetails,
    EmptyFullColAbout,
} from './worksDetailsTemplate.style';
import { StaticProjectDetailsData } from '../../utils/data/staticProjectDetailsData';
import { btnPackage } from '../../utils/data/btnPageData';

import ScrollDownBtn from '../../components/Buttons/scrollDownBtn';
import AboutMobileMouseScroll from '../../components/Buttons/mobileScrollMouse';
import MainBtnBehanceCenter from '../../components/Buttons/mainBtn';
import WorkListPreset from '../../components/HeaderPreset/headerListPreset';

import AboutHeader from '../../components/HeaderPreset/headerPreset';

import FooterTemplate from '../Footer/footerTemplate';

import imagetest from '../../assets/img/portfolioGallery/bakesell/main.png'

class WorksDetails extends React.Component {
    render() {
        return (
            <>
                <WorksDetailsWrapper>
                    <ImgHeroPortfolioDetails
                        backgroundImageProps={ this.props.backgroundImage }
                    >
                        <ImgHeroPortfolioDetailsBackdrop />
                    </ImgHeroPortfolioDetails>
                    <TitlePortfolioDetailsWrapper>
                        <TitleTextAll>
                            { this.props.title }
                        </TitleTextAll>
                        <TitleTextAll isSmall>
                            { this.props.category }
                        </TitleTextAll>
                    </TitlePortfolioDetailsWrapper>
                    <AboutMobileMouseScroll />
                    <ScrollDownBtn
                        to="downBtnTriggerHandleWorks"
                    />
                </WorksDetailsWrapper>
                <BodyDetailsProjectWrapper
                    id="downBtnTriggerHandleWorks"
                >
                    <AboutHeaderWrapper>
                        <AboutHeader
                            name={ StaticProjectDetailsData.MainHeader }
                        />
                    </AboutHeaderWrapper>
                    <AboutDetailContent>
                        { this.props.detailContent }
                    </AboutDetailContent>
                    <AboutRowDetails>
                        <ColStyledAbout>
                            { StaticProjectDetailsData.platform }
                        </ColStyledAbout>
                        <ColStyledAbout>
                            { StaticProjectDetailsData.category }
                        </ColStyledAbout>
                        <ColStyledAbout>
                            { StaticProjectDetailsData.designer }
                        </ColStyledAbout>
                    </AboutRowDetails>
                    <AboutRowDetails>
                        <ColStyledAbout isUnder>
                            { this.props.platformTitle }
                        </ColStyledAbout>
                        <ColStyledAbout isUnder>
                            { this.props.categoryTitle }
                        </ColStyledAbout>
                        <ColStyledAbout isUnder>
                            { this.props.designerTitle }
                        </ColStyledAbout>
                    </AboutRowDetails>
                    <AboutRowDetails isPaddingChange>
                        <ColStyledAbout>
                            { StaticProjectDetailsData.tools }
                        </ColStyledAbout>
                    </AboutRowDetails>
                    <AboutRowDetails>
                        <ColStyledAbout isUnder>
                            { this.props.toolsContent }
                        </ColStyledAbout>
                    </AboutRowDetails>
                    <a href={ this.props.behanceLink }>
                        <MainBtnBehanceCenter
                            name={ btnPackage.MainBtn.ViewInBehance }
                            style={{
                                marginTop: '30px',
                                width: '250px',
                            }}
                        />
                    </a>
                    <MainPortfolioGalleryImg
                        src={ imagetest }
                    />
                    <WorkListPreset
                        name={ StaticProjectDetailsData.firstHeader }
                    />
                    <RowDetailsDetails>
                        <EmptyFullColAbout></EmptyFullColAbout>
                        <EmptyFullColAbout>
                            dsfsd
                        </EmptyFullColAbout>
                    </RowDetailsDetails>
                </BodyDetailsProjectWrapper>
                <FooterWrapper>
                    <FooterTemplate />
                </FooterWrapper>
            </>
        )
    }
}

export default WorksDetails;