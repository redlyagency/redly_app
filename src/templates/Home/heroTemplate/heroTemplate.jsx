import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { content } from '../../../utils/data/mainPageData';
import styled from 'styled-components';
import { theme } from '../../../utils/theme/theme';
import { btnPackage } from '../../../utils/data/btnPageData';
import { NavLink } from 'react-router-dom';

import HeroIMG from '../../../assets/svg/HeroMainPic';
import HeroElipse from '../../../assets/svg/HeroElipse';

import WorksBtn from '../../../components/Buttons/mainBtn';
import HeroSocialMediaBar from '../../../components/HeroSocialMedia/heroSocialMedia';
import ScrollDownBtn from '../../../components/Buttons/scrollDownBtn';

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
                                        { content.Hero.HeroMainTitle }
                                    </HeroTitleHero>
                                    <HeroUnderTitleHero>
                                        { content.Hero.HeroUnderTitle }
                                    </HeroUnderTitleHero>
                                    <NavLink to="/works" activeClassName="active">
                                        <WorksBtn
                                            style={{
                                                marginTop: '30px',
                                                width: '50%'
                                            }}
                                            name={ btnPackage.MainBtn.SeeOurWorks }
                                        />
                                    </NavLink>
                                </ColLeft>
                                <HeroSocialMediaBar />
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
                <ScrollDownBtn />
            </>
        );
    }
}

export default HeroTemplate;