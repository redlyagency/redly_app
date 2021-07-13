import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const AboutContentWrapper = styled.div`
    font-size: ${ theme.fontSize.DD_18_5 };
    font-family: 'Poppins-Medium';
`;

class AboutContent extends React.Component {
    render() {
        return (
            <AboutContentWrapper>
                { this.props.content }
            </AboutContentWrapper>
        )
    }
}

export default AboutContent;