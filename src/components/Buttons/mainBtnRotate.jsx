import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import ArrowIcon from '../../assets/svg/ArrowIcon';

const WrapperDIVLink = styled.div`
    position: relative;
    height: 50px;
    transition: 0.1s ease-in-out;
    transform: rotate(-90deg);
    position: absolute;
    right: 0;
    top: 0;
    :hover {
        margin-left: 10px;
        transition: 0.1s ease-in-out;
    }
    :hover .circleSwap {
        transition: 0.2s ease-in-out;
        width: 100%;
        height: 45px;
        border-radius: 100px;
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
`;
const PTitle = styled.p`
    color: ${ theme.colors.gray };
    line-height: 50px;
    margin-left: 25px;
    position: relative;
    z-index: 50;
    font-family: 'Poppins-SemiBold';
    text-transform: uppercase;
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

class MainButtonRotate extends React.Component {
    render() {
        return (
            <WrapperDIVLink style={this.props.style}>
                <CircleDecoration className="circleSwap" />
                <PTitle>
                    {this.props.name}
                </PTitle>
                <ArrowIconStyled />
            </WrapperDIVLink>
        )
    }
}

export default MainButtonRotate;