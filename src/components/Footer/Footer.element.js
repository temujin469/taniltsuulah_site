import styled from "styled-components"
import { primaryClr,whiteClr,Container,navClr} from "../../globalStyles";
import {Link} from "react-router-dom";

export const FooterContainer = styled.div`
background:${navClr};
padding:60px 0 0 0;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const FooterSubscription = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:24px;
margin-bottom:24px;
color:${whiteClr};
`;

export const FooterSubHeading = styled.p`
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size:24px;
`;

export const FooterSubText = styled.p`
margin-bottom:24px;
font-size:20px;
`;

export const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:800px){
    flex-direction:column;
    width:80%;
}
`;

export const InputForm = styled.input`
padding:10px 20px;
margin-right:10px;
border-radius: 3px;
border:none;
outline:none;
font-size:16px;
border:1px solid ${whiteClr};

@media screen and (max-width:800px) {
    margin-bottom: 16px;
    width: 100%;
}
`;

export const FooterLinksContainer = styled.div`
width:100%;
max-width: 1000px;
display:flex;
justify-content:center;

@media screen and (max-width:800px){
    padding-top:32px;
}
`;

export const FooterLinksWrapper = styled.div`
display:flex;
justify-content:space-between;
width: 100%;

@media screen and (max-width:800px){
    flex-direction: column;
    width:auto;
}
`;

export const FooterLinkItems = styled.div`
display:flex;
flex-direction:column;
margin:16px;
box-sizing: border-box;
color:${whiteClr};

@media screen and (max-width:800px){
    margin:0;
    padding:10px;
    width:100%;
}
`;

export const FooterLinkTitle = styled.h2`
margin-bottom:16px;
`;

export const FooterLink = styled(Link)`
color:${whiteClr};
text-decoration:none;
margin-bottom:8px;

&:hover{
    color:${primaryClr};
    transition: all 0.3s ease;
}
`;

export const SocialMediaContainer = styled(Container)`
margin:0;
width:100%;
`;


export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
padding:13px 0;

&>:hover{
    color:${primaryClr};
}

@media screen and (max-width:800px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(Link)`
color:${whiteClr};
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 33px;
display: flex;
align-items: flex-start;

@media screen and (max-width:800px){
    margin-bottom: 20px;
}
`;

export const WebsiteRights = styled.small`
color:${whiteClr};

@media screen and (max-width:800px){
    margin-bottom: 20px;
}
`;

export const SocialLinks = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:280px;

&>:hover{
    color:${primaryClr};
}
`;

export const SocialLink = styled(Link)`
color:${whiteClr};
font-size:24px;
transition: all 0.3s ease;
`;


