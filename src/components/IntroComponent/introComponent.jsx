import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const IntroComponentWrapper = styled.div`
    background-color:  ${ theme.colors.darkergray };
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999999999999999999999999999;
    transition: opacity 5s ease-in-out;
`;
const InfoLoading = styled.div`
    color: ${ theme.colors.white };
    font-size: ${ theme.fontSize.DE_35 };
    font-family: 'Poppins-SemiBold';
    text-align: center;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
`;

class IntroComponent extends React.Component {
    render() {
        return (
            <IntroComponentWrapper>
                <InfoLoading>Way to a better place... 🌎</InfoLoading>
            </IntroComponentWrapper>
        )
    }
}

export default IntroComponent;