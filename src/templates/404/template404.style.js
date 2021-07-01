import styled from "styled-components";
import { theme } from "../../utils/theme/theme";
import { Container, Col } from "react-bootstrap";

import HeroIMG from '../../assets/svg/HeroMainPic';
import HeroElipse from '../../assets/svg/HeroElipse';

export const BodyWrapperHome = styled(Container)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
export const ColLeft = styled(Col)`
    margin-top: 43%;
    transform: translateY(-50%);

    @media ${ theme.device.laptop } {
        margin-top: 50%;
    }
    @media ${ theme.device.tablet } {
        margin-top: 55%;
    }
    @media ${ theme.device.mobileL } {
        margin-top: 0;
        transform: translateY(0);
    }
`;
export const ColRight = styled(Col)``;
export const HeroTitleHero = styled.h1`
    color: ${ theme.colors.black };
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DF_47 };
    
    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DFF_47 };
    }
    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DFFF_47 };
    }
    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MF_47 };
    }
    @media ${ theme.device.mobileM } {
        font-size: ${ theme.fontSize.MFF_47 };
    }
`;
export const HeroUnderTitleHero = styled.h1`
    color: ${ theme.colors.gray };
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    margin-top: 25px;
    width: 100%;
    text-align: center;

    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DBB_17 };
    }
    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DBBB_17 };
    }
    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MB_17 };
    }
`;
export const HeroElipseStyled = styled(HeroElipse)`
    position: absolute;
    height: 600px;
    z-index: -999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;

    @media ${ theme.device.laptop } {
        width: 800px;
        height: 520px;
    }
    @media ${ theme.device.tablet } {
        width: 400px;
        height: 420px;
    }
    @media ${ theme.device.mobileL } {
        width: 320px;
        height: 390px;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);
    }
`;
export const HeroIMGStyled = styled(HeroIMG)`
    height: 550px;

    @media ${ theme.device.laptop } {
        height: 500px;
    }
    @media ${ theme.device.tablet } {
        height: 400px;
    }
    @media ${ theme.device.mobileL } {
        width: 320px;
        height: 400px;
        margin-top: 0;
    }
`;
export const BtnWrapperMediaClass = styled.div`
    width: 46%;
    margin-top: 30px;
    margin-left: 56%;
    transform: translateX(-50%);

    @media ${ theme.device.laptop } {
        width: 50%;
        margin-top: 25px;
    }
    @media ${ theme.device.tablet } {
        width: 65%;
        margin-top: 15px;
    }
    @media ${ theme.device.mobileL } {
        width: 55%;
    }
    @media ${ theme.device.mobileM } {
        width: 65%;
    }
    @media ${ theme.device.mobileS } {
        width: 70%;
    }
`;
export const ErrorMainTitle1 = styled.h1`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DH_138 };
    width: 100%;
    text-align: center;
`;
export const ErrorUnderTitle2 = styled.h2`
    font-family: 'Poppins-SemiBold';
    font-size: 28px;
    width: 100%;
    text-align: center;
    margin-top: -20px;
`;