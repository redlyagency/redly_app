import React from 'react';
import { content } from '../../../utils/data/mainPageData';
import { btnPackage } from '../../../utils/data/btnPageData';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import {
    BodyWrapperHome,
    ColLeft,
    ColRight,
    HeroTitleHero,
    HeroUnderTitleHero,
    BtnWrapperMediaClass,
    HeroElipseStyled,
    HeroIMGStyled,
} from './heroTemplate.style';

import WorksBtn from '../../../components/Buttons/mainBtn';
import HeroSocialMediaBar from '../../../components/HeroSocialMedia/heroSocialMedia';
import ScrollDownBtn from '../../../components/Buttons/scrollDownBtn';
import AboutMobileMouseScroll from '../../../components/Buttons/mobileScrollMouse';

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
                                    <BtnWrapperMediaClass>
                                        <NavLink to="/works" activeClassName="active">
                                            <WorksBtn
                                                name={ btnPackage.MainBtn.SeeOurWorks }
                                            />
                                        </NavLink>
                                    </BtnWrapperMediaClass>
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
                <AboutMobileMouseScroll />
                <ScrollDownBtn
                    to="downBtnTriggerHandle"
                />
            </>
        );
    }
}

export default HeroTemplate;