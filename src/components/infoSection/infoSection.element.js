import styled from "styled-components";
import { whiteClr,navClr,primaryClr,lightGrad2} from '../../globalStyles';
import {Button} from "../../globalStyles"

export const InfoSec = styled.div`
color:${whiteClr};
padding: 150px 0;
background:${({lightBg}) => (lightBg ? lightGrad2 : navClr)};
`;

export const InfoRow = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
flex-direction:${({imgStart})=>(imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
margin-bottom:15px;
padding:0 15px;
/* flex:1; */
max-width:50%;
/* flex-basis:50%; */

@media screen and (max-width:750px){
    max-width: 100%;
    display:flex;
    justify-content: center;
}
`;

export const InfoButton = styled(Button)`
background-color:${({primary})=>primary ? primaryClr : navClr};
color:${whiteClr};
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom:60px;

@media screen and (max-width:750px){
    padding-bottom:65px;
}
`; 

export const TopLine = styled.div`
color:${({lightTopLine})=>lightTopLine ? "#a9b3c1" : "#4b59f7"};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.6px;
margin-bottom:16px;
`;

export const Heading = styled.h1`
margin-bottom:24px;
font-size:48;
color: ${({lightText})=>(lightText ? "#f7f8fa" : "#1c2237")};
`;

export const SubTitle = styled.p`
max-width: 440px;
margin-bottom:35px;
font-size: 18px;
line-height: 24px;
color:${({lightTextDesc})=>(lightTextDesc ? "#f7f8fa" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start})=>start ? "flex-start" : "flex-end"};
`;
export const Img = styled.img`
padding-right: 0;
border:0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;




