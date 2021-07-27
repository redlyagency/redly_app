import React from 'react';
import { useHistory } from "react-router-dom";
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
    GalleryGridWrapper,
    GalleryGrid,
    GalleryImgItem,
    UnderListUnderHeaderButtonWrapper,
    FontRowShowPresent,
    ColFontShowPresent,
    RowColorsPresent,
    ColPresentColor,
    ASiteHref,
} from './worksDetailsTemplate.style';
import { StaticProjectDetailsData } from '../../utils/data/staticProjectDetailsData';
import { btnPackage } from '../../utils/data/btnPageData';

import ScrollDownBtn from '../../components/Buttons/scrollDownBtn';
import AboutMobileMouseScroll from '../../components/Buttons/mobileScrollMouse';
import MainBtnBehanceCenter from '../../components/Buttons/mainBtn';
import WorkListPreset from '../../components/HeaderPreset/headerListPreset';
import UnderListUnderHeaderButton from '../../components/Buttons/ReversemainBtn';
import ColorPresentComponent from '../../components/ColorsPresent/colorsPresent';

import AboutHeader from '../../components/HeaderPreset/headerPreset';

import FooterTemplate from '../Footer/footerTemplate';

class WorksDetails extends React.Component {
    render() {
        return (
            <>
                <WorksDetailsWrapper>
                    <ImgHeroPortfolioDetails
                        backgroundImageProps={ this.props.backgroundImage }
                        backgroundPositionProps= { this.props.backgroundPosition }
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
                        src={ this.props.mainPortfolioImage }
                    />
                    <WorkListPreset
                        name={ StaticProjectDetailsData.firstHeader }
                    />
                    <RowDetailsDetails>
                        <EmptyFullColAbout isDisplayNone/>
                        <EmptyFullColAbout>
                            { this.props.introContent }
                        </EmptyFullColAbout>
                    </RowDetailsDetails>
                    <WorkListPreset
                        name={ StaticProjectDetailsData.secondHeader }
                    />
                    <RowDetailsDetails>
                        <EmptyFullColAbout isDisplayNone/>
                        <EmptyFullColAbout>
                            <FontRowShowPresent>
                                <ColFontShowPresent
                                    isBigger
                                    md={{
                                        span: 4,
                                    }}
                                >
                                    { StaticProjectDetailsData.fontPresentA }
                                </ColFontShowPresent>
                                <ColFontShowPresent
                                    md={{
                                        span: 7,
                                    }}
                                >
                                    { StaticProjectDetailsData.fontPresentB }
                                    { this.props.fontsName }
                                </ColFontShowPresent>
                            </FontRowShowPresent>
                        </EmptyFullColAbout>
                    </RowDetailsDetails>
                    <WorkListPreset
                        name={ StaticProjectDetailsData.thirdHeader }
                    />
                    <RowDetailsDetails>
                        <EmptyFullColAbout isDisplayNone/>
                        <EmptyFullColAbout>
                            <RowColorsPresent>
                                <ColPresentColor>
                                    <ColorPresentComponent
                                        colorCode={ this.props.colorCode }
                                        color1={ this.props.color1 }
                                        color2={ this.props.color2 }
                                        color3={ this.props.color3 }
                                        color4={ this.props.color4 }
                                        color5={ this.props.color5 }
                                        color6={ this.props.color6 }
                                    />
                                </ColPresentColor>
                                <ColPresentColor />
                                <ColPresentColor />
                            </RowColorsPresent>
                        </EmptyFullColAbout>
                    </RowDetailsDetails>
                    <WorkListPreset
                        name={ StaticProjectDetailsData.fourthHeader }
                    />
                    <RowDetailsDetails>
                        <EmptyFullColAbout isDisplayNone/>
                        <EmptyFullColAbout>
                            <ASiteHref href={ this.props.WebsiteLink }>
                                { this.props.WebsiteLinkName }
                            </ASiteHref>
                        </EmptyFullColAbout>
                    </RowDetailsDetails>
                    <GalleryGridWrapper>
                        <GalleryGrid
                            md={{
                                span: 6,
                            }}
                            xs={{
                                span: 12,
                            }}
                        >
                            <GalleryImgItem src={ this.props.FirstGalleryImg } />
                        </GalleryGrid>
                        <GalleryGrid
                            md={{
                                span: 6,
                            }}
                            xs={{
                                span: 12,
                            }}
                        >
                            <GalleryImgItem src={ this.props.SecondGalleryImg } />
                        </GalleryGrid>
                        <GalleryGrid
                            md={{
                                span: 6,
                            }}
                            xs={{
                                span: 12,
                            }}
                        >
                            <GalleryImgItem src={ this.props.ThirdGalleryImg } />
                        </GalleryGrid>
                        <GalleryGrid
                            md={{
                                span: 6,
                            }}
                            xs={{
                                span: 12,
                            }}
                        >
                            <GalleryImgItem src={ this.props.FourthGalleryImg } />
                        </GalleryGrid>
                        <GalleryGrid
                            md={{
                                span: 6,
                            }}
                            xs={{
                                span: 12,
                            }}
                        >
                            <GalleryImgItem src={ this.props.FifthGalleryImg } />
                        </GalleryGrid>
                    </GalleryGridWrapper>
                    <BackButtonComponentItem />
                </BodyDetailsProjectWrapper>
                <FooterWrapper>
                    <FooterTemplate />
                </FooterWrapper>
            </>
        )
    }
}

export const BackButtonComponentItem = () => {
    let history = useHistory();
        return (
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
        )
}

export default WorksDetails;