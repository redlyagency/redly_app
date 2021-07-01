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
} from './contactTemplate.style';

import { Contact } from '../../utils/data/contactPageData';

import ContactHeader from '../../components/HeaderPreset/headerPreset';

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
            </ContactWrapper>
        )
    }
}

export default ContactTemplate;