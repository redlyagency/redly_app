import React from 'react';
import styled from 'styled-components';

import ContactTemplate from '../templates/Contact/contactTemplate';

import { theme } from '../utils/theme/theme';

const ContactWrapper = styled.div`
    //background-color: green;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    
    @media ${ theme.device.browserzoom } {
        height: 1080px;
        min-height: auto;
    }
`;

class List extends React.Component {
    render() {
        return (
            <div>
                <ContactWrapper>
                    <ContactTemplate />
                </ContactWrapper>
            </div>
        );
    }
}

export default List;