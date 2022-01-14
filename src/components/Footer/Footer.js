import React from 'react';
import { FaFacebook,FaInstagram, FaTwitter, FaYoutube ,FaUserGraduate} from 'react-icons/fa';
import { Button1 } from '../../globalStyles';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    InputForm,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    SocialMediaContainer,
    SocialMediaWrap,
    SocialLogo,
    SocialLinks,
    SocialLink,
    WebsiteRights
} from "./Footer.element";

const Footer = ()=>{
return(
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our membership to receive the latest news and  trends
            </FooterSubHeading>
            <FooterSubText>
                You can unsubscribe
            </FooterSubText>
            <Form>
                <InputForm name="email" type="email" placeholder="Цахим шуудан"/>
                <Button1 primary>Илгээх</Button1>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Бидний тухай</FooterLinkTitle>
                    <FooterLink to="/sign-up">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Холбоос</FooterLinkTitle>
                    <FooterLink to="/sign-up">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Мэдээлэл</FooterLinkTitle>
                    <FooterLink to="/sign-up">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                    <FooterLink to="/">footer Link</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMediaContainer>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <FaUserGraduate style={{fontSize:"33px"}}/>
                    Temka
                </SocialLogo>
                <WebsiteRights>TEMKA & 2022</WebsiteRights>
                <SocialLinks>
                    <SocialLink to="#" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialLink>
                    <SocialLink to="#" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialLink>
                    <SocialLink to="#" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialLink>
                    <SocialLink to="#" target="_blank" aria-label="Youtube">
                        <FaYoutube/>
                    </SocialLink>
                </SocialLinks>
            </SocialMediaWrap>
        </SocialMediaContainer>
    </FooterContainer>
)
}

export default Footer;