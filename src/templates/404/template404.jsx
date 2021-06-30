import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import { btnPackage } from '../../utils/data/btnPageData';
import { NotFound } from '../../utils/data/404PageData';
import { NavLink } from 'react-router-dom';

import HeroIMG from '../../assets/svg/HeroMainPic';
import HeroElipse from '../../assets/svg/HeroElipse';

import WorksBtn from '../../components/Buttons/mainBtn';

const BodyWrapperHome = styled(Container)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const ColLeft = styled(Col)`
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
const ColRight = styled(Col)``;
const HeroTitleHero = styled.h1`
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
const HeroUnderTitleHero = styled.h1`
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
const HeroElipseStyled = styled(HeroElipse)`
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
const HeroIMGStyled = styled(HeroIMG)`
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
const BtnWrapperMediaClass = styled.div`
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
const ErrorMainTitle1 = styled.h1`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DH_138 };
    width: 100%;
    text-align: center;
`;
const ErrorUnderTitle2 = styled.h2`
    font-family: 'Poppins-SemiBold';
    font-size: 28px;
    width: 100%;
    text-align: center;
    margin-top: -20px;
`;

class HeroTemplate extends React.Component {
    render() {
        return (
            <>
                <BodyWrapperHome id="topBtnTriggerHandle">
                    <Row className="justify-content-center">
                        <Col 
                        style={{
                            backgroundColor: '',
                        }}
                        md={{
                            span: 6,
                            order: 'first'
                        }}
                        xs={{
                            span: 12,
                            order: 'last'
                        }}
                        >
                            <Row>
                                <ColLeft>
                                    <HeroTitleHero>
                                        <ErrorMainTitle1>
                                            { NotFound.ErrorMainTitle }
                                        </ErrorMainTitle1>
                                        <ErrorUnderTitle2>
                                            { NotFound.ErrorUnderTitle }
                                        </ErrorUnderTitle2>
                                    </HeroTitleHero>
                                    <HeroUnderTitleHero>
                                        { NotFound.ErrorContent }
                                    </HeroUnderTitleHero>
                                    <BtnWrapperMediaClass>
                                        <NavLink
                                            to="/"
                                            activeClassName="active1"
                                        >
                                            <WorksBtn
                                                styleArrow={{
                                                    transform: 'translateY(-50%) rotate(180deg)',
                                                }}
                                                style={{
                                                    width: '180px'
                                                }}
                                                name={ btnPackage.MainBtn.GoHome }
                                            />
                                        </NavLink>
                                    </BtnWrapperMediaClass>
                                </ColLeft>
                            </Row>
                        </Col>
                        <HeroElipseStyled />
                        <ColRight
                        style={{
                            backgroundColor: '',
                            }}
                        md={{
                            span: 6,
                            order: 'last'
                        }}
                        xs={{
                            span: 12,
                            order: 'first'
                        }}
                        >
                            <Row className="justify-content-center">
                                <HeroIMGStyled />
                            </Row>
                        </ColRight>
                    </Row>
                </BodyWrapperHome>
            </>
        );
    }
}

export default HeroTemplate;