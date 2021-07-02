import styled from "styled-components";
import { Container } from "react-bootstrap";
import { theme } from "../../utils/theme/theme";

import CirclesDecorationHeader from '../../assets/svg/MuchCircles';
import CirclesDecorationContent from '../../assets/svg/TwoCircles';

import ContactForm from '../../components/ContactForm/contactForm';

export const ContactWrapper = styled(Container)`

`;
export const ContactHeaderWrapperWrapper = styled.div`
    position: relative;
`;
export const ContactHeaderWrapper = styled.div`
    padding-top: 75px;
    position: relative;
    z-index: 20;
`;
export const ContactUnderHeader = styled.h2`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    width: 75%;
    position: relative;
    z-index: 500;
`;
export const CirclesDecorationHeaderStyled = styled(CirclesDecorationHeader)`
    position: absolute;
    left: -120px;
    top: 40px;
    height: 300px;
    z-index: 1;
`;
export const CirclesDecorationContentStyled = styled(CirclesDecorationContent)`
    position: absolute;
    height: 550px;
    top: -125px;
    right: -50px;
`;
export const ContactFormWrapper = styled.div`
    position: relative;
    z-index: 50;
`;
export const ContactFormStyled = styled(ContactForm)`

`;