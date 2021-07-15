import React from 'react';
import {
    ContactWrapper,
    ContactHeaderWrapperWrapper,
    CirclesDecorationHeaderStyled,
    ContactHeaderWrapper,
    ContactUnderHeader,
    ContactFormWrapper,
    ContactFormStyled,
    CirclesDecorationContentStyled,
    TransparentFooterWrapper,
} from './contactTemplate.style';

import { Contact } from '../../utils/data/contactPageData';

import ContactHeader from '../../components/HeaderPreset/headerPreset';
import TransparentFooter from '../../templates/Footer/transparentFooterTemplate';

class ContactTemplate extends React.Component {
    render() {
        return (
            <ContactWrapper>
                <ContactHeaderWrapperWrapper>
                    <CirclesDecorationHeaderStyled />
                    <ContactHeaderWrapper>
                        <ContactHeader
                            name={ Contact.ContactHeaderName }
                        />
                    </ContactHeaderWrapper>
                    <ContactUnderHeader>
                        { Contact.ContactUnderHeaderName }
                    </ContactUnderHeader>
                </ContactHeaderWrapperWrapper>
                <ContactFormWrapper>
                    <ContactFormStyled />
                    <CirclesDecorationContentStyled />
                </ContactFormWrapper>
                <TransparentFooterWrapper>
                    <TransparentFooter
                        style={{
                            filter: 'invert(0.7)'
                        }}
                    />
                </TransparentFooterWrapper>
            </ContactWrapper>
        )
    }
}

export default ContactTemplate;