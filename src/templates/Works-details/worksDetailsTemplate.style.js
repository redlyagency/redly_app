import styled from "styled-components";
import { theme } from "../../utils/theme/theme";
import { Container, Row, Col } from "react-bootstrap";

export const FooterWrapper = styled.div`
    position: relative;
    background-color: ${ theme.colors.darkergray };
    height: 500px;
`;
export const WorksDetailsWrapper = styled.div`
    background-color: ${ theme.colors.white };
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    
    @media ${ theme.device.browserzoom } {
        height: 1080px;
        min-height: auto;
    }
`;
export const ImgHeroPortfolioDetails = styled.div`
    background-image: url( ${ props => props.backgroundImageProps } );
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.80;
`;
export const ImgHeroPortfolioDetailsBackdrop = styled.div`
    backdrop-filter: blur(50px) opacity(80%);
    height: 100%;
    width: 100%;
`;
export const TitlePortfolioDetailsWrapper = styled.div`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: ${ theme.colors.black };
    text-align: center;
`;
export const TitleTextAll = styled.h1`
    font-size: ${({isSmall}) => isSmall ? `${ theme.fontSize.DD_18_5 }` : `${ theme.fontSize.DG_58 }`};
    font-family: 'Poppins-SemiBold';

    ::after {
        content: '';
        width: 60%;
        height: 2.5px;
        background-color: black;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        display: ${({isSmall}) => isSmall ? 'none' : 'unset'};
    }
`;
export const BodyDetailsProjectWrapper = styled(Container)`
    height: 2000px;
`;
export const AboutHeaderWrapper = styled.div`
    padding-top: 40px;
`;
export const AboutDetailContent = styled.p`
    font-family: 'Poppins-Medium';
    margin-top: 10px;
    color: ${ theme.colors.gray };
    font-size: ${ theme.fontSize.DD_18_5 };
`;
export const AboutRowDetails = styled(Row)`
    width: 50%;
    margin-top: 10px;
    margin-top: ${({isPaddingChange}) => isPaddingChange ? '15px' : '10px'};

    @media ${ theme.device.tablet } {
        width: 100%;
    }
`;
export const ColStyledAbout = styled(Col)`
    font-family: 'Poppins-SemiBold';
    color: ${({isUnder}) => isUnder ? `${ theme.colors.gray }` : `${ theme.colors.black }`};
    font-size: ${({isUnder}) => isUnder ? `${ theme.fontSize.DB_17 }` : `${ theme.fontSize.DD_18_5 }`};
`;
export const MainPortfolioGalleryImg = styled.img`
    margin-top: 65px;
    background-size: cover;
    background-position: center;
    width: 100%;

    :hover {
        transform: scale(1.025);
    }
`;
export const RowDetailsDetails = styled(Row)`

`;
export const EmptyFullColAbout = styled(Col)`

`;