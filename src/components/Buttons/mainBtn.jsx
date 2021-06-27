import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import ArrowIcon from '../../assets/svg/ArrowIcon';

const WrapperDIVLink = styled.div`
    position: relative;
    height: 50px;
    transition: 0.1s ease-in-out;
    :hover {
        margin-left: 10px;
        transition: 0.1s ease-in-out;
    }
    :hover > .df34ferfvbvdffe {
        right: 15px;
        transition: 0.1s ease-in-out;
    }
    :hover .circleSwap {
        transition: 0.2s ease-in-out;
        width: 100%;
        height: 45px;
        border-radius: 100px;

        @media ${ theme.device.laptop } {
            height: 40px;
        }
        @media ${ theme.device.tablet } {
            height: 35px;
        }
    }
`;
const CircleDecoration = styled.div`
    background-color: ${ theme.colors.lightergray };
    border-radius: 100%;
    height: 45px;
    width: 45px;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s ease-in-out;
    position: absolute;
    z-index: 1;

    @media ${ theme.device.laptop } {
        height: 40px;
        width: 40px;
    }
    @media ${ theme.device.tablet } {
        height: 35px;
        width: 35px;
    }
`;
const PTitle = styled.p`
    color: ${ theme.colors.gray };
    line-height: 50px;
    margin-left: 25px;
    position: relative;
    z-index: 50;
    font-family: 'Poppins-SemiBold';
    text-transform: uppercase;
    font-size: ${ theme.fontSize.DD_18_5 };

    @media ${ theme.device.laptop } {
        font-size: ${ theme.fontSize.DDD_18_5 };
    }
    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DDDD_18_5 };
    }
    @media ${ theme.device.mobileL } {
        font-size: ${ theme.fontSize.MD_18_5 };
    }
`;
const ArrowIconStyled = styled(ArrowIcon)`
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 25px;
    height: 30px;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 200;
`;

class MainButton extends React.Component {
    render() {
        return (
            <WrapperDIVLink style={ this.props.style }>
                <CircleDecoration className="circleSwap" style={ this.props.styleCircle } />
                <PTitle style={ this.props.styleText }>
                    { this.props.name }
                </PTitle>
                <ArrowIconStyled className="df34ferfvbvdffe" />
            </WrapperDIVLink>
        )
    }
}

export default MainButton;