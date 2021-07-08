import React from 'react';
import {
    ContactWrapper,
    ContactHeaderWrapperWrapper,
    CirclesDecorationHeaderStyled,
    ContactHeaderWrapper,
    ContactFormWrapper,
    MessageAlert,
    CirclesDecorationContentStyled,
} from './successTemplate.style';

import ContactHeader from '../../components/HeaderPreset/headerPreset';
import TransparentFooter from '../../templates/Footer/transparentFooterTemplate';
import { btnPackage } from '../../utils/data/btnPageData';
import GoHomeBtn from '../../components/Buttons/ReversemainBtn';
import { Contact } from '../../utils/data/contactPageData';

class ContactTemplate extends React.Component {
    render() {
        return (
            <ContactWrapper>
                <ContactHeaderWrapperWrapper>
                    <CirclesDecorationHeaderStyled />
                    <ContactHeaderWrapper>
                        <ContactHeader
                            name={ Contact.AlertMessagesHeader }
                        />
                    </ContactHeaderWrapper>
                
                </ContactHeaderWrapperWrapper>
                <ContactFormWrapper>
                    <MessageAlert>
                        { Contact.AlertMessages }
                    </MessageAlert>
                    <CirclesDecorationContentStyled />
                </ContactFormWrapper>
                <GoHomeBtn
                    name={ btnPackage.MainBtn.GoHome }
                    style={{
                        width: '180px',
                        margin: '50px 0 0 50%',
                        transform: 'translateX(-50%)',
                        position: 'relative',
                        zIndex: '500',
                    }}
                    styleCircle={{
                        right: '15px',
                    }} 
                    styleArrow={{
                        transform: 'rotate(180deg) translateY(50%)',
                    }}
                />
                <TransparentFooter
                    style={{
                        filter: 'invert(0.7)'
                    }}
                />
            </ContactWrapper>
        )
    }
}

export default ContactTemplate;