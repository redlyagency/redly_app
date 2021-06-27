import React from 'react';
import styled from 'styled-components';
import { content } from '../../utils/data/mainPageData';
import { theme } from '../../utils/theme/theme';
import { Container, Row, Col } from 'react-bootstrap';
import { btnPackage } from '../../utils/data/btnPageData';

import BtnGetInTouch from '../../components/Buttons/mainBtn';
import FooterCircle1 from '../../assets/svg/FooterCircle1';
import FooterCircle2 from '../../assets/svg/FooterCircle2';
import FooterSocialMediaBar from '../../components/FooterSocialMediaBar/footerSocialMediaBar';

const FooterWrapper = styled.div`
    color: ${ theme.colors.white };
`;
const FooterTitleWrapper = styled.div`
    width: 60%;
    padding-top: 100px;
    margin-right: auto;
    margin-left: auto;
    position: relative;

    @media ${ theme.device.laptop } {
        width: 70%;
    }
    @media ${ theme.device.tablet } {
        width: 90%;
    }
    @media ${ theme.device.mobileL } {
        width: 100%;
    }
`;
const FooterBigTitle = styled.h1`
    font-size: ${ theme.fontSize.DG_58 };
    font-family: 'Poppins-SemiBold';
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    position: relative;
    z-index: 40;

    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.DGG_58 };
    }
`;
const FooterUnderTitle = styled.h2`
    font-size: ${ theme.fontSize.DC_18 };
    font-family: 'Poppins-Light';
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    padding-top: 5px;
`;
const BtnContainer = styled.div`
    width: 35%;
    margin-right: auto;
    margin-left: auto;
`;
const DecoCircle1 = styled(FooterCircle1)`
    background-size: 100%;
    position: absolute;
    right: 50px;
    top: 50px;
    width: 150px;
    height: 150px;
    z-index: 1;

    @media ${ theme.device.tablet } {
        right: 30px;
    }
    @media ${ theme.device.mobileL } {
        right: 0;
    }
`;
const DecoCircle2 = styled(FooterCircle2)`
    position: absolute;
    height: 400px;
    bottom: 0;

    @media ${ theme.device.mobileL } {
        height: 300px;
    }
`;
const FooterFooterSection = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 26.5%;

    @media ${ theme.device.laptop } {
        width: 36.5%;
    }
    @media ${ theme.device.tablet } {
        width: 100%;
    }
    @media ${ theme.device.mobileL } {
        width: 100%;
    }
`;
const FooterTitle = styled.p`
    font-family: 'Poppins-Light';
    font-size: ${ theme.fontSize.DA_15 };
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 100%;
        text-align: center;
    }
`;
const SingleFooterLine = styled.div`
    background-color: ${ theme.colors.gray };
    height: 25px;
    width: 1px;

    @media ${ theme.device.mobileL } {
        display: none;
    }
`;

class FooterTemplate extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <DecoCircle2 />
                <Container>
                    <FooterTitleWrapper>
                        <DecoCircle1 />
                        <FooterBigTitle>
                            { content.Footer.FooterTitle }
                            <FooterUnderTitle>
                            { content.Footer.FooterUnderTitle }
                            </FooterUnderTitle>
                        </FooterBigTitle>
                        <BtnContainer>
                            <BtnGetInTouch
                                name={ btnPackage.MainBtn.GetInTouch }
                                style={{
                                    width: '100%',
                                    marginTop: '50px'
                                }}
                                styleCircle={{
                                    backgroundColor: '#4A4A4A'
                                }}
                                styleText={{
                                    fontSize: '18.5px',
                                    fontFamily: 'Poppins-SemiBold',
                                    color: 'white'
                                }}
                            />
                        </BtnContainer>
                    </FooterTitleWrapper>
                    <FooterFooterSection>
                        <Container>
                            <Row className="justify-content-center">
                                <Col
                                    md={{
                                        span: 5,
                                        order: 'first'
                                    }}
                                    xs={{
                                        span: 12,
                                        order: 'last'
                                    }}
                                >
                                    <FooterTitle>
                                        { content.Footer.FooterFooterTitle }
                                    </FooterTitle>
                                </Col>
                                    <SingleFooterLine />
                                <Col
                                    md={{
                                        span: 5,
                                        order: 'last'
                                    }}
                                    xs={{
                                        span: 12,
                                        order: 'first'
                                    }}
                                >
                                    <FooterSocialMediaBar />
                                </Col>
                            </Row>
                        </Container>
                    </FooterFooterSection>
                </Container>
            </FooterWrapper>
        );
    }
}

export default FooterTemplate;