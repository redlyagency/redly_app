import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

import MobileMouseIcon from '../../assets/svg/MobileMouseIcon';

const MobileScrollMouseWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 40px;
    padding: 5px;
    animation-name: movingMouseAnimation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    display: none;

    @media ${ theme.device.mobileL } {
        display: unset;
    }

    @keyframes movingMouseAnimation {
        0% {
            bottom: 10px;
        }
        50% {
            bottom: 20px;
        }
        100% {
            bottom: 10px;
        }
    }
`;

class MobileScrollMouse extends React.Component {
    render() {
        return (
            <MobileScrollMouseWrapper>
                <MobileMouseIcon />
            </MobileScrollMouseWrapper>
        )
    }
}

export default MobileScrollMouse;