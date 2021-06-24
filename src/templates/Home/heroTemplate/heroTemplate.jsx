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
    //background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const ColLeft = styled(Col)`
    margin-right: 50px;
    position: relative;

    @media ${ theme.device.tablet } {
        margin-right: 35px;
    }
`;
const ColLeftWrapper = styled.div`
    margin-top: 55%;
    transform: translateY(-50%);
`;
const ColRight = styled(Col)`
    margin-left: 50px;

    @media ${ theme.device.tablet } {
        margin-left: 35px;
    }
`;
const HeroTitleHero = styled.h1`
    color: ${ theme.colors.black };
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DF_47 };
    margin-top: 70px;

    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DFF_40 };
    }
    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DFFF_29 };
    }
`;
const HeroUnderTitleHero = styled.h1`
    color: ${ theme.colors.gray };
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    margin-top: 25px;

    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DBB_15 };
    }
    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DBBB_15 };
    }
`;
const HeroElipseStyled = styled(HeroElipse)`
    position: absolute;
    height: 600px;
    z-index: -999;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

class HeroTemplate extends React.Component {
    render() {
        return (
            <>
                <BodyWrapperHome id="topBtnTriggerHandle">
                    <Row>
                        <ColLeft
                        md={{
                            span: 5,
                            order: 'first'
                        }}
                        xs={{
                            span: 12,
                            order: 'last'
                        }}
                        >
                            <ColLeftWrapper>
                                <HeroTitleHero> { content.Hero.HeroMainTitle } </HeroTitleHero>
                                <HeroUnderTitleHero> { content.Hero.HeroUnderTitle } </HeroUnderTitleHero>
                                <NavLink to="/works" activeClassName="active">
                                    <WorksBtn
                                        style={{
                                            marginTop: '30px',
                                            width: '50%'
                                    }}
                                        name={ btnPackage.MainBtn.SeeOurWorks }
                                    />
                                </NavLink>
                            </ColLeftWrapper>
                        </ColLeft>
                        <HeroElipseStyled />
                        <ColRight
                        md={{
                            span: 5,
                            order: 'last'
                            }}
                        xs={{
                            span: 12,
                            order: 'first'
                            }}
                        >
                            <HeroIMG />
                        </ColRight>
                    </Row>
                    <HeroSocialMediaBar />
                </BodyWrapperHome>
                <ScrollDownBtn />
            </>
        );
    }
}

export default HeroTemplate;