import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import { About } from '../../utils/data/aboutPageData';

const AboutQuoteWrapper = styled.div`
    background-image: ${ theme.colors.bg_gradientQuote };
    width: 75%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    color: ${ theme.colors.transparent };
    -webkit-text-stroke: 1px ${ theme.colors.white };
    font-size: 25px;
    padding: 15px 25px 10px 25px;

    @media ${ theme.device.tablet } {
        width: 100%;
    }
`;
const QuoteParagraph = styled.p`

`;
const QuoteSign = styled.p`
    text-align: right;
`;

class AboutQuote extends React.Component {
    render() {
        return (
            <AboutQuoteWrapper>
                <QuoteParagraph>
                    { About.QuoteContent.QuoteParagraph }
                </QuoteParagraph>
                <QuoteSign>
                    { About.QuoteContent.QuoteSign }
                </QuoteSign>
            </AboutQuoteWrapper>
        )
    }
}

export default AboutQuote;