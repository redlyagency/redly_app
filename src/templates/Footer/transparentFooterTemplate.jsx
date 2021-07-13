import React from 'react';
import {
    TransparentFooterTemplateWrapper,
    FooterFooterContentCopyright,
} from './transparentFooterTemplate.style';
import { content } from '../../utils/data/mainPageData';

import FooterSocialMediaBar from '../../components/FooterSocialMediaBar/footerSocialMediaBar';

class TransparentFooterTemplate extends React.Component {
    render() {
        return (
            <TransparentFooterTemplateWrapper style={this.props.style}>
                <FooterSocialMediaBar />
                <FooterFooterContentCopyright>
                    { content.Footer.FooterFooterTitle }
                </FooterFooterContentCopyright>
            </TransparentFooterTemplateWrapper>
        )
    }
}

export default TransparentFooterTemplate;