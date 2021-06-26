import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import { btnPackage } from '../../utils/data/btnPageData';
import { Link } from 'react-scroll';

import ArrowSVG from '../../assets/svg/scrollSvgIcon';

const ButtonWrapperPosition = styled.div`
    position: absolute;
    right: 35px;
    bottom: 60px;
    height: 200px;
    width: 50px;
    animation-name: movingArrowAnim1;
    animation-iteration-count: infinite;
    animation-duration: 2s;

    @media ${ theme.device.laptop } {
        right: 8px;
    }
    @media ${ theme.device.mobileL } {
        display: none;
    }

    @keyframes movingArrowAnim1 {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;
const H1StyledScrollText = styled.h1`
    transform: rotate(90deg);
    text-transform: uppercase;
    font-size: 18px;
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.gray };
    height: 50px;
    width: 150px;
    position: absolute;
    left: -50px;
    top: 50px;
    line-height: 50px;
`;
const ArrowStyledSVG = styled(ArrowSVG)`
    width: 50px;
    height: 50px;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 3px;
`;

class scrollDownBtn extends React.Component {
    render() {
        return (
            <Link to="downBtnTriggerHandle" offset={-70} smooth={true}>
                <ButtonWrapperPosition>
                    <H1StyledScrollText>
                        { btnPackage.ArrowBtn.ScrollDown }
                    </H1StyledScrollText>
                    <ArrowStyledSVG />
                </ButtonWrapperPosition>
            </Link>
        )
    }
}

export default scrollDownBtn;