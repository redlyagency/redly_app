import styled from "styled-components";
import { Link } from "react-router-dom";
const LinkStyled = styled(Link)`
    color: black;
    font-family: 'Poppins-SemiBold';
    text-decoration: underline;
`;
const ULStyledAbout = styled.ul`
    list-style-type: none;
`;
const PFont = styled.p`
    font-family: 'Poppins-Bold';
`;

const MainHeader = {
    AboutHeader: 'A few words about us.',
    AboutHeaderUnder: 'We hope that this honest description will encourage you to cooperate with us :)',
}
const ParagraphHeader = {
    storyHeader: 'A few words.',
    processHeader: 'How we work.',
    toolsHeader: 'What we use.',
    offersHeader: 'Our offers.',
    socialHeader: 'Social.',
    emailHeader: 'Email.',
}
const ParagraphHeaderUpper = {
    storyHeader: '/ 01 story',
    processHeader: '/ 02 The process',
    toolsHeader: '/ 03 The tools',
    offersHeader: '/ 04 offers',
    contactHeader: '/ 05 contact',
}
const ParagraphContent = {
    storyContent: <p>The  <span className="BoldSpanCont">assumption</span> of our agency is to <span className="BoldSpanCont">change</span> the internet for the <span className="BoldSpanCont">better</span>. To do this, it will be necessary to select the appropriate <span className="BoldSpanCont">content</span> and <span className="BoldSpanCont">design</span> the visual part. This is what our agency deals with. Selects the appropriate content and designs the <span className="BoldSpanCont">visual aspect</span>. All this takes place in favorable conditions, favorable to the customer and at a <span className="BoldSpanCont">reasonable</span> price. For many years, <span className="BoldSpanCont">websites</span> and <span className="BoldSpanCont">computer graphics</span> have been our main <span className="BoldSpanCont">occupation</span> and <span className="BoldSpanCont">passion</span>. It is worth choosing us because of the modern approach to the project itself and the client. All prices are calculated <span className="BoldSpanCont">individually</span> on the basis of the project’s application and the number of hours spent on execution. You can start working with us via the <span className="BoldSpanCont">social media</span> available below, and the contact form available <LinkStyled to="/contact">here</LinkStyled>.</p>,
    processContent: <p>In the beginning, it will be necessary to gather the necessary <span className="BoldSpanCont">information</span> and <span className="BoldSpanCont">assumptions</span>. This is done via an <span className="BoldSpanCont">email</span> interview. Then the information is consulted and a <span className="BoldSpanCont">better solution</span> is proposed. After preliminary arrangements, a graphic design is prepared and sent for approval. After applying the final <span className="BoldSpanCont">corrections</span>, the project is translated into a <span className="BoldSpanCont">functional application</span> in the form of a <span className="BoldSpanCont">website</span>. The last step is to <span className="BoldSpanCont">implement</span> the website on a specific <span className="BoldSpanCont">domain</span> and pay for the <span className="BoldSpanCont">order</span>.</p>,
    toolsContent: <p>In the <span className="BoldSpanCont">design</span> phase, we use software with which we can <span className="BoldSpanCont">visualize</span> the final product to the customer. Thanks to this, we are able to <span className="BoldSpanCont">avoid</span> unnecessary writing of complicated <span className="BoldSpanCont">functions</span> that take up most of the time <span className="BoldSpanCont">working</span> on the project. In the <span className="BoldSpanCont">production</span> phase, we use software that facilitates <span className="BoldSpanCont">code editing</span> by means of which we define the <span className="BoldSpanCont">final appearance</span> of the website and all its <span className="BoldSpanCont">necessary</span> functions.</p>,
    offersContent: <p>Our offer consists mainly of many types of websites such as <span className="BoldSpanCont">landing pages</span>, <span className="BoldSpanCont">online stores</span>, <span className="BoldSpanCont">web applications</span>, <span className="BoldSpanCont">blogs</span>, <span className="BoldSpanCont">information pages</span>. In addition, we deal with <span className="BoldSpanCont">computer graphics</span> and designing <span className="BoldSpanCont">application interfaces</span> and <span className="BoldSpanCont">websites</span>. During the cooperation, we are able to advise/write the <span className="BoldSpanCont">content</span> of the website. In all cases, we offer proven <span className="BoldSpanCont">hosting</span> plans, <span className="BoldSpanCont">domains</span> and <span className="BoldSpanCont">photos</span> based on <span className="BoldSpanCont">free</span> and <span className="BoldSpanCont">paid</span> licenses at <span className="BoldSpanCont">optimal</span> prices.</p>,
}
const QuoteContent = {
    QuoteParagraph: <p>&#8220;Choose a job you love and you will never have to work a day in your life.&#8220;</p>,
    QuoteSign: '- Confucius',
}
const ListContent = {
    CreativeDesignParagraph: <PFont>Creative Design</PFont>,
    WebDevelopmentParagraph: <PFont>Web Development</PFont>,
    CreativeDesignList: <ULStyledAbout><li>Adobe Illustrator</li><li>Adobe Photoshop</li><li>Adobe XD</li></ULStyledAbout>,
    WebDevelopmentList: <ULStyledAbout><li>HTML 5</li><li>CSS 3</li><li>JavaScript</li><li>React JS</li><li>Node JS</li><li>Git</li><li>NPM</li><li>Webpack</li></ULStyledAbout>,
}
const EmailEndingParagraph = {
    Email: 'contact@redly.me',
    AfterEmail: '(You can also contact with us, by contact form available here)',
}
export const About = {
    MainHeader,
    ParagraphHeader,
    ParagraphHeaderUpper,
    ParagraphContent,
    QuoteContent,
    ListContent,
    EmailEndingParagraph,
}