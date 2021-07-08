import React from 'react';
import styled from 'styled-components';

import SuccessTemplate from '../templates/Success/successTemplate';

import { theme } from '../utils/theme/theme';

const SuccessWrapper = styled.div`
    //background-color: green;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    
    @media ${ theme.device.browserzoom } {
        height: 1080px;
        min-height: auto;
    }
`;

class Success extends React.Component {
    render() {
        return (
            <div>
                <SuccessWrapper>
                    <SuccessTemplate />
                </SuccessWrapper>
            </div>
        );
    }
}

export default Success;