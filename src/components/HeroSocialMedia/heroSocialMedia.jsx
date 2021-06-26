import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

const MediaWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -100px;

    @media ${ theme.device.mobileL } {
        display: none;
    }
`;
const ULmedia = styled.ul`
    display: inline;
    list-style-type: none;
`;
const LImedia = styled.li`
    float: left;
    margin-left: 15px;
    position: relative;

    :nth-child(even) > a {
        color: ${ theme.colors.gray };
        text-decoration: none !important;
    }
    :nth-child(even) > a:hover {
        color: ${ theme.colors.gray };
        text-decoration: none !important;
        margin-left: 0;
    }

    :hover {
        margin-left: 20px;
    }
    :hover:nth-child(even) {
        margin-left: 15px;
    }
    ::before {
        content: '';
        position: absolute;
        height: 3px;
        background-color: white;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 0;
        transition: 0.2s;
    }
    :hover::before {
        width: 100%;
    }
`;
const Amedia = styled.a`
    color: ${ theme.colors.gray };
    text-decoration: underline;
    font-family: 'Poppins-SemiBold';
    font-size: ${ theme.fontSize.DC_18 };

    @media ${ theme.device.tablet } {
        font-size: ${ theme.fontSize.DCC_18 };
    }
`;

class HeroSocialMediaBar extends React.Component {
    render() {
        const namesMedia = [
            {
                name: 'Instagram',
                link: 'https://instagram.com'
            },
            {
                name: '/',
            },
            {
                name: 'Behance',
                link: 'https://behance.net'
            },
            {
                name: '/',
            },
            {
                name: 'GitHub',
                link: 'https://github.com'
            }
        ]
        return (
            <MediaWrapper>
                <ULmedia>
                    {namesMedia.map((value, index) => {
                        return (
                            <LImedia key={index}>
                                <Amedia href={value.link}>
                                    {value.name}
                                </Amedia>
                            </LImedia>
                        )
                    })}
                </ULmedia>
            </MediaWrapper>
        )
    }
}

export default HeroSocialMediaBar;