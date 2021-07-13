import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const H4AboutHeader = styled.h4`
    font-size: ${ theme.fontSize.DE_35 };
    font-family: 'Poppins-SemiBold';
`;

class AboutHeader extends React.Component {
    render() {
        return (
            <H4AboutHeader>
                { this.props.name }
            </H4AboutHeader>
        )
    }
}

export default AboutHeader;