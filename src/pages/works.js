import React from 'react';
import styled from 'styled-components';

import WorksTemplate from '../templates/Works/worksTemplate';
import FooterTemplate from '../templates/Footer/footerTemplate';

import { theme } from '../utils/theme/theme';

const WorksWrapper = styled.div`
    position: relative;
    background-color: transparent;
`;
const FooterWrapper = styled.div`
    position: relative;
    background-color: ${ theme.colors.darkergray };
    height: 500px;
`;

class Works extends React.Component {
    render() {
        return (
            <>
                <WorksWrapper>
                    <WorksTemplate />
                </WorksWrapper>
                <FooterWrapper>
                    <FooterTemplate />
                </FooterWrapper>
            </>
        );
    }
}

export default Works;