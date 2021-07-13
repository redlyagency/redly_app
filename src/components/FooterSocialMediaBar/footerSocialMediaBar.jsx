import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

import FacebookSvg from '../../assets/svg/Icons/Facebook';
import InstagramSvg from '../../assets/svg/Icons/Instagram';
import GithubSvg from '../../assets/svg/Icons/Github';
import LinkedInSvg from '../../assets/svg/Icons/Linkedin';
import BehanceSvg from '../../assets/svg/Icons/Behance';

const FooterSocialBarWrapper = styled.div`
    margin-top: -1px;

    @media ${ theme.device.mobileL } {
        margin-left: 50%;
        transform: translateX(-50%);
        width: 185px;
    }
`;
const FacebookSvgStyled = styled(FacebookSvg)`
    width: 13px;
    height: 13px;
    margin-left: 0;
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 20px;
        height: 20px;
    }

    :hover {
        transform: scale(1.5);
    }
`;
const InstagramSvgStyled = styled(InstagramSvg)`
    width: 13px;
    height: 13px;
    margin-left: 20px;
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 20px;
        height: 20px;
    }

    :hover {
        transform: scale(1.5);
    }
`;
const GithubSvgStyled = styled(GithubSvg)`
    width: 13px;
    height: 13px;
    margin-left: 20px;
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 20px;
        height: 20px;
    }

    :hover {
        transform: scale(1.5);
    }
`;
const LinkedInSvgStyled = styled(LinkedInSvg)`
    width: 13px;
    height: 13px;
    margin-left: 20px;
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 20px;
        height: 20px;
    }

    :hover {
        transform: scale(1.5);
    }
`;
const BehanceSvgStyled = styled(BehanceSvg)`
    width: 18px;
    height: 12px;
    margin-left: 20px;
    display: inline-block;

    @media ${ theme.device.mobileL } {
        width: 25px;
        height: 20px;
        margin-top: 3px;
    }

    :hover {
        transform: scale(1.5);
    }
`;

class FooterSocialMediaBar extends React.Component {
    render() {
        return (
            <FooterSocialBarWrapper>
                <a href="https://facebook.com">
                    <FacebookSvgStyled />
                </a>
                <a href="https://instagram.com">
                    <InstagramSvgStyled />
                </a>
                <a href="https://github.com">
                    <GithubSvgStyled />
                </a>
                <a href="https://linkedin.com">
                    <LinkedInSvgStyled />
                </a>
                <a href="https://behance.net">
                    <BehanceSvgStyled />
                </a>
            </FooterSocialBarWrapper>
        );
    }
}

export default FooterSocialMediaBar;