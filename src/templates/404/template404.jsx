import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { btnPackage } from '../../utils/data/btnPageData';
import { NotFound } from '../../utils/data/404PageData';
import { NavLink } from 'react-router-dom';
import {
    BodyWrapperHome,
    ColLeft,
    HeroTitleHero,
    ErrorMainTitle1,
    ErrorUnderTitle2,
    HeroUnderTitleHero,
    BtnWrapperMediaClass,
    HeroElipseStyled,
    ColRight,
    HeroIMGStyled,
} from './template404.style';

import WorksBtn from '../../components/Buttons/ReversemainBtn';

class ErrorTemplate extends React.Component {
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
                                                styleCircle={{
                                                    right: '20px'
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

export default ErrorTemplate;