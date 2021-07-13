import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme/theme';
import { Container } from 'react-bootstrap'

import AboutTemplate from '../templates/About/aboutTemplate';
import FooterTemplate from '../templates/Footer/footerTemplate';

const AboutWrapper = styled(Container)`
  
`;
const FooterWrapper = styled.div`
  position: relative;
  background-color: ${ theme.colors.darkergray };
  height: 500px;
`;

class About extends React.Component {
    render() {
        return (
          <>
            <AboutWrapper>
              <AboutTemplate />
            </AboutWrapper>
            <FooterWrapper>
              <FooterTemplate />
            </FooterWrapper>
          </>
        );
    }
}

export default About;