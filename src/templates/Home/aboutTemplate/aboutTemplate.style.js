import styled from 'styled-components';
import { theme } from '../../../utils/theme/theme';
import { Container } from 'react-bootstrap';

export const AboutWrapper = styled(Container)`
    padding-bottom: 25px;
`;
export const ContentParagraph = styled.h2`
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.gray };
    width: 60%;

    @media ${ theme.device.laptop } {
        width: 100%;
    }
`;
export const BtnWrapperMediaClass = styled.div`
    width: 20%;
    margin-top: 30px;

    @media ${ theme.device.laptop } {
        width: 22%;
        margin-top: 25px;
    }
    @media ${ theme.device.tablet } {
        width: 28%;
        margin-top: 15px;
    }
    @media ${ theme.device.mobileL } {
        width: 55%;
    }
    @media ${ theme.device.mobileM } {
        width: 55%;
    }
    @media ${ theme.device.mobileS } {
        width: 70%;
    }
`;