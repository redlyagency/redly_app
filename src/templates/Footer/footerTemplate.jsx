import React from 'react';
import { content } from '../../utils/data/mainPageData';
import { Container, Row } from 'react-bootstrap';
import { btnPackage } from '../../utils/data/btnPageData';
import { NavLink } from 'react-router-dom';
import {
    FooterWrapper,
    DecoCircle2,
    FooterTitleWrapper,
    DecoCircle1,
    FooterBigTitle,
    FooterUnderTitle,
    BtnWrapperFooterClass,
    FooterFooterSection,
    ColLeftFooterA,
    FooterTitle,
    ColCenterFooterB,
    SingleFooterLine,
    ColRightFooterC,
    BtnFooterWrapperTop,
} from './footerTemplate.style';

import BtnGetInTouch from '../../components/Buttons/mainBtn';
import FooterSocialMediaBar from '../../components/FooterSocialMediaBar/footerSocialMediaBar';
import AbsoluteVerticalScrollUpBtn from '../../components/Buttons/scrollTopBtnFooter';

class FooterTemplate extends React.Component {
    render() {
        return (
            <>
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
                            <BtnWrapperFooterClass>
                                <NavLink to="/contact" activeClassName="active">
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
                                </NavLink>
                            </BtnWrapperFooterClass>
                        </FooterTitleWrapper>
                        <FooterFooterSection>
                        <Row>
                            <ColLeftFooterA
                                md={{
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
                            </ColLeftFooterA>
                            <ColCenterFooterB>
                                <SingleFooterLine />
                            </ColCenterFooterB>
                            <ColRightFooterC
                                md={{
                                    order: 'last'
                                }}
                                xs={{
                                    span: 12,
                                    order: 'first'
                                }}
                            >
                                <FooterSocialMediaBar />
                            </ColRightFooterC>
                        </Row>
                        </FooterFooterSection>
                    </Container>
                </FooterWrapper>
                <BtnFooterWrapperTop>
                    <AbsoluteVerticalScrollUpBtn />
                </BtnFooterWrapperTop>
            </>
        );
    }
}

export default FooterTemplate;