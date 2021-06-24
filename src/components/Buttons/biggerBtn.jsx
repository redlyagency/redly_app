import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

import ArrowIcon from '../../assets/svg/ArrowIcon';

const BtnWrapper = styled.div`
    width: 500px;
    :hover {
        margin-left: 10px;
    }
`;
const ArrowIconStyled = styled(ArrowIcon)`
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 55px;
    height: 30px;
    margin-top: 15px;
    transform: translateY(-50%);
    z-index: 200;
    margin-left: 20px;
`;
const H1BtnName = styled.h1`
    font-size: ${ theme.fontSize.DF_47 };
    color: ${ theme.colors.black };
    font-family: 'Poppins-SemiBold';

    display: inline-block;
`;
class BiggerBtn extends React.Component {
    render() {
        return (
            <BtnWrapper>
                <H1BtnName>
                    { this.props.name }
                </H1BtnName>
                <ArrowIconStyled className="43fev45f5111222" />
            </BtnWrapper>
        );
    }
}

export default BiggerBtn;