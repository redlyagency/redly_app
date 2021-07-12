import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const ColorsPresentWrapper = styled.div`
    height: 100px;
    width: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
`;
const SVGTEST = styled.svg`
    height: 100px;
    width: 100px;
`;
const ColorCode = styled.div`
    padding-top: 5px;
    font-size: 15.5px;
    text-align: center;
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.gray };
`;

class ColorsPresent extends React.Component {
    render() {
        return(
            <ColorsPresentWrapper>
                <SVGTEST
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 81.746 101.137"
                >
                    <defs>
                        <linearGradient
                            id="ColorsPresent_svg__a"
                            x1={0.5}
                            x2={0.5}
                            y2={1}
                            gradientUnits="objectBoundingBox"
                        >
                        <stop offset={0} stopColor={ this.props.color1 } />
                        <stop offset={1} stopColor={ this.props.color2 } />
                        </linearGradient>
                        <linearGradient
                            id="ColorsPresent_svg__b"
                            x1={0.5}
                            x2={0.5}
                            y2={1}
                            gradientUnits="objectBoundingBox"
                        >
                        <stop offset={0} stopColor={ this.props.color3 } />
                        <stop offset={1} stopColor={ this.props.color4 } />
                        </linearGradient>
                        <linearGradient
                            id="ColorsPresent_svg__c"
                            x1={0.11}
                            y1={0.187}
                            x2={0.5}
                            y2={1}
                            gradientUnits="objectBoundingBox"
                        >
                        <stop offset={0} stopColor={ this.props.color5 } />
                        <stop offset={1} stopColor={ this.props.color6 } />
                        </linearGradient>
                    </defs>
                    <g data-name="Group 129">
                        <path
                            data-name="Path 34"
                            d="M9615 2663.171v101.122l81.746-52.094z"
                            transform="translate(-9615 -2663.156)"
                            fill="url(#ColorsPresent_svg__a)"
                        />
                        <path
                            data-name="Path 36"
                            d="M9615.09 2764.293l11.529-6.958s-6.5-48.062 18.365-75.891c-13.177-6.944-29.895-18.115-29.895-18.115z"
                            transform="translate(-9615 -2663.156)"
                            fill="url(#ColorsPresent_svg__b)"
                        />
                        <path
                            data-name="Path 35"
                            d="M9696.746 2711.4s-43.76 18.524-55.963-3.68-25.693-44.563-25.693-44.563z"
                            transform="translate(-9615 -2663.156)"
                            fill="url(#ColorsPresent_svg__c)"
                        />
                    </g>
                </SVGTEST>
                <ColorCode>
                    { this.props.colorCode }
                </ColorCode>
            </ColorsPresentWrapper>
        )
    }
}

export default ColorsPresent;