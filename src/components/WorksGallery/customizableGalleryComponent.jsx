import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { theme } from '../../utils/theme/theme';
import { NavLink } from 'react-router-dom';

import { postContent } from '../../utils/data/portfolioData';
import maskImage from '../../assets/img/maskBanner.png';

const PostOurLoopWrapper = styled.div`
    padding: 20px 0 30px 0;
`;
const PostRow = styled(Row)`
    height: 250px;
    position: relative;

    @media ${ theme.device.tablet } {
        height: 200px;
    }
    @media ${ theme.device.mobileL } {
        height: 150px;
    }
`;
const NumberSection = styled(Col)`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DE_35 };
    color: ${ theme.colors.lightergray };
    padding: 0;
    display: flex;
    align-items: center;
    //background-color: seagreen;

    @media ${ theme.device.tablet } {
        margin-left: -50px;
    }
    @media ${ theme.device.mobileL } {
        margin-left: -65px;
        font-size: ${ theme.fontSize.ME_35 };
    }
    @media ${ theme.device.mobileMscalePlus } {
        margin-left: -70px;
        margin-top: -25px;
    }
`;
const NameSection = styled(Col)`
    padding: 0;
    display: flex;
    align-items: center;
`;
const NamePortfolio = styled.h1`
    margin: 0;
    font-size: ${ theme.fontSize.DF_47 };
    position: relative;
    font-family: 'Poppins-SemiBold';
    margin-top: -40px;

    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MF_47 };
    }
    @media ${ theme.device.mobileMscale } {
        font-size: ${ theme.fontSize.MFF_47 };
    }
    @media ${ theme.device.mobileMscalePlus } {
        font-size: ${ theme.fontSize.MFFF_47 };
        margin-top: -60px;
        margin-left: 8px;
    }
`;
const CategoryPortfolio = styled.h2`
    font-size: ${ theme.fontSize.DB_17 };
    position: absolute;
    bottom: -35px;
    text-transform: uppercase;
    font-family: 'Poppins-SemiBold';

    @media ${ theme.device.mobileL } {
        bottom: -30px;
        font-size: ${ theme.fontSize.MBB_17 };
    }
    @media ${ theme.device.mobileMscale } {
        font-size: ${ theme.fontSize.MBBB_17 };
    }
`;
const LineDecoration = styled.div`
    background-color: ${ theme.colors.lightergray };
    width: 70px;
    height: 3px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media ${ theme.device.tablet } {
        width: 30px;
    }
    @media ${ theme.device.mobileL } {
        width: 15px;
    }
    @media ${ theme.device.mobileMscale } {
        width: 15px;
    }
    @media ${ theme.device.mobileMscalePlus } {
        width: 10px;
    }
`;
const DateOfRelease = styled.h3`
    font-size: 12px;
    position: absolute;
    bottom: -50px;
    text-transform: uppercase;
    font-family: 'Poppins-Light';

    @media ${ theme.device.mobileL } {
        bottom: -43px;
        font-size: 10px;
    }
    @media ${ theme.device.mobileMscale } {
        bottom: -40px;
        font-size: 9px;
    }
`;

class CustomizableGalleryComponent extends React.Component {
    render() {
        return (
            <PostOurLoopWrapper>
                {postContent.reverse().map((value, index) => {

                    const PostWrapper = styled(Container)`
                    padding-left: 100px;
                    position: relative;
                    color: ${ theme.colors.white };
                    background-image: ${ value.gradient };

                    :hover .hoverBiggerBackgroundToggle {
                        background-size: 110%;
                        width: 72%;
                    }
                    :hover .hoverWrapperButtonActive {
                        margin-top: -5px;
                        transition: 0.2s ease-in-out;
                    }
                    :hover .circleSwap {
                        transition: 0.2s ease-in-out;
                        width: 45px;
                        height: 200px;
                        border-radius: 100px;
                    }
                    
                    @media ${ theme.device.laptop } {
                        :hover .circleSwap {
                        transition: 0.2s ease-in-out;
                        width: 35px;
                        height: 190px;
                        border-radius: 100px;
                        }
                    }
                    @media ${ theme.device.tablet } {
                        :hover .circleSwap {
                        width: 30px;
                        height: 160px;
                        }
                    }
                    @media ${ theme.device.mobileL } {
                        :hover .circleSwap {
                        width: 25px;
                        height: 120px;
                        }
                    }
                    @media ${ theme.device.mobileMscalePlus } {
                        height: 125px;
                        margin-left: -15px;
                        width: 100vw;
                    }
                    `;
                    const BgPortfolio = styled.div`
                    background-image: ${ value.image };
                    mask-image: url( ${ maskImage } );
                    mask-size: 100% 100%;
                    background-position: ${ value.imagePosition };
                    background-size: ${ value.imageSize };
                    opacity: 0.25;
                    width: 70%;
                    height: 250px;
                    right: 0;
                    top: 0;
                    position: absolute;

                    @media ${ theme.device.tablet } {
                        height: 200px;
                        right: -50px;
                    }
                    @media ${ theme.device.mobileL } {
                        height: 150px;
                        right: -65px;
                    }
                    @media ${ theme.device.mobileMscalePlus } {
                        height: 125px;
                        right: -70px;
                        width: 77%;
                    }
                    `;

                    return (
                        <NavLink
                            to={ value.link }
                            activeClassName="active1"
                        >
                        <PostWrapper
                            key={index}
                        >
                            <LineDecoration />
                            <PostRow>
                                <NumberSection
                                    xs={ 1 }
                                >
                                    { value.number }
                                </NumberSection>
                                <NameSection
                                    xs={ 11 }
                                >
                                    <NamePortfolio>
                                        { value.name }
                                        <CategoryPortfolio>
                                            { value.category }
                                        </CategoryPortfolio>
                                        <DateOfRelease>
                                            { value.dateOfRelease }
                                        </DateOfRelease>
                                    </NamePortfolio>
                                    <BgPortfolio
                                        className="hoverBiggerBackgroundToggle"
                                    />
                                </NameSection>
                            </PostRow>
                        </PostWrapper>
                        </NavLink>
                    )
                })}
            </PostOurLoopWrapper>
        )
    }
}

export default CustomizableGalleryComponent;