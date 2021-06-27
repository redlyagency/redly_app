import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';

import FacebookSvg from '../../assets/svg/Icons/Facebook';
import InstagramSvg from '../../assets/svg/Icons/Instagram';
import GithubSvg from '../../assets/svg/Icons/Github';
import LinkedInSvg from '../../assets/svg/Icons/Linkedin';
import BehanceSvg from '../../assets/svg/Icons/Behance';

const FooterSocialBarWrapper = styled.div`
    display: inline-block;
    margin-top: 0;

    @media ${ theme.device.mobileL } {
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;
const FacebookSvgStyled = styled(FacebookSvg)`
    width: 11px;
    height: 11px;
    margin-left: 0;
    display: inline-block;

    :hover {
        transform: scale(1.5);
    }
`;
const InstagramSvgStyled = styled(InstagramSvg)`
    width: 11px;
    height: 11px;
    margin-left: 20px;
    display: inline-block;

    :hover {
        transform: scale(1.5);
    }
`;
const GithubSvgStyled = styled(GithubSvg)`
    width: 11px;
    height: 11px;
    margin-left: 20px;
    display: inline-block;

    :hover {
        transform: scale(1.5);
    }
`;
const LinkedInSvgStyled = styled(LinkedInSvg)`
    width: 11px;
    height: 11px;
    margin-left: 20px;
    display: inline-block;

    :hover {
        transform: scale(1.5);
    }
`;
const BehanceSvgStyled = styled(BehanceSvg)`
    width: 15px;
    height: 10px;
    margin-left: 20px;
    display: inline-block;

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