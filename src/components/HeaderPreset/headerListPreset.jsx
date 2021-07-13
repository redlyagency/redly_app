import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme/theme';

const HeaderWrapper = styled.div`
    padding-top: 50px;
`;
const HeaderH1 = styled.h1`
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-Medium';
    text-transform: uppercase;
    display: inline-block;

    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.MB_17 };
    }
`;

class HeaderPreset extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderH1>
                    { this.props.name }
                </HeaderH1>
            </HeaderWrapper>
        );
    }
}

export default HeaderPreset;