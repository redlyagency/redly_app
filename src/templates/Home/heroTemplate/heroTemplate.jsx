import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { content } from '../../../utils/data/mainPageData';
import styled from 'styled-components';
import { theme } from '../../../utils/theme/theme';

import HeroIMG from '../../../assets/svg/HeroMainPic';
import HeroElipse from '../../../assets/svg/HeroElipse';

import WorksBtn from '../../../components/Buttons/worksBtn';
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
`;
const ColLeftWrapper = styled.div`
    margin-top: 55%;
    transform: translateY(-50%);
`;
const ColRight = styled(Col)`
    margin-left: 50px;
`;
const HeroTitleHero = styled.h1`
    color: ${ theme.colors.black };
    font-family: 'Poppins-SemiBold';
    font-size: 50px;
    margin-top: 70px;
`;
const HeroUnderTitleHero = styled.h1`
    color: ${ theme.colors.gray };
    font-family: 'Poppins-SemiBold';
    font-size: 19px;
    margin-top: 25px;
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
                <BodyWrapperHome>
                    <Row>
                        <ColLeft>
                            <ColLeftWrapper>
                                <HeroTitleHero> { content.Hero.HeroMainTitle } </HeroTitleHero>
                                <HeroUnderTitleHero> { content.Hero.HeroUnderTitle } </HeroUnderTitleHero>
                                <WorksBtn />
                            </ColLeftWrapper>
                        </ColLeft>
                        <HeroElipseStyled />
                        <ColRight>
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