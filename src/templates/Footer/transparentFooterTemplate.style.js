import styled from "styled-components";
import { theme } from "../../utils/theme/theme";

export const TransparentFooterTemplateWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    @media ${ theme.device.VerticalHeight } {
        bottom: 0;
    }
    @media ${ theme.device.VerticalHeightSuperPlusEnd } {
        display: none;
    }
`;
export const FooterFooterContentCopyright = styled.p`
    margin-top: 25px;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Poppins-Light';
    font-size: ${ theme.fontSize.DA_15 };
    color: ${ theme.colors.white };

    @media ${ theme.device.VerticalHeight } {
        margin-top: 5px;
    }
    @media ${ theme.device.VerticalHeightSuperPlusEnd } {
        display: none;
    }
`;