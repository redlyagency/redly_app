import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme/theme';

const HeaderWrapper = styled.div`
    padding-top: 25px;
`;
const HeaderH1 = styled.h1`
    font-size: ${ theme.fontSize.DF_47 };
    font-family: 'Poppins-SemiBold';
    display: inline-block;

    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.MF_47 };
    }
`;
const HeaderUnderscore = styled.div`
    width: 80px;
    height: 4px;
    background-color: ${ theme.colors.black };
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 10px;

    @media ${ theme.device.mobileL } {
        width: 30px;
        margin-left: 10px;
    }
`;

class HeaderPreset extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderH1>
                    { this.props.name }
                </HeaderH1>
                <HeaderUnderscore />
            </HeaderWrapper>
        );
    }
}

export default HeaderPreset;