import React from 'react';
import { useHistory } from "react-router-dom";
import {
    AboutWrapper,
    AboutHeaderWrapper,
    AboutContentWrapper,
    AboutUnderHeader,
    UnderListUnderHeaderButtonWrapper,
    AboutSocialMediaWrapper,
    EmailParagraph,
} from './aboutTemplate.style';
import { About } from '../../utils/data/aboutPageData';
import { btnPackage } from '../../utils/data/btnPageData';

import AboutHeader from '../../components/HeaderPreset/headerPreset';
import AboutUpperHeader from '../../components/AboutParagraphs/aboutUpperHeader';
import AboutHeaderContent from '../../components/AboutParagraphs/aboutHeader';
import AboutContent from '../../components/AboutParagraphs/aboutContent';
import AboutQuote from '../../components/AboutParagraphs/aboutQuote';
import AboutList from '../../components/AboutParagraphs/aboutList';

import AboutSocialMedia from '../../components/HeroSocialMedia/aboutSocialMedia';
import UnderListUnderHeaderButton from '../../components/Buttons/ReversemainBtn';

export const AboutTemplate = () => {
    let history = useHistory();
        return (
            <AboutWrapper>
                <AboutHeaderWrapper>
                    <AboutHeader
                        name={ About.MainHeader.AboutHeader }
                    />
                    <AboutUnderHeader>
                        { About.MainHeader.AboutHeaderUnder }
                    </AboutUnderHeader>
                </AboutHeaderWrapper>
                <AboutContentWrapper>
                    <AboutUpperHeader
                        name={ About.ParagraphHeaderUpper.storyHeader }
                    />
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.storyHeader }
                    />
                    <AboutContent
                        content={ About.ParagraphContent.storyContent }
                    />
                    <AboutQuote />
                    <AboutUpperHeader
                        name={ About.ParagraphHeaderUpper.processHeader }
                    />
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.processHeader }
                    />
                    <AboutContent
                        content={ About.ParagraphContent.processContent }
                    />
                    <AboutUpperHeader
                        name={ About.ParagraphHeaderUpper.toolsHeader }
                    />
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.toolsHeader }
                    />
                    <AboutContent
                        content={ About.ParagraphContent.toolsContent }
                    />
                    <AboutList />
                    <AboutUpperHeader
                        name={ About.ParagraphHeaderUpper.offersHeader }
                    />
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.offersHeader }
                    />
                    <AboutContent
                        content={ About.ParagraphContent.offersContent }
                    />
                    <AboutUpperHeader
                        name={ About.ParagraphHeaderUpper.contactHeader }
                    />
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.socialHeader }
                    />
                    <AboutSocialMediaWrapper>
                        <AboutSocialMedia />
                    </AboutSocialMediaWrapper>
                    <AboutHeaderContent
                        name={ About.ParagraphHeader.emailHeader }
                    />
                    <EmailParagraph href="mailto: contact@redly.me">
                        { About.EmailEndingParagraph.Email }&nbsp;
                    </EmailParagraph>
                    <EmailParagraph isSmall isBold>
                        { About.EmailEndingParagraph.AfterEmail }
                    </EmailParagraph>
                </AboutContentWrapper>
                <UnderListUnderHeaderButtonWrapper>
                    <div onClick={() => history.goBack()}>
                        <UnderListUnderHeaderButton
                            style={{
                                width: '175px',
                            }}
                            styleCircle={{
                                right: '20px'
                            }}
                            styleArrow={{
                                transform: 'translateY(-50%) rotate(180deg)',
                            }}
                            name={ btnPackage.MainBtn.GoBack }
                        />
                    </div>
                </UnderListUnderHeaderButtonWrapper>
            </AboutWrapper>
        )
    }

export default AboutTemplate;