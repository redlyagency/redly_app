import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const H3Styled = styled.h3`
    text-transform: uppercase;
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-Medium';
    margin-top: 30px;
`;

class AboutUpperHeader extends React.Component {
    render() {
        return (
            <H3Styled>
                { this.props.name }
            </H3Styled>
        )
    }
}

export default AboutUpperHeader;