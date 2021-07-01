import styled from "styled-components";
import { Container } from "react-bootstrap";
import { theme } from "../../utils/theme/theme";

export const WorksWrapper = styled(Container)`
`;
export const HeaderPresetWrapper = styled.div`
    padding-top: 70px;
`;
export const UnderHeaderContent = styled.p`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    color: ${ theme.colors.gray };
    margin-top: -5px;
`;
export const UnderListWrapper = styled.div`
`;
export const UnderListUnderHeader = styled.h6`
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DB_17 };
    color: ${ theme.colors.gray };
`;
export const UnderListUnderHeaderButtonWrapper = styled.div`
    margin: 25px 0 0 20px;
    padding-bottom: 50px;
`;