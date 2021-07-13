import styled from "styled-components";
import { theme } from "../../utils/theme/theme";

export const AboutWrapper = styled.div`

`;
export const AboutContentWrapper = styled.div`

`;
export const AboutHeaderWrapper = styled.div`
    padding-top: 60px;
`;
export const AboutUnderHeader = styled.h2`
    color: ${ theme.colors.gray };
    font-size: ${ theme.fontSize.DB_17 };
    font-family: 'Poppins-SemiBold';
    margin-top: -5px;
`;
export const UnderListUnderHeaderButtonWrapper = styled.div`
    margin: 25px 0 0 20px;
    padding-bottom: 50px;
`;
export const AboutSocialMediaWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 50px;

    @media ${ theme.device.mobileL } {
        height: 100px;
    }
`;
export const EmailParagraph = styled.a`
    font-family: ${({isBold}) => isBold ? 'Poppins-Medium' : 'Poppins-Bold'};
    font-size: ${({isSmall}) => isSmall ? '13px' : '16px'};
    display: inline-block;
    color: ${ theme.colors.black };
`;